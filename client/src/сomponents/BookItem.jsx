import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { completeBookRequest, deleteBookRequest } from './../redux/actions/book';
const BookItem = ({ book }) => {
    
    const dispatch = useDispatch();

    const completeBook = (e) => {
        dispatch(completeBookRequest({
            completed: !book.completed,
            _id: book._id
        }));
    }
    const deleteBook = (e) => {
        dispatch(deleteBookRequest(book._id));
    }

    return (
        <div className="book mb-3">
            <p className="book__author">{book.author}</p>
            <p className="book__title">{book.title}</p>
            <input type="checkbox" hidden id={book._id} checked={book.completed} onChange={completeBook} className="book__completed"/>
            <label htmlFor={book._id}>{book.completed?'Прочитано':'Не прочитано'}</label>
            <button className="book__remove" onClick={deleteBook}>Удалить</button>
            <Link to={"/change/" + book._id} className="book__remove">Изменить</Link>
        </div>
    )
}
export default BookItem;