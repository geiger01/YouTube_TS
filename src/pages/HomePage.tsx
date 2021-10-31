import React,{useEffect,useState} from 'react'
import { Categories } from '../components/Categories'
import { Header } from '../components/Header'
import { VideoList } from '../components/home-page/VideoList'
import { SideNav } from '../components/SideNav'

import {IVideo} from '../services/youtube.service'

interface IHomePageProps{
    searchVids: (event: React.FormEvent<HTMLFormElement> ,topic: string)=>void;
    getVideos: (topic: string)=>void;
    videos: IVideo[];
}

export const HomePage = ({videos, searchVids, getVideos}: IHomePageProps) => {

    return (
        <div className="home-page">
                <SideNav />
                <Header searchVids={searchVids} getVideos={getVideos}/>
                <Categories getVideos={getVideos}/>
                <VideoList videos={videos} />
        </div>
    )
}
