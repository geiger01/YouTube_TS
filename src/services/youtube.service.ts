import axios from "axios"
import { storageService } from "./storage.service"

const API_KEY = process.env.REACT_APP_API_KEY
const CACHED_STORAGE_KEY = 'cached'

const END_POINT  = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&order=viewCount&key=${API_KEY}`
export const youtubeService={
    getYoutubeVideos
}

export interface IVideo { 

    videoId: string;
    publishedAt: string;
    title: string;
    desc: string;
    thumbnail: string ;
    channelTitle: string ;

}

async function getYoutubeVideos(topic: string='react.js'): Promise<IVideo[] | []>{

    const cached = storageService.loadFromStorage(CACHED_STORAGE_KEY) || {}

    if(cached[topic]) return cached[topic]
    try{
        
        const res = await axios.get(`${END_POINT}&q=${topic}`)
        const videos = res.data.items
        
        const fortmattedVideos= videos.map((video: any) => {
            return {
                videoId: video.id.videoId,
                publishedAt: video.snippet.publishedAt,
                title: video.snippet.title,
                desc: video.snippet.description,
                thumbnail: video.snippet.thumbnails.high.url ,
                channelTitle: video.snippet.channelTitle ,
            }
        })        

        cached[topic] = fortmattedVideos
        storageService.saveToStorage(CACHED_STORAGE_KEY, cached)
        return fortmattedVideos

    }catch(err){
        return []
    }
    
}