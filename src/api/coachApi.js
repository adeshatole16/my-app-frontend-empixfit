import API_BASE_URL from "./apiConfig";

const BASE_URL = `${API_BASE_URL}`;

export const submitCoachApplication = async (formData) => {

    const payload = {
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        sport: formData.sport || formData.specialization,
        age: parseInt(formData.age) || 0,
        experience: formData.experience,
        location: formData.location,
    };

    console.log("Payload:", payload);  // ← add

    try {
        const response = await fetch(`${BASE_URL}/coach/apply`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
        });

        console.log("Response status:", response.status);  // ← add

        if (!response.ok) {
            const errorText = await response.text();
            console.error("Backend error:", errorText);  // ← add
            throw new Error('Failed to submit application');
        }

        return {
            status: 'success',
            message: 'Your application has been submitted successfully!'
        };
    } catch (err) {
        console.error("Fetch error:", err);  // ← add
        throw err;
    }
};