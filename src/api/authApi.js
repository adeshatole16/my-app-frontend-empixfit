import API_BASE_URL from "./apiConfig";

export const loginUser = async (credentials) => {

    // 1. Admin login
    try {
        const adminRes = await fetch(`${API_BASE_URL}/admin/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(credentials)
        });
        const adminData = await adminRes.json();
        if (adminRes.ok && adminData.role === "ADMIN") {
            return adminData;
        }
    } catch (e) {}

    // 2. Coach login
    try {
        const coachRes = await fetch(`${API_BASE_URL}/coaches/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(credentials)
        });
        const coachData = await coachRes.json();
        if (coachRes.ok && coachData.role === "COACH") {
            return coachData;
        }
    } catch (e) {}

    // 3. Student login
    const studentRes = await fetch(`${API_BASE_URL}/students/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials)
    });
    const studentData = await studentRes.json();
    if (!studentRes.ok) throw new Error(studentData.message || "Invalid credentials");
    return studentData;
};

export const registerPlayer = (userData) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                status: "success",
                message: "Registration successful!"
            });
        }, 1000);
    });
};