import React from 'react';

const Movie = (props) => {
    // THIS CONSOLE SHOWS THE ARRAY OF MOVIES AND IT CONSOLES LOG OK.
    console.log(props.results.results, 'array props results results')

    let display;
    //I ALSO TRIED THE FOR LOOP BUT IT DIDN'T WORK. I TRIED RETURNING THE VALUE OR SAVING IT TO THE VARIABLE DISPLAY AND THEN RETURNING IT BUT IT'S NOT WORKING. I'M CONFUSED ON HOW TO MAKE IT WORK.

    props.results.results.forEach ((movie) => {
        display = 
            <div>
                `Movie title: ${movie.original_title}`
            </div>
    })
    
    return 
        display;

}

export default Movie;