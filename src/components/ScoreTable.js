import React from "react";

const ScoreTable = ({ scores }) => {
    console.log("score",scores)
    return (
        <table className="min-w-full border-collapse border border-gray-400">
            <thead>
                <tr className="bg-gray-200">
                    <th className="border border-gray-400 px-4 py-2">Name</th>
                    <th className="border border-gray-400 px-4 py-2">Score</th>
                </tr>
            </thead>
            <tbody>
                {scores.map((s, index) => (
                    <tr key={index} className="border border-gray-400">
                        <td className="border px-4 py-2">{s.name}</td>
                        <td className="border px-4 py-2">{s.score}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default ScoreTable;
