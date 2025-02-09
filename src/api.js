import axios from "axios";

const API_BASE_URL = "http://127.0.0.1:8000";

// ✅ Add missing `addScores` function
export const addScores = async (scoreData) => {
    console.log("Sending data:", scoreData);  // Debugging output

    try {
        const response = await axios.post("http://127.0.0.1:8000/add_scores", scoreData, {
            headers: { "Content-Type": "application/json" }
        });
        console.log("Response:", response.data);
    } catch (error) {
        console.error("Error:", error.response?.data || error.message);
    }
};

// Existing exports
export const getScores = async () => {
    return await axios.get(`${API_BASE_URL}/get_scores`);
};

export const getVisualization = () => {
    return `${API_BASE_URL}/visualize_scores`;
};

export const exportPDF = async () => {
    return await axios.get(`${API_BASE_URL}/export_pdf`, { responseType: "blob" });
};
