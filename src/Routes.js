import React, { Component } from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './Components/Home/Home'
import Layout from './Hoc/Layout/Layout'

export default class Routes extends Component {
    render() {
        return (
            <Layout>
                  <Switch>
               
               <Route path = "/" exact component = {Home} />
           </Switch>
            </Layout>        
        )
    }
}
