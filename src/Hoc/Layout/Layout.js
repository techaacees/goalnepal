import React, { Component } from 'react'
import './layout.css'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
export default class Layout extends Component {
    state = {
        showNav: false
    }
    toggleSidenav = (action) =>{
        this.setState({
            showNav: action
        })
    }
    render() {
        return (
            <div>
                <Header
                 showNav = {this.state.showNav}
                 onOpenNav = {() => this.toggleSidenav(true)}
                 onHideNav = {() => this.toggleSidenav(false)}
                 />
               {this.props.children}
                <Footer />
            </div>
        )
    }
}
