import React from 'react'
import { Header } from '../components/Header'
import { SideNav } from '../components/SideNav'
export const HomePage = () => {
    return (
        <div className="home-page">
            <SideNav />
            <Header />
        </div>
    )
}
