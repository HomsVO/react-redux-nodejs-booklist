import React from 'react';
import BookList from '../сomponents/BookList';

const BooksPage = () => {

  return (
      <div className="container">
        <h1 className='mt-3 text-center'>Books</h1>
        <BookList />
      </div>
    );
}

export default BooksPage;
