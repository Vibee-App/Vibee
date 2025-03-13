// authService.ts (suite)
// On modifie la fonction fetchEvents pour recevoir le token en paramètre
import { API_BASE_URL } from "./api";

// Définition du type Event
export interface Event {
  id: string;
  idCreateur: string;
  DateDebut: string;
  DateFin: string;
  Lieu: string;
  Adresse: string;
  Tags: string;
  Tarif: number;
  Description: string;
  Image: string;
  Nom: string;
  createdAt: string;
  updatedAt: string;
}

// Fonction pour récupérer tous les événements, en passant le token récupéré depuis le contexte
export const fetchEvents = async (token?: string): Promise<Event[]> => {
  try {
    console.log("Token:", token);
    const response = await fetch(`${API_BASE_URL}/api/event`, {
      headers: {
        'Content-Type': 'application/json',
        ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
      },
    });
    if (!response.ok) {
      throw new Error(`Erreur serveur: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Erreur fetchEvents:", error);
    return [];
  }
};
