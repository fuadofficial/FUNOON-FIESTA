import React, { useEffect, useState } from 'react';
import { FaMedal } from 'react-icons/fa';
import axios from 'axios';

const TeamResults = () => {
    const [teams, setTeams] = useState([
        { id: 1, name: 'Team A', score: 700 },
        { id: 2, name: 'Team B', score: 680 },
        { id: 3, name: 'Team C', score: 670 },
        { id: 4, name: 'Team D', score: 650 },
        { id: 5, name: 'Team E', score: 640 },
        { id: 6, name: 'Team F', score: 630 },
    ]);

    // Function to fetch updated team data from the backend
    const fetchTeamData = async () => {
        try {
            const response = await axios.get('/api/teams');
            setTeams(response.data);
        } catch (error) {
            console.error('Error fetching team data:', error);
        }
    };

    // Sort teams based on scores in descending order and limit to top 6
    const sortedTeams = [...teams].sort((a, b) => b.score - a.score).slice(0, 6);

    // Medal icons for the top 3 teams
    const getMedalIcon = (position) => {
        switch (position) {
            case 1:
                return <FaMedal className="text-yellow-500 text-2xl mr-2" title="Gold Medal" />;
            case 2:
                return <FaMedal className="text-gray-400 text-2xl mr-2" title="Silver Medal" />;
            case 3:
                return <FaMedal className="text-yellow-700 text-2xl mr-2" title="Bronze Medal" />;
            default:
                return null;
        }
    };

    // UseEffect to fetch team data on component mount and periodically
    useEffect(() => {
        fetchTeamData();
        const interval = setInterval(fetchTeamData, 10000); // Auto-update every 10 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="flex flex-col items-center w-full px-6 py-8 bg-gray-100 min-h-screen">
            <h1 className="text-3xl md:text-4xl font-extrabold mb-8">Team Rankings</h1>
            <div className="w-full md:w-3/4 lg:w-2/3 xl:w-1/2">
                {sortedTeams.map((team, index) => (
                    <div key={team.id} className={`flex items-center justify-between p-4 mb-4 rounded-lg shadow-lg transition-transform
                        ${index === 0 ? 'bg-yellow-100' : index === 1 ? 'bg-gray-200' : index === 2 ? 'bg-yellow-200' : 'bg-white'}
                    `}>
                        <div className="flex items-center">
                            <span className="text-lg md:text-xl font-semibold mr-4">{index + 1}.</span>
                            {getMedalIcon(index + 1)}
                            <span className="text-lg md:text-xl font-semibold">{team.name}</span>
                        </div>
                        <span className="text-lg md:text-xl font-bold">{team.score} points</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TeamResults;
