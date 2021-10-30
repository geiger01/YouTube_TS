import React,{useEffect,useState} from 'react'
import { Header } from '../components/Header'
import { VideoList } from '../components/home-page/VideoList'
import { SideNav } from '../components/SideNav'
import { youtubeService } from '../services/youtube.service'

import {IVideo} from '../services/youtube.service'

export const HomePage = () => {


    const [videos, setVideos] = useState<IVideo[]>([])

    useEffect(() => {
        
        
        getVideos()
        
    }, [])


    const getVideos = async (topic: string="react.js")=>{

        
       const videos = await youtubeService.getYoutubeVideos(topic==='All'? 'react.js':topic)
       setVideos(videos)
    }

    const searchVids = (e: React.FormEvent<HTMLFormElement>,topic: string): void =>{
        e.preventDefault()

        getVideos(topic)        
    }

    return (
        <div className="home-page">
                <SideNav />
                <Header searchVids={searchVids} getVideos={getVideos}/>
                <VideoList videos={videos} />
        </div>
    )
}
