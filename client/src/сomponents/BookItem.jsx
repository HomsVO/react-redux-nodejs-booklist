import React from 'react';
import { useDispatch } from 'react-redux';
import { completeBookRequest } from './../redux/actions/book';
const BookItem = ({ book }) => {
    const dispatch = useDispatch();

    const completeBook = () => {
        console.log(book)
        dispatch(completeBookRequest({
            completed: !book.completed,
            _id: book._id
        }));
    }

    return (
        <div className="book mb-3">
            <p className="book__author">{book.author}</p>
            <p className="book__title">{book.title}</p>
            <input type="checkbox" checked={book.completed} onChange={completeBook} className="book__completed"/>
        </div>
    )
}
export default BookItem;