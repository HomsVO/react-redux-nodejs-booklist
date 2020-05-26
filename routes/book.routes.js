const router = require('express').Router();
const Book = require('./../models/Book');

router.get('/books', async (req, res) => {
    
    const books = await Book.find({});

    res.json(books);

})
router.post('/book/add', async (req, res) => {
    
    const { author, title } = req.body;
    const book = new Book({author, title});
    book.save();

    const books = await Book.find({});
    
    res.json(books);
})

router.post('/book/complete', async (req, res) => {
    
    const { completed, _id } = req.body;

    const book = await Book.findOne({ _id });
    if(!book){
        return res.status(400).json({message:"Book not found"});
    }
    book.completed = completed;
    await book.save();

    const books = await Book.find({});
    res.json(books);
})
router.post('/book/d', async (req, res) => {
    
    const { _id } = req.body;

    const book = await Book.findOne({ _id });
    if(!book){
        return res.status(400).json({message:"Book not found"});
    }
    await book.remove();

    const books = await Book.find({});
    res.json(books);
})

router.post('/book/u', async (req, res) => {
    
    const newData = req.body;

    const book = await Book.findOne({ _id:newData._id });

    if(!book){
        return res.status(400).json({message:"Book not found"});
    }

    await book.update(newData);

    const books = await Book.find({});
    res.json(books);
})



module.exports = router;