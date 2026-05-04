
// const API_BASE_URL =  "http://localhost:8080/api" || import.meta.env.VITE_API_BASE_URL ;

const API_BASE_URL =
  import.meta.env.MODE === "production"
    ? import.meta.env.VITE_API_BASE_URL
    : "http://localhost:8080/api";

export default API_BASE_URL;