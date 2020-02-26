import React from 'react';

const News = (props) => {
    console.log(props, 'inside news comp')
    let list = props.response.articles
    console.log(list, 'inside news list variable')
        return (
            <ul>
                {list.map(function(item, index) {
                    return (<div>
                        <li key={ index }>TITLE: {item.title} DESCRIPTION: {item.description} URL: {item.url}</li>
                        </div>)
                })}
            </ul>)
    }


export default News;