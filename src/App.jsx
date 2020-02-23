import React, { Component } from 'react';
import Axios from 'axios';
import MovieView from './MovieView';
import { response } from 'express';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userMovie: '',
      response: '',
      movieData: '',
      original_title: '',
      poster_path: '',
      released_date: '',
      overview: '',
      homepage: '',
      movieFound: false,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.searchMovie = this.searchMovie.bind(this);
  }

  handleInputChange(event) {
    event.preventDefault()
    this.setState({
      [event.target.name]: event.target.value,
    });
    }

  componentWillMount() {
    Axios 
    .get('/api')
    .then(response => this.setState ({ response: response.data }),
    )}

  searchMovie(event) {
    console.log(this.state.response)
    } 
  

  render() {
    let display; 
    let status = this.state.movieFound;
      if (movieFound == true) {
        <MovieView
              original_title={this.state.original_title}
              poster_path={this.state.poster_path}
              release_date={this.state.released_date}
              overview = {this.state.overview}
              homepage = {this.state.homepage}
              />
      }

    return (
      <div className="card">
        <div className="card-body">
          <h1 className="card-text">Movie Finder</h1>
          <input name="userMovie" onChange={this.handleInputChange} placeholder="Enter Movie" value={this.state.userMovie}></input>
          <button onClick={this.searchMovie}>Search Movie</button>
        </div>
        <div>{display}</div>
      </div>
    );
  }
}

export default App;