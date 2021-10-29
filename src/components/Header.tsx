import React from 'react'
import logo from '../assets/img/logo.svg'

import { IoSearchOutline } from "react-icons/io5";
import { IoMdApps } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { BsBell } from "react-icons/bs";



export const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <img src={logo} alt="youtube-logo" />
            </div>
            <div className="youtube-search">
                <input type="text" placeholder="Search" />
                <button className="search-icon">
                    <IoSearchOutline />

                </button>
            </div>
            <div className="youtube-actions">
                <RiVideoAddLine />
                <IoMdApps />
                <BsBell className="bell-icon" />
                <div className="user-img"></div>
            </div>
        </header>
    )
}
