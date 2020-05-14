import React from 'react';

const BookItem = ({ book }) => {

    return (
        <div className="book mb-3">
            <p className="book__author">{book.author}</p>
            <p className="book__title">{book.title}</p>
            <input type="checkbox" checked={book.completed} className="book__completed"/>
        </div>
    )
}
export default BookItem;