const mongoose = require('mongoose');

const Book = mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    author: {
        type: String,
        require: true
    },
    completed: {
        type: Boolean,
        default: false
    },
})

module.exports = mongoose.model('Book', Book);