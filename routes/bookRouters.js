const express = require("express");

const router = express.Router();

const Books = require("../model/booksMode");
const booksController = require("../controller/BookController");

router.get("/", booksController.getAllBooks);
router.post("/", booksController.addBooks);
router.get("/:id", booksController.getById);
router.put("/:id", booksController.updateBook);
router.delete("/:id", booksController.deleteBook);
// router.post("/",async (res,res)=>{
//     let books ;
// })
module.exports = router;