import React, { Component } from 'react'
import Movie from './movie'

const MovieView = (props) => {
    console.log(props.movieFound, 'props passed to movieview')
    console.log(props.results.results, 'results inside movieview')
    if (props.movieFound == true && props.results.results.length>0) {
        return (<div><Movie movieData={props.results.results}/></div>)
    } else {
        return <div></div>
    }
}

export default MovieView;