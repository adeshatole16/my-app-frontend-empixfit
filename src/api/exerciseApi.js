import API_BASE_URL from "./apiConfig";

export const getExercisePlans = async (level) => {
    const response = await fetch(`${API_BASE_URL}/exercise/coach?level=${level}`);
    if (!response.ok) throw new Error("Failed to fetch exercise plans");
    return response.json();
};