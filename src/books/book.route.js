const express = require('express');
const Book = require('./book.model');
const { postABook, getAllBoooks, getSingleBook, updateBook, deleteBook } = require('./books.controller');
const verifyAdminToken = require('../middleware/verifyAdminToken');
const router = express.Router();


// frontend => backend server => controller => book schema(validate)  => database => send to server => back to the frontend
//post = when submit something fronted to db
// get =  when get something back from db
// put/patch = when edit or update something
// delete = when delete something

//post a book 
router.post('/create-book', verifyAdminToken, postABook)

//get all books
router.get('/', getAllBoooks)

//get single book endpoint
router.get('/:id', getSingleBook)

//update a book route
router.put("/edit/:id", verifyAdminToken, updateBook)

//delete a book route
router.delete("/:id", verifyAdminToken, deleteBook)

module.exports = router;