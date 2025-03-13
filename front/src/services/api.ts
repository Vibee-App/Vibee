import axios from "axios";

// Définition de l'URL de base de l'API (à adapter selon votre backend)
const API_BASE_URL = "http://localhost:4000";

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
