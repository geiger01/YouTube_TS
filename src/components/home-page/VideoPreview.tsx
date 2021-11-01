import React from 'react'
import { Link } from 'react-router-dom'
import { IVideo } from '../../services/youtube.service'

interface IVideoPreviewProps {
    video:IVideo
}

export const VideoPreview = ({video}: IVideoPreviewProps ) => {
    return (
    <Link to={`watch/${video.videoId}`}>
        <div className="video-preview" style={{backgroundImage: `url(${video.thumbnail})`}}>
            <div className="video-details">
                <h3>{video.title}</h3>
                <p>{video.channelTitle}</p>
            </div>
        </div>
    </Link>
    )
}
