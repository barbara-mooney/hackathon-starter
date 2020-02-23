import React, { Component } from 'react';
import Axios from 'axios';
// import MovieView from './MovieView';
// import { response } from 'express';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userMovie: '',
      result: '',
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
      userMovie: event.target.value,
    });
    }

  searchMovie(event) {
    console.log(this.state.userMovie)
    event.preventDefault()
    Axios
    .get(`/api?query=${this.state.userMovie}`)
    .then(result => {
      console.log(result.data)
      this.setState ({ 
        result: result.data
        })
      }) 
  }

  render() {
    // let display;
    // if (this.state.movieFound == true) {
    //   return 
    //     display = 
    //       <div>
    //         console.log(this.state.response)
    //         var original_title = this.state.response.original_title;
    //         console.log(original_title)
    //         var poster_path = "https://image.tmdb.org/t/p/w500" + this.state.response.poster_path;
    //         console.log(poster_path)
    //         var release_date = this.state.response.release_date;
    //         console.log(release_date)
    //         var overview = this.state.response.overview;
    //         console.log(overview)
    //         var homepage = this.state.response.homepage;
    //         console.log(homepage);
    //         <MovieView
    //           original_title={this.state.original_title}
    //           poster_path={this.state.poster_path}
    //           release_date={this.state.released_date}
    //           overview = {this.state.overview}
    //           homepage = {this.state.homepage}
    //           />
    //       </div>
    // }

    return (
      <div className="container">
        <div className="row">
            <div className="col-6">
              <div className="card-header">Movie Finder</div>
                <div className="card-body">
                  <input name="userMovie" onChange={this.handleInputChange} placeholder="Enter Movie" value={this.state.userMovie}></input>
                  <button onClick={this.searchMovie}>Search Movie</button>
                </div>
                {/* <div className="card-body">{display}</div> */}
              </div>
            </div>
        </div>
    );
  }
}

export default App;