import React from 'react';

class News extends React.Component {
  state = {
    news:[],
    isLoaded:false,
    error:''
  }
  componentDidMount(){
    let url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=ff38cedd9fd84e048e80bd5b1d4610db';

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
            <div className="d-flex flex-wrap justify-content-between">
            {this.state.news.map((item,index)=>{
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

}

export default News;
