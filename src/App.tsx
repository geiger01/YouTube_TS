import React,{useState,useEffect} from 'react';
import { HomePage } from './pages/HomePage';
import { BrowserRouter as Router } from 'react-router-dom'
import { Route, Switch } from 'react-router';
import { VideoPage } from './pages/VideoPage';
import { youtubeService } from './services/youtube.service';
import {IVideo} from './services/youtube.service'

export const App=()=>{

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
    <Router>
      <Switch>
        <Route  path="/watch/:videoId" component={()=> <VideoPage getVideos={getVideos} searchVids={searchVids} />} />
        <Route exact path="/" component={()=> <HomePage videos={videos} searchVids={searchVids} getVideos={getVideos} />}  />
      </Switch>
    </Router>
  );
}

