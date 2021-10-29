import React from 'react'
import { Header } from '../components/Header'
import { VideoList } from '../components/home-page/VideoList'
import { SideNav } from '../components/SideNav'

export const HomePage = () => {

    return (
        <div className="home-page">
            <SideNav />
            <Header />
            <VideoList />
            
        </div>
    )
}
