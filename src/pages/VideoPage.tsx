import React from 'react'
import { useParams } from 'react-router'
import { Header } from '../components/Header'

interface IVideoPageProps{
    getVideos: (topic: string)=>void;
    searchVids: (event: React.FormEvent<HTMLFormElement> ,topic: string)=>void;
}

type videoPageParams={
    videoId:string
}

export const VideoPage = ({getVideos,searchVids}: IVideoPageProps) => {

    const {videoId}: videoPageParams = useParams()
    
    return (
        <section className="video-page">
            <Header searchVids={searchVids} getVideos={getVideos}/>
            <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} allow="autoplay" allowFullScreen title='youtube-video' frameBorder='0' ></iframe>
        </section>
    )
}
