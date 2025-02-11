export default async function handler(req, res) {
    const apiUrl = "http://localhost:5000/api/auth/me"; //  URL REAL de la API
  
    try {
      const response = await fetch(apiUrl, {
        method: req.method,
        headers: {
          "Content-Type": "application/json",
          Cookie: req.headers.cookie, // Enviar cookies del usuario
        },
        credentials: "include", //  Asegurar cookies HTTP-Only
      });
  
      const data = await response.json();
      res.status(response.status).json(data); //  Devolver la respuesta al frontend
    } catch (error) {
      console.error("Error en API Proxy:", error);
      res.status(500).json({ error: "Error en el servidor" });
    }
  }
  