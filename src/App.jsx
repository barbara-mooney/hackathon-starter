import React, { Component } from 'react';
import Axios from 'axios';
import MovieView from './MovieView';
import NewsView from './NewsView';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      queryMovie: '',
      results: [],
      response: [],
      movieFound: false,
      newsFound: true,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.searchMovie = this.searchMovie.bind(this);
    this.getNews= this.getNews.bind(this);
  }

  handleInputChange(event) {
    event.preventDefault()
    this.setState({
      [event.target.name]: event.target.value,
    });
    }

  searchMovie(event) {
    console.log(this.state.queryMovie)
    event.preventDefault()
    Axios
    .get(`/api?query=${this.state.queryMovie}`)
    .then(results => results.data)
    .then(results => this.setState({ 
      results: results,
      movieFound: true,
      queryMovie: '',
     }))
  }

  getNews(event) {
    event.preventDefault()
    Axios
    .get(`http://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=4a6b942733e54342962e5df94feb48aa`)
    .then(response => response.data)
    .then(response => this.setState({ response }));
  }

  render() {

    return (
      <div className="container">
        <div className="headerbodycontainer">
          <h2>Movie finder and E! News!</h2>
        </div>
          <div className="row">
            <div className="col-6">
              <div className="headerbodycardcontainer">
                <div className="card-header">Movie Finder</div>
                <div className="card-body">
                  <input name="queryMovie" onChange={this.handleInputChange} placeholder="Enter Movie" value={this.state.queryMovie}></input>
                  <button onClick={this.searchMovie}>Search Movie</button>
                </div> 
                <div className="container">
                  <MovieView 
                    results={this.state.results}
                    movieFound={this.state.movieFound}
                  />
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="headerbodycardcontainer">
                <div className="card-header">Entertainment news</div>
                <div className="card-body">
                  <button onClick={this.getNews}>Get entertainment news</button>
                </div> 
                <div className="container">
                  <NewsView
                    response={this.state.response}
                    newsFound={this.state.newsFound}
                    />
                </div>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default App;