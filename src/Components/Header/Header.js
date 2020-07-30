import React from 'react'
import './header.css'
import {Link} from 'react-router-dom'
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SideNavigation from './SideNav/SideNav'

export default function Header(props) {
    const logo = () =>{
        return(
            <Link to = "/">
            <img alt = "logo" src = "/images/nba_logo.png" className= "logo" />
        </Link>
        )     
    }
    const navBars = () =>{
        return(
           <div className = "menu-icon-box">
               <FontAwesomeIcon icon ={faBars} className= "menu-icon"
                    onClick = {props.onOpenNav}
               />
           </div>
        )
    }
    return (
        <header className = "header__container">
            <SideNavigation {...props} />
            <div className = "header__opt">
                {navBars()}
               {logo()}
            </div>
        </header>
    )
}
