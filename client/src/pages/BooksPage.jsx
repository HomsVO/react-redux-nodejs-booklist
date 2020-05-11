import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks } from '../redux/actions/book'

const Books = () => {

  const { books, loadings } = useSelector(state => state.book);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchBooks());
  // }, []);

  return (
    <div className="container">
      <h1 className='mt-3'>books</h1>
      {!loadings.books && 
          <div className="d-flex flex-wrap justify-content-between">
            <div className="book">
              <p className="book__author">Джон Толкин</p>
              <p className="book__title">Властелин колец. Братство Кольца</p>
              <input type="checkbox" id={"book-" + "1"} className="book__completed"/>
            </div>
            <div className="book">
              <p className="book__author">Джон Толкин</p>
              <p className="book__title">Властелин колец. Братство Кольца</p>
              <input type="checkbox" id={"book-" + "2"} className="book__completed"/>
            </div>
          {/* {books.map((item,index)=>{
              return (
                <div key={index} className="card mt-3" style={{width:"30%"}}>
                  <img className="card-img-top" src={item.urlToImage} alt="" />
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.description}</p>
                    <a href={item.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
              )
          })} */}
        </div>
      }
    </div>
  );
}

export default Books;
