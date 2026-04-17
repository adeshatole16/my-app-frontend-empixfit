import API_BASE_URL from "./apiConfig";

export const createOrder = async (amount) => {

  const response = await fetch(
    `${API_BASE_URL}/payment/create-order?amount=${amount}`,
    {
      method: "POST"
    }
  );

  return response.json();
};

export const completeRegistration = async (data) => {

  const response = await fetch(
    `${API_BASE_URL}/payment/complete-registration`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }
  );

  return response.json();
};