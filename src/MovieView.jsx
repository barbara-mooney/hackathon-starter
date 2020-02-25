import React, { Component } from 'react';

const MovieView = (props) => {
    console.log(props.movieFound, 'props passed to movieview')
    console.log(props.results.results, 'results inside movieview')

    const testFunction = () => {
        if (props.movieFound == true && props.results.length>0) {
            {props.results.results.map(movie => {
                return 
                    <div>
                        <h3>{movie.original_title}</h3>
                        <p>{movie.release_date}</p>
                        <p>{movie.overview}</p>  
                    </div>      
                })
            }
        } else {
            return <div></div>
        }
    };

    return (
        <div>
            testFunction()
        </div>
    )
}
export default MovieView;
