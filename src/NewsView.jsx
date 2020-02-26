import React, { Component } from 'react'
import News from './News'

const NewsView = (props) => {
    console.log(props, 'consolelog insice newsview')
    if (props.newsFound == true && props.response.totalResults>0) {
        return (<div><News response={props.response}/></div>)
    } else {
        return <div></div>
    }
}

export default NewsView;
