import React, { useState } from "react";
import { addScores } from "../api";

const ScoreForm = ({ refreshData }) => {
    const [name, setName] = useState("");
    const [score, setScore] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name || !score) return alert("Please fill all fields!");
        await addScores({ entries: [{ name, category: "General", score: parseFloat(score) }] });
        setName("");
        setScore("");
        refreshData();
    };

    return (
        <form onSubmit={handleSubmit} className="p-4 border rounded shadow">
            <input 
                type="text" value={name} onChange={(e) => setName(e.target.value)}
                placeholder="Enter Name" required className="m-2 p-2 border rounded"
            />
            <input 
                type="number" value={score} onChange={(e) => setScore(e.target.value)}
                placeholder="Enter Score" required className="m-2 p-2 border rounded"
            />
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                Submit
            </button>
        </form>
    );
};

export default ScoreForm;
