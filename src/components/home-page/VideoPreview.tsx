import React from 'react'
import { IVideo } from '../../services/youtube.service'

interface IVideoPreviewProps {
    video:IVideo
}

export const VideoPreview = ({video}: IVideoPreviewProps ) => {
    return (
        <div className="video-preview" style={{backgroundImage: `url(${video.thumbnail})`}}>
        </div>
    )
}
