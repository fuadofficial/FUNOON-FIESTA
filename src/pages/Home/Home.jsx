import React from 'react'
import Theme from "../../components/Theme/Theme";
import About from "../../components/About/About";
import TeamResults from "../../components/TeamResults/TeamResults";
import Live from "../../components/Live/Live";
import Poster from "../../components/Poster/Poster";
import ScoreTable from '../../components/ScoreTable/ScoreTable';

const Home = () => {
	return (
		<div>
			<Theme />
			<About />
			<TeamResults />
			<Live />
			<Poster />
			<ScoreTable />
		</div>
	)
}

export default Home