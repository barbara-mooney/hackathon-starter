import React, { Component } from 'react';

export default props => (

    <div>        
        <div className = "container movieCard">
            <div className="row">
                <div className="col">
                    <h3>Title: {props.original_title}</h3>
                    <img src="{props.poster_path}" alt={`${props.original_title}'s picture`} />
                    <h4>Overview: {props.overview}</h4>
                    <h4>Year released: {props.released_date}</h4>
                    <h4>Link to movie: {props.homepage}</h4>
                </div>
            </div>

        </div>
    </div> 
);
