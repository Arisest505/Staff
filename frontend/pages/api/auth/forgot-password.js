export default async function handler(req, res) {
    try {
      const response = await fetch("http://localhost:5000/api/auth/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(req.body),
      });
  
      // ✅ Verificar si la respuesta es JSON antes de hacer `response.json()`
      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        throw new Error("Respuesta del servidor no es JSON válido");
      }
  
      const data = await response.json();
      res.status(response.status).json(data);
    } catch (error) {
      console.error("Error en API Proxy:", error);
      res.status(500).json({ error: "Error en el servidor de autenticación" });
    }
  }
  