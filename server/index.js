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
app.get("/api/todos/:id", (req, res) =>{
    // Obtenemos el id y como es un texto, lo convertimos a número
    const id = Number(req.params.id);
    // Recorre todos y dame el elemento que coincida con el id
    const todo = todos.find((todo) => todo.id === id);
    // Si el id no existe
    if(!todo) {
        return res.status(404).json({
            message: "Tarea no encontrada",
        })
    }
    res.json({
        todo: todo,
    })
})
app.put("/api/todos/:id", (req, res) => {
  const id = Number(req.params.id);

  const todo = todos.find((todo) => todo.id === id);

  if (!todo) {
    return res.status(404).json({
      message: "Tarea no encontrada",
    });
  }

  const { title, completed } = req.body;

  todo.title = title;
  todo.completed = completed;

  res.json({ todo });
});
app.delete("/api/todos/:id", (req, res) => {
  const id = Number(req.params.id);

  const index = todos.findIndex((todo) => todo.id === id);

  if (index === -1) {
    return res.status(404).json({
      message: "Tarea no encontrada",
    });
  }

  todos.splice(index, 1);

  res.json({
    message: "Tarea eliminada correctamente",
  });
});
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});