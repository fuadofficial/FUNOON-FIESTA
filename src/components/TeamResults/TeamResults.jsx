import React, { useState } from 'react';
import { FaMedal } from 'react-icons/fa';

const TeamResults = () => {
    const [teams] = useState([
        { id: 1, name: 'Team A', score: 700 },
        { id: 2, name: 'Team B', score: 680 },
        { id: 3, name: 'Team C', score: 660 },
        { id: 4, name: 'Team D', score: 650 },
        { id: 5, name: 'Team E', score: 640 },
        { id: 6, name: 'Team F', score: 630 },
    ]);

    // Sort teams by score in descending order
    const sortedTeams = [...teams].sort((a, b) => b.score - a.score).slice(0, 6);

    // Define gradient background classes for each position
    const getPositionGradient = (index) => {
        const gradients = [
            "from-indigo-500 to-blue-500",
            "from-red-500 to-pink-500",
            "from-green-500 to-lime-500",
            "from-gray-600 to-gray-400",
            "from-black to-gray-800",
            "from-yellow-500 to-orange-500"
        ];
        return gradients[index] || "from-gray-200 to-gray-400";
    };

    // Define the medal icon style for the top 3 positions
    const getMedalIcon = (position) => {
        const colors = ["text-yellow-400", "text-gray-300", "text-orange-500"];
        const styles = `${colors[position - 1]} text-6xl -left-20 absolute top-1/2 transform -translate-y-1/2 transition-transform duration-300 hover:scale-110`;
        return <FaMedal className={styles} />;
    };

    return (
        <section className="flex flex-col items-center w-full px-8 py-10 bg-gradient-to-r min-h-screen">
            <h1 className="text-4xl font-bold mb-12 text-center animate-pulse">Top Team Rankings</h1>
            <div className="w-full max-w-3xl space-y-8 text-white">
                {sortedTeams.map((team, index) => (
                    <div
                        key={team.id}
                        className={`relative flex items-center justify-between rounded-xl shadow-lg p-4 transition-transform duration-500 
                            bg-gradient-to-br ${getPositionGradient(index)} 
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
                            <span className="text-2xl font-bold mr-6 bg-opacity-80 p-2 rounded-lg shadow-md bg-white text-black">
                                {index + 1}
                            </span>
                            <span className="text-2xl md:text-3xl font-semibold text-white">{team.name}</span>
                        </div>

                        {/* Team score, animated, moved to the right */}
                        <span className="text-2xl md:text-3xl font-bold bg-black bg-opacity-20 py-1 px-3 rounded-lg text-white">
                            {team.score} pts
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TeamResults;
