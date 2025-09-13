const express = require('express');
const Book = require('./book.model');
const router = express.Router();


// frontend => backend server => controller => book schema  => database => send to server => back to the frontend
//post = when submit something fronted to db
// get =  when get something back from db
// put/patch = when edit or update something
// delete = when delete something

//post a book 
router.post('/create-book', async (req, res) => {
    try {
        const newBook = await Book({ ...req.body })
        await newBook.save();
        res.status(200).send({ message: "Book Posted successfully", book: newBook })
    } catch (error) {
        console.error("Error creating book", error)
        res.status(500).send({ message: "Failed to create book", error })
    }
})

module.exports = router;