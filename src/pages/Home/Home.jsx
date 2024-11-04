import React from 'react'
import Theme from '../../components/Theme/Theme'
import About from '../../components/About/About'
import TeamResults from '../../components/TeamResults/TeamResults'
import Live from '../../components/Live/Live'

const Home = () => {
    return (
        <div>
            <Theme />
            <About />
            <TeamResults />
            <Live />
        </div>
    )
}

export default Home