import React from 'react'
import { MdHomeFilled } from "react-icons/md";
import { MdOutlineExplore } from "react-icons/md";
import { MdOutlineSubscriptions } from "react-icons/md";
import { MdOutlineVideoLibrary } from "react-icons/md";


import hamburger from '../assets/img/hamburger.svg'


export const SideNav = () => {
    return (
        <div className="side-nav">
            <button className="side-nav-hamburger">
                <img src={hamburger} alt="side-nav-hamburger menu" />
            </button>
            <button className="side-nav-link">
               <MdHomeFilled />
               <p>Home</p>
            </button>
            <button className="side-nav-link">
               <MdOutlineExplore />
               <p>Explore</p>
            </button>
            <button className="side-nav-link">
               <MdOutlineSubscriptions />
               <p>Subscriptions</p>
            </button>
            <button className="side-nav-link">
               <MdOutlineVideoLibrary />
               <p>Library</p>
            </button>
        </div>
    )
}
