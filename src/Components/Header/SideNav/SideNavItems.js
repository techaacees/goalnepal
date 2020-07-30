import React from 'react'
import {Link} from 'react-router-dom'
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './sideNav.css'
import FontAwesome from 'react-fontawesome';


export default function SideNavItems() {
    const items = [
        {
            type: "sideNav__options",
            icon: "faBars",
            text: 'Home',
            link: '/'
        },
        {
            type: "sideNav__options",
            icon: {faBars},
            text: 'News',
            link: '/news'
        },
        {
            type: "sideNav__options",
            icon: {faBars},
            text: 'News',
            link: '/news'
        },{
            type: "sideNav__options",
            icon: {faBars},
            text: 'News',
            link: '/news'
        },{
            type: "sideNav__options",
            icon: {faBars},
            text: 'News',
            link: '/news'
        }
    ]
    const showItems = () =>{
      return items.map((item, i) =>{
            return(
                <div className = {item.type} key = {i}>
                <Link to = {item.link}>
                    <FontAwesomeIcon icon = {item.icon} />
                        {item.text}
                    
                </Link>
            </div>
            )
        })
    }
    return (
        <div >
            {showItems()}
        </div>
    )
}
