import React from 'react';
import BookItem from './BookItem';
import { useSelector } from 'react-redux';
import Loader from './Loader';

const BookList = () => {

    const { books, loadings } = useSelector(state => state.book);

    return (
        <div className="container">
            <div className="w-50 mx-auto" >
                {loadings.books && <Loader />}
                {!loadings.books && books.map((item, index) => <BookItem key={index} book={item} />)}
                {!loadings.books && !books.length && <p>Books not found</p>}
            </div>
        </div>
    )
}

export default BookList;