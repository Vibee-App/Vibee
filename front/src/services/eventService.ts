import { api } from "./api.ts";

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

// Fonction pour récupérer tous les événements
export const fetchEvents = async () => {
    try {
        console.error("Appel lancé:");
      const response = await fetch("http://localhost:4000/api/event"); 
      if (!response.ok) {
        throw new Error(`Erreur serveur: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error("Erreur fetchEvents:", error);
      return [];
    }
  };
  
