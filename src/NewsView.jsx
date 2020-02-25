import React from 'react';

export default props => (
    <div>        
        <div className = "card card-body">
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <a href={props.url} className="btn btn-link">Go to news</a>
        </div>
    </div>
);
