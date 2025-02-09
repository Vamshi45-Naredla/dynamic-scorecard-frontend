import React, { useState, useEffect } from "react";
import { getScores, getVisualization, exportPDF } from "../api";
import ScoreForm from "../components/ScoreForm";
import ScoreTable from "../components/ScoreTable";
import ScoreChart from "../components/ScoreChart";

const Dashboard = () => {
    const [scores, setScores] = useState([]);

    // Function to fetch scores from the backend
    const fetchScores = async () => {
        try {
            const response = await getScores();
            console.log("Fetched scores:", response.data);

            // Ensure the response structure matches
            if (response.data && response.data.data) {
                setScores(response.data.data); // Update the scores state
            } else {
                console.error("Unexpected response format:", response.data);
            }
        } catch (error) {
            console.error("Failed to fetch scores:", error);
        }
    };

    // Fetch scores on component mount
    useEffect(() => {
        fetchScores();
    }, []);

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">Performance Scorecard</h1>

            {/* Score Form for Adding Data */}
            <ScoreForm refreshData={fetchScores} />

            <div className="my-6">
                <h2 className="text-xl font-bold mb-2">Score Table</h2>
                {/* Display the Score Table */}
                <ScoreTable scores={scores} />
            </div>

            <div className="my-6">
                <h2 className="text-xl font-bold mb-2">Score Chart</h2>
                {/* Display the Score Chart */}
                <ScoreChart scores={scores} />
            </div>

            <div className="my-4">
                <h2 className="text-xl font-bold mb-2">Download Reports</h2>
                <button
                    onClick={exportPDF}
                    className="bg-green-500 text-white px-4 py-2 rounded"
                >
                    Export as PDF
                </button>
                {/* Display Visualization */}
                <img src={getVisualization()} alt="Score Chart" className="mt-4" />
            </div>
        </div>
    );
};

export default Dashboard;
