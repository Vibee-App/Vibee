// authService.ts (option combinée)
import { api } from "./api.ts";

export interface Login {
  username: string;
  password: string;
}

// Fonction de login qui met à jour le contexte via setUser
export const login = async (
  loginData: Login,
  setUser: (user: any) => void
) => {
  try {
    const response = await api.post("/api/authent/login", loginData);
    console.log("response:", response.data.token);
    if (response.data.token) {
      // Mise à jour du contexte pour stocker le token
      setUser({ token: response.data.token });
    }
    return response;
  } catch (error) {
    console.error("Erreur login:", error);
    return null;
  }
};
