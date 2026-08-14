import express from "express";

const app = express();

app.use(express.json());

const todos = [];

app.get("/api/todos", (req, res) => {
  res.json({
    message: "Lista de tareas",
    todos: todos,
  });
});

app.post("/api/todos", (req, res) => {
  const { title, completed } = req.body;

  const todo = {
    id: todos.length + 1,
    title,
    completed: completed ?? false,
  };

  todos.push(todo);

  res.status(201).json(todo);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});