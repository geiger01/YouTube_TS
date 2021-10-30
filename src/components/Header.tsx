import React,{useState} from 'react'
import logo from '../assets/img/logo.svg'

import { IoSearchOutline } from "react-icons/io5";
import { IoMdApps } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { BsBell } from "react-icons/bs";
import { Categories } from './Categories';

interface IPropsHeader{
    searchVids: (event: React.FormEvent<HTMLFormElement> ,topic: string)=>void;
    getVideos: (topic: string)=>void
}

export const Header = ({searchVids,getVideos}: IPropsHeader) => {

    const [topic, setTopic] = useState('')

    const handleChange=(e: React.ChangeEvent<HTMLInputElement>): void=>{
        setTopic(e.target.value)
    }

    return (
        <>
        <header className="header">
            <div className="logo">
                <img src={logo} alt="youtube-logo" />
            </div>
                <form onSubmit={(event)=>{searchVids(event,topic); setTopic('') }}>
                    <div className="youtube-search">
                        <input value={topic} onChange={handleChange} type="text" placeholder="Search" />
                        <button className="search-icon">
                            <IoSearchOutline />
                        </button>
                    </div>
                </form>
            <div className="youtube-actions">
                <RiVideoAddLine />
                <IoMdApps />
                <BsBell className="bell-icon" />
                <div className="user-img"></div>
            </div>
        </header>
        <Categories getVideos={getVideos}/>
        </>
    )
}
