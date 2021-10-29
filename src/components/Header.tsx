import React from 'react'
import logo from '../assets/img/logo.svg'

import { IoSearchOutline } from "react-icons/io5";

export const Header = () => {
    return (
        <header className="header">
            <div className="logo">
            <img src={logo} alt="youtube-logo" />
            </div>
            <div className="youtube-search">
                <input type="text" placeholder="Search"/>
                <button className="search-icon">
                <IoSearchOutline />
                    
                </button>
            </div>
            <div className="youtube-actions">
                ss
            </div>
        </header>
    )
}
