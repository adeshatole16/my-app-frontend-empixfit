
import API_BASE_URL from "./apiConfig";

const BASE_URL = `${API_BASE_URL}/attendance`;
export const getStudentAttendance = async (studentId, month, year) => {

    const response = await fetch(
        `${BASE_URL}/student/${studentId}?month=${month}&year=${year}`
    );

    if (!response.ok) {
        throw new Error("Failed to fetch attendance");
    }

    return response.json();
};