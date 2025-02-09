import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const ScoreChart = ({ scores }) => {
    return (
        <ResponsiveContainer width="100%" height={300}>
            <BarChart data={scores}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="score" fill="#8884d8" />
            </BarChart>
        </ResponsiveContainer>
    );
};

export default ScoreChart;
