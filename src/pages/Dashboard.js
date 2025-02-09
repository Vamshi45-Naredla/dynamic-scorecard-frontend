import React, { useState, useEffect } from "react";
import { getScores, getVisualization, exportPDF } from "../api";
import ScoreForm from "../components/ScoreForm";
import ScoreTable from "../components/ScoreTable";
import ScoreChart from "../components/ScoreChart";

const Dashboard = () => {
    const [scores, setScores] = useState([]);

    const fetchScores = async () => {
        const response = await getScores();
        console.log("response",response.data.data.entries
        )
        setScores(response.data.data);
    };

    useEffect(() => {
    
    }, []);

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">Performance Scorecard</h1>

            <ScoreForm refreshData={fetchScores} />

            <div className="my-6">
                <h2 className="text-xl font-bold mb-2">Score Table</h2>
                <ScoreTable scores={scores} />
            </div>

            <div className="my-6">
                <h2 className="text-xl font-bold mb-2">Score Chart</h2>
                <ScoreChart scores={scores} />
            </div>

            <div className="my-4">
                <h2 className="text-xl font-bold mb-2">Download Reports</h2>
                <button onClick={exportPDF} className="bg-green-500 text-white px-4 py-2 rounded">
                    Export as PDF
                </button>
                <img src={getVisualization()} alt="Score Chart" className="mt-4" />
            </div>
        </div>
    );
};

export default Dashboard;
