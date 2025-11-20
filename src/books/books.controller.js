const Book = require("./book.model");

const postABook = async (req, res) => {
    try {
        const newBook = await new Book({ ...req.body })
        newBook.save();
        console.log("req.params - ", req.params)
        res.status(200).send({ message: "Book Posted Sucessfully", book: newBook })
    } catch (error) {
        console.error("Error creating book", error)
        res.status(500).send({ message: "Failed to create book", Error: error })
    }
}

const getAllBoooks = async (req, res) => {
    try {
        const books = await Book.find().sort({ createdAt: -1 });
        res.status(200).send({ message: "Fetching Books from database", books: books })
    } catch (error) {
        console.error("Error Fetching details", error)
        res.status(500).send({ message: "Failed to fetch books", Error: error })
    }
}

const getSingleBook = async (req, res) => {
    try {
        const { id } = req.params;
        const book = await Book.findById(id);
        if (!book) {
            res.status(404).send({ message: "Book not found" });
        }
        res.status(200).send({ message: "Fetching book from database", book: book })
    } catch (error) {
        console.error("Error Fetching book", error)
        res.status(500).send({ message: "Failed to fetch book", Error: error })
    }
}

//update book data 
const updateBook = async (req, res) => {
    try {
        const { id } = req.params
        const updateBook = await Book.findByIdAndUpdate(id, req.body, { new: true });
        if (!updateBook) {
            res.status(404).send({ message: "Book not found" });
        }
        res.status(200).send({ message: "Updated book in the database", updateBook: updateBook })
    } catch (error) {
        console.error("Error updating book", error)
        res.status(500).send({ message: "Failed to update book", Error: error })
    }
}

//delete a book 
const deleteBook = async (req, res) => {
    try {
        const { id } = req.params
        const deleteBook = await Book.findByIdAndDelete(id)
        if (!deleteBook) {
            res.status(404).send({ message: "Book is not found" });
        }
        res.status(200).send({ message: "Book\ deleted sucessfully", DeletedBook: deleteBook })
    } catch (error) {
        console.error("Error deleting a book", error)
        res.status(500).send({ message: "Failed to delete book", Error: error })
    }
}


module.exports = { postABook, getAllBoooks, getSingleBook, updateBook, deleteBook } 