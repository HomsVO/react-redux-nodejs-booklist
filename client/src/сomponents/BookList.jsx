import React from 'react';
import BookItem from './BookItem';
import { useSelector } from 'react-redux';

const BookList = () => {

    const { books } = useSelector(state => state.book);

    return (
        <div className="container">
            <div className="w-75 mx-auto" >
                {books.map((item, index) => <BookItem key={index} book={item} />)}
                {!books.length && <p>Books not found</p>}
            </div>
        </div>
    )
}

export default BookList;