import React from 'react'
import Theme from '../../components/Theme/Theme'
import About from '../../components/About/About'
import TeamResults from '../../components/TeamResults/TeamResults'
import Live from '../../components/Live/Live'
import Poster from '../../components/Poster/Poster'

const Home = () => {
    return (
        <div className="space-y-10 px-4 md:px-8 lg:px-16">
            <Theme />
            <About />
            <TeamResults />
            <Live />
            <Poster />
        </div>
    )
}

export default Home