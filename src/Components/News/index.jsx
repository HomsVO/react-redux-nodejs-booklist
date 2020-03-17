import React from 'react';
import { Route , Router , Switch} from 'react-router-dom';
import style from './index.module.scss';

class News extends React.Component {
  state = {
    news:[],
    isLoaded:false,
    error:''
  }
  componentDidMount(){
    let url = 'http://newsapi.org/v2/top-headlines?country=us&apiKey=ff38cedd9fd84e048e80bd5b1d4610db';

    fetch(url)
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          isLoaded: true,
          news: result.articles
        });
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    )
  }
  render(){
    return (
      <div className="container">
        <h1 className='mt-3'>News</h1>
        {this.state.isLoaded && 
          <div className="container">
            <div className="row justify-content-between">
            {this.state.news.map((item)=>{
                return (
                  <div class="card mt-3" style={{width:"30%"}}>
                    <img class="card-img-top" src={item.urlToImage} alt="Card image cap" />
                    <div class="card-body">
                      <h5 class="card-title">{item.title}</h5>
                      <p class="card-text">{item.description}</p>
                      <a href={item.url} target="_blank" class="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>
                )
            })}
            </div>
          </div>
        }
      </div>
    );
  }

}

export default News;
