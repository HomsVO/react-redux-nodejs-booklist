const router = require('express').Router();
const Book = require('./../models/Book');


router.get('/books', async (req, res) => {
    
    const books = await Book.find({});

    res.json(books);

})
router.post('/book/c', async (req, res) => {
    
    const { author, title } = req.body;
    const book = new Book({author, title});
    book.save();

    const books = await Book.find({});

    res.json(books);
})



module.exports = router;