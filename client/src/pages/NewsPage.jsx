import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchNews } from './../redux/actions/news'

const NewsPage = () => {

  const { news, loadings } = useSelector(state => state.news);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNews());
  }, []);

  return (
    <div className="container">
      <h1 className='mt-3'>News</h1>
      {!loadings.news && 
          <div className="d-flex flex-wrap justify-content-between">
          {news.map((item,index)=>{
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
          })}
        </div>
      }
    </div>
  );
}

export default NewsPage;
