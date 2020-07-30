import React from 'react'
import {Link} from 'react-router-dom'
import './footer.css'
export default function Footer() {
    const CURRENT_YEAR = (new Date()).getFullYear()
    return (
        <div className = "footer">
           <Link to = "/" className = "footer__logo">
                <img alt = "nba logo" src = "/images/nba_logo.png" />
           </Link>
           <div className = " footer__copyright">
               @NBA {CURRENT_YEAR} all rights reserved
           </div>
        </div>
    )
}
