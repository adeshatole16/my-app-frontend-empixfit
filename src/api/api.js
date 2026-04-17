import API_BASE_URL from "./apiConfig";

// Dummy API Layer for Sports Training Platform

export const registerUser = (userData) => {
  return new Promise((resolve) => {
    console.log("Registering user:", userData);
    setTimeout(() => {
      resolve({
        status: "success",
        message:
          "Your application has been submitted successfully. Our admin team will review your application and provide login credentials.",
      });
    }, 1000);
  });
};

export const loginUser = (credentials) => {
  return new Promise((resolve, reject) => {
    console.log("Logging in with:", credentials);
    setTimeout(() => {
      if (credentials.password) {
        resolve({
          status: "success",
          user: {
            name: credentials.email.split("@")[0],
            email: credentials.email,
            role: credentials.email.includes("coach") ? "coach" : "player",
            token: "dummy-jwt-token-" + Date.now(),
          },
        });
      } else {
        reject({
          status: "error",
          message: "Invalid credentials. Please check your email and password.",
        });
      }
    }, 1000);
  });
};

export const createOrder = async (amount) => {
  const response = await fetch(
    `${API_BASE_URL}/payment/create-order?amount=${encodeURIComponent(amount)}`,
    {
      method: "POST",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to create order");
  }

  return response.json();
};