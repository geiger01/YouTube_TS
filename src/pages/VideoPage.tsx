import React from 'react'
import { Header } from '../components/Header'

interface IVideoPageProps{
    getVideos: (topic: string)=>void;
    searchVids: (event: React.FormEvent<HTMLFormElement> ,topic: string)=>void;
}

export const VideoPage = ({getVideos,searchVids}: IVideoPageProps) => {
    return (
        <section className="video-page">
            <Header searchVids={searchVids} getVideos={getVideos}/>
        </section>
    )
}
