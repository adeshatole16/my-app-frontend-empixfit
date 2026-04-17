import API_BASE_URL from "./apiConfig";

export const checkLiveSession = async (academyId) => {
  const response = await fetch(
    `${API_BASE_URL}/live/check/${academyId}`
  );

  if (!response.ok) {
    throw new Error("Failed to check live session");
  }

  return response.json();
};