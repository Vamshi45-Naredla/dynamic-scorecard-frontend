import axios from "axios";

// Replace with your deployed backend URL
const API_BASE_URL = "https://dynamic-scorecard-backend.onrender.com";

// Function to add scores to the backend
export const addScores = async (scoreData) => {
    console.log("Sending data:", scoreData); // Debugging output

    try {
        const response = await axios.post(`${API_BASE_URL}/add_scores`, scoreData, {
            headers: { "Content-Type": "application/json" }
        });
        console.log("Response:", response.data); // Debugging output
        return response.data; // Return the response data for use in your app
    } catch (error) {
        console.error("Error:", error.response?.data || error.message); // Log errors
        throw error; // Optional: Throw the error for the calling component to handle
    }
};

// Function to get scores from the backend
export const getScores = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/get_scores`);
        return response.data; // Return the scores data
    } catch (error) {
        console.error("Error fetching scores:", error.response?.data || error.message);
        throw error;
    }
};

// Function to get visualization URL (used in frontend to display visualizations)
export const getVisualization = () => {
    return `${API_BASE_URL}/visualize_scores`;
};

// Function to export scores as a PDF
export const exportPDF = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/export_pdf`, { responseType: "blob" });
        return response.data; // Return the PDF blob data
    } catch (error) {
        console.error("Error exporting PDF:", error.response?.data || error.message);
        throw error;
    }
};
