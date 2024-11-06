import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ScoreTable = () => {
    const [data] = useState([
        {
            program: 'Speech',
            scores: { A: 10, B: 5, C: 3, D: 0, E: 0, F: 0 },
        },
        {
            program: 'Song',
            scores: { A: 0, B: 10, C: 5, D: 3, E: 0, F: 0 },
        },
        {
            program: 'Dance',
            scores: { A: 5, B: 3, C: 10, D: 0, E: 0, F: 0 },
        },
    ]);

    const teams = ['A', 'B', 'C', 'D', 'E', 'F'];

    // Calculate the total marks for each team
    const totalScores = teams.reduce((totals, team) => {
        totals[team] = data.reduce((sum, item) => sum + (item.scores[team] || 0), 0);
        return totals;
    }, {});

    return (
        <div className="container my-4">
            <h2 className="text-center mb-4">Programs and Scores</h2>
            <div className="table-responsive">
                <table className="table table-bordered table-hover table-striped">
                    <thead className="bg-primary text-white">
                        <tr>
                            <th>Program</th>
                            {teams.map((team) => (
                                <th key={team}>Team {team}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={index}>
                                <td>{item.program}</td>
                                {teams.map((team) => (
                                    <td key={team}>
                                        {item.scores[team] !== 0 ? item.scores[team] : ''}
                                    </td>
                                ))}
                            </tr>
                        ))}
                        {/* Total row */}
                        <tr className="font-weight-bold bg-light">
                            <td>Total</td>
                            {teams.map((team) => (
                                <td key={team}><strong>{totalScores[team]}</strong></td>
                            ))}
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ScoreTable;
