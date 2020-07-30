import React from 'react'
import SideNav from 'react-simple-sidenav'
import './sideNav.css'
import SideNavItems from './SideNavItems'

export default function SideNavigation(props) {
    return (
        <div >
            <SideNav
                showNav = {props.showNav}
                onHideNav = {props.onHideNav}   
                navStyle ={{
                    background: '#242424',
                    maxWidth: '22rem'
                }}  
            >
               <SideNavItems />
            </SideNav>
        </div>
    )
}
