import axios from "axios";

// Définition de l'URL de base de l'API (à adapter selon votre backend)
export const API_BASE_URL = "https://app-f41ebc09-9839-43d0-877a-793dcc131783.cleverapps.io";

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
