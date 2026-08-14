import cors from "cors";
import express from 'express';

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "API TO-DO funcionando",
  })  
})
app.get("/api/todos", (req, res) => {
  res.json({
    message: "Lista de tareas",
    todos: [],
  });
});


const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor iniciado en: http://localhost${PORT}`);
})