export default async function handler(req, res) {
    const { email, code } = req.body;
  
    try {
      const response = await fetch("http://localhost:5000/api/auth/verify-code", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, code }),
      });
  
      const data = await response.json();
      res.status(response.status).json(data);
    } catch (error) {
      console.error("Error en API Proxy:", error);
      res.status(500).json({ error: "Error en el servidor" });
    }
  }
  