const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/bookRouters");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
// const Base_URL = process.env.BASE_URL;

// middleWares
app.use(express.json());
app.use(cors());
require("dotenv").config();
app.use("/books", router); // local

mongoose
  .connect(process.env.LINK)
  .then(() => {
    console.log("connected to  MongooseDB");
  })
  .then(() => {
    app.listen(port);
    // console.log("connect to port");
  })
  .catch((error) => {
    console.log("opps something went wrong", { message: error });
  });

app.get("/", (req, res) => {
  res.status(200)?.json({ message: "ok" });
  // console.log("connected to port");
});

// app.listen(5000);

