import React,{createContext,useEffect,useState} from 'react'
import { Header } from '../components/Header'
import { VideoList } from '../components/home-page/VideoList'
import { SideNav } from '../components/SideNav'
import { youtubeService } from '../services/youtube.service'

import {IVideo} from '../services/youtube.service'

export const HomePage = () => {


    const [videos, setVideos] = useState<IVideo[]>([])

    useEffect(() => {
        
        const getVideos = async ()=>{
           const videos = await youtubeService.getYoutubeVideos()
           setVideos(videos)
        }

        getVideos()

    }, [])

    youtubeService.getYoutubeVideos()
    return (
        <div className="home-page">
                <SideNav />
                <Header />
                <VideoList videos={videos} />
        </div>
    )
}
