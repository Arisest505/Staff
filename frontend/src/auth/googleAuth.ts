import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";

export const useGoogleAuth = (onSuccess: (user: any) => void) => {
  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        console.log("🔹 Google Token Response:", tokenResponse);

        if (!tokenResponse || !tokenResponse.access_token) {
          console.error("❌ Error: No se recibió un token válido de Google");
          return;
        }

        const { data } = await axios.post("http://localhost:5000/api/auth/google", {
          token: tokenResponse.access_token,
        });

        if (!data || !data.token) {
          console.error("❌ Error: Respuesta del backend no contiene un token válido", data);
          return;
        }

        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));

        console.log("✅ Usuario autenticado con éxito:", data.user);
        onSuccess(data.user);
      } catch (error) {
        console.error("❌ Error en Google Login:", error);
      }
    },
    onError: (error) => console.error("❌ Google Login Failed:", error),
  });

  return login;
};
