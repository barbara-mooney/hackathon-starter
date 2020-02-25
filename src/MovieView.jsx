import React, { Component } from 'react';

const MovieView = (props) => {
    console.log(props.movieFound, 'props passed to movieview')
    console.log(props.results.results, 'results inside movieview')
    if (props.movieFound == true && props.results.results.length>0) {
        return (
            <div>
                <p>Movie title: {props.results.results[0].original_title}</p>
                <p>Overview: {props.results.results[0].overview}</p>
            </div>
            )
    } else {
        return <div></div>
    }
}

export default MovieView;