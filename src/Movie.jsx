import React from 'react';

const Movie = (props) => {
    return (
        <div className="col-6">
            <div className="card">
                <div className="card-image-top">
                    {
                        props.poste_path == null ? <img src={`/movienotfound.jpg`} alt="card image"/> : <img src={`http://image.tmdb.org/t/p/w185${props.poster_path}`}/>
                    }
                </div>
                <div className="card-body">
                    <p><a href="#">View Details</a></p>
                </div>
            </div>
        </div>
    )
}

export default Movie;