import React, { useEffect } from 'react';
import BookItem from './BookItem';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks } from '../redux/actions/book'

const BookList = () => {

    const { books, loadings } = useSelector(state => state.book);
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(fetchBooks());
    }, []);
  

    return (
        <div className="container">
            {!loadings.books && 
                <div className="w-50 mx-auto" >
                    {books.map((item) => <BookItem book={item} />)}
                    {!books.length && <p>Книг нет</p>}
                </div>
            }
        </div>
    )
}

export default BookList;