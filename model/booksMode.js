const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bookStoreSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  author: {
    type: String,
    require: true,
  },
  image: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  available: {
    type: Boolean,
  },
});

module.exports = mongoose.model("books", bookStoreSchema);