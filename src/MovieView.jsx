import React, { Component } from 'react'
import Movie from './movie'

const MovieView = (props) => {
    console.log(props.movieFound, 'props passed to movieview')
    console.log(props.results.results, 'results inside movieview')
    
    if (props.movieFound == true && props.results.results.length>0) {
        return (
            <div>
                {/* I PROBABLY DON'T NEED TO CALL THIS OTHER COMPONENT AND COULD DO THE FOR LOOP HERE BUT I'M NOT SURE HOW. */}
                <Movie results={props.results}
                    />
            </div>
            )
    } else {
        return <div></div>
    }
}

export default MovieView;

// THIS IS WHAT I HAD HARD-CODED TO MAKE IT SHOW ON THE SCREEN AND IT WORKED. 
// const MovieView = (props) => {
//     console.log(props.movieFound, 'props passed to movieview')
//     console.log(props.results.results, 'results inside movieview')
    
//     if (props.movieFound == true && props.results.results.length>0) {
//         return (
//             <div>
//                 <p>Movie title: {props.results.results[0].original_title}</p>
//                 <p>Overview: {props.results.results[0].overview}</p>
//             </div>
//             )
//     } else {
//         return <div></div>
//     }
// }