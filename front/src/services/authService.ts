import { useAuth } from "../context/AuthContext.tsx";
import { api } from "./api.ts";

// Définition du type Event
export interface Login {
    username: string;
    password: string;
}


export interface RegisterUser {
    username: string;
    password: string;
    firstname: string;
    lastname: string;
    age: number;
}

export interface RegisterCompany {
    username: string;
    password: string;
    name: string;
    adresse: string;
    siret: string;
}

const { setUser } = useAuth();
// Fonction pour récupérer tous les événements
export const login = async (login: Login) => {
    try {
        const response = await api.post("/api/authent/login", login);
        if (response.data.token) {
            localStorage.setItem("token", response.data.token);
        }
        setUser(response.data);
        return response;
    } catch (error) {
        console.error("Erreur login:", error);
        return [];
    }
}

export const register = async (register: RegisterUser) => {
    try {
        const response = await api.post("/api/authent/registerUser", register);
        return response.data;
    } catch (error) {
        console.error("Erreur register:", error);
        return [];
    }
}