import React from 'react'
import { IVideo } from '../../services/youtube.service'
import { VideoPreview } from './VideoPreview'

interface IVideoListProps{
    videos: IVideo[];
}

export const VideoList = ({videos}: IVideoListProps) => {

    
    return (
        <div className="video-list">
            {videos.map((video)=>   <VideoPreview key={video.videoId} video={video} />)}
        </div>
    )
}
