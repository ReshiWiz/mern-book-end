const Books = require("../model/booksMode");

const getAllBooks = async (req, res) => {
  let books;
  try {
    books = await Books.find();
  } catch (error) {
    console.log("error", error);
  }
  if (!books) {
    return res.status(404).json({ message: "No products fond" });
  } else {
    return res.status(200).json({ books: books });
  }
};

const getById = async (req, res) => {
  const id = req.params.id;
  let book;
  try {
    book = await Books.findById(id);
  } catch (error) {
    console.log("error", error);
  }
  if (!book) {
    return res.status(404).json({ message: "unable to find the books" });
  } else {
    return res.status(200).json({ book });
  }
};

const addBooks = async (req, res) => {
  const { name, author, description, price, available, image } = req.body;
  let books;
  try {
    books = new Books({
      name,
      author,
      description,
      price,
      available,
      image,
    });
    await books.save();
  } catch (error) {
    console.log("error", error);
  }
  if (!books) {
    return res.status(500).json({ message: "unable to add the book" });
  } else {
    return res.status(201).json({ books });
  }
};

const updateBook = async (req, res) => {
  const id = req.params.id;
  const { name, author, description, price, available, image } = req.body;
  let book;
  try {
    book = await Books.findByIdAndUpdate(id, {
      name,
      author,
      description,
      price,
      available,
      image,
    });
    book = await book.save();
    if (!book) {
      return res.status(404).json({ message: "unable to update by book's Id" });
    } else {
      return res.status(200).json({ book });
    }
  } catch (error) {
    console.log("error: 'unable to update books by Id'", error);
  }
};

const deleteBook = async (req, res) => {
  const id = req.params.id;
  let book;
  try {
    book = await Books.findByIdAndDelete(id);
  } catch (error) {
    console.log("unable to the book by Id params", error);
  }
  if (!book) {
    return res.status(404).json({ message: "unable to delete the book" });
  } else {
    // return res.status(200).json({ book });
    return res.status(200).json({ message: "product is deleted" });
  }
};

exports.getAllBooks = getAllBooks;
exports.addBooks = addBooks;
exports.getById = getById;
exports.updateBook = updateBook;
exports.deleteBook = deleteBook;
