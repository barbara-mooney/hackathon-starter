import React from 'react';

const Movie = (props) => {
    console.log(props, 'inside movie comp')
    let list = props
    console.log(list)
        return (
            <ul>
                {list.movieData.map(function(item, index) {
                    return (<div>
                        <li key={ index }>TITLE: {item.original_title} OVERVIEW: {item.overview} RELEASE: {item.release_date}</li>
                        </div>)
                })}
            </ul>)
    }

export default Movie;