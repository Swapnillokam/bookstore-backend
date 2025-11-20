const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    trending: {
        type: Boolean,
        required: true,
    },
    coverImage: {
        type: String,
        required: true,
    },
    oldPrice: Number,
    newPrice: Number,
    createdAt: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true,
});

const Book = mongoose.model('Book', bookSchema);
// const Book = mongoose.model('Books', bookSchema); do not write this way because in DB it will be converted to plural and small letters (i.e books)

module.exports = Book;