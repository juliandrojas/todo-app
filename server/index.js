import express from "express";

const app = express();

app.use(express.json());

app.get("/api/todos", (req, res) => {
  res.json([]);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});