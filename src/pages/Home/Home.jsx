import React from 'react'
import Theme from "../../components/Theme/Theme";
import About from "../../components/About/About";
import TeamResults from "../../components/TeamResults/TeamResults";
import Live from "../../components/Live/Live";
import Poster from "../../components/Poster/Poster";
import ScoreTable from '../../components/ScoreTable/ScoreTable';
import Programs from '../../components/Programs/Programs';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const Home = () => {
	return (
		<div>
			<Navbar />
			<Theme />
			<Programs />
			<About />
			<TeamResults />
			<Live />
			<Poster />
			<ScoreTable />
			<Footer />
		</div>
	)
}

export default Home