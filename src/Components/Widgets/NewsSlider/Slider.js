import React, { Component } from 'react'
import axios from 'axios'
import SliderTemplate from './SliderTemplate'
export default class Slider extends Component {
    state = {
        news: []
    }
    componentWillMount(){
        axios.get(`http://localhost:3004/articles?_start=0&_end=3`)
        .then( response =>{
            this.setState({
                news: response.data
            })
        })
    }
    render() {
        console.log('news', this.state.news)
        return (
            <div>
               <SliderTemplate {...this.state.news}/>
            </div>
        )
    }
}
