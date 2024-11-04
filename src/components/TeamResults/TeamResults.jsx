import React, { useState } from 'react';
import { FaMedal } from 'react-icons/fa';

const TeamResults = () => {
    const [teams] = useState([
        { id: 1, name: 'Team A', score: 10 },
        { id: 2, name: 'Team B', score: 11 },
        { id: 3, name: 'Team C', score: 32 },
        { id: 4, name: 'Team D', score: 3 },
        { id: 5, name: 'Team E', score: 4 },
        { id: 6, name: 'Team F', score: 25 },
    ]);

    // Sort teams by score in descending order
    const sortedTeams = [...teams].sort((a, b) => b.score - a.score).slice(0, 6);

    // Define a mapping of team names to background colors
    const teamColors = {
        'Team A': 'bg-blue-600',
        'Team B': 'bg-green-600',
        'Team C': 'bg-yellow-600',
        'Team D': 'bg-red-600',
        'Team E': 'bg-purple-600',
        'Team F': 'bg-orange-600',
    };

    // Define gradient background classes for each position
    const gradients = [
        "from-yellow-400 to-orange-500", // Gold
        "from-gray-300 to-gray-400",      // Silver
        "from-orange-400 to-red-500",     // Bronze
        "from-gray-500 to-gray-400",      // Fourth place
        "from-black to-gray-700",         // Fifth place
        "from-purple-500 to-purple-400"   // Sixth place
    ];

    const getPositionStyles = (index) => {
        return { gradient: gradients[index] };
    };

    // Define the medal icon style for the top 3 positions
    const getMedalIcon = (position) => {
        const styles = `text-6xl -left-20 absolute top-1/2 transform -translate-y-1/2 transition-transform duration-300 hover:scale-110`;
        if (position === 1) return <FaMedal className={`${styles} text-yellow-500`} />; // Gold
        if (position === 2) return <FaMedal className={`${styles} text-gray-300`} />; // Silver
        if (position === 3) return <FaMedal className={`${styles} text-orange-500`} />; // Bronze
        return null;
    };

    return (
        <section className="flex flex-col items-center w-full h-screen px-4 py-6 bg-gradient-to-b from-gray-100 to-gray-300">
            <h1 className="text-4xl font-bold mb-8 text-center text-black animate-pulse">Team rankings</h1>
            <div className="w-full max-w-3xl space-y-6 text-white">
                {sortedTeams.map((team, index) => {
                    const { gradient } = getPositionStyles(index);
                    const backgroundColor = teamColors[team.name] || 'bg-gray-600'; // Default color if team not found

                    return (
                        <div
                            key={team.id}
                            className={`relative flex items-center justify-between rounded-xl shadow-xl p-3 transition-transform duration-500 
                                ${backgroundColor} 
                                transform`}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {/* Larger medal icon for top 3 teams, positioned outside the card */}
                            {index < 3 && (
                                <div className="absolute -left-20">
                                    {getMedalIcon(index + 1)}
                                </div>
                            )}

                            {/* Team position number and name */}
                            <div className="flex items-center">
                                <span className={`text-3xl font-bold mr-6 bg-opacity-90 p-2 rounded-lg shadow-md bg-white text-black`}>
                                    {index + 1}
                                </span>
                                <span className={`text-xl md:text-2xl font-semibold text-white`}>{team.name}</span>
                            </div>

                            {/* Team score, animated, moved to the right */}
                            <span className={`text-xl md:text-2xl font-bold text-white bg-opacity-20 py-1 px-3 rounded-lg`}>
                                {team.score} pts
                            </span>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default TeamResults;
