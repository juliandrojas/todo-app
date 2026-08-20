import { useState } from "react";
import { createTodo } from "../services/todoService.js";

export default function TodoForm({ onTodoCreated }) {
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!title.trim()) {
      setError("El título es obligatorio");
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const newTodo = await createTodo({
        title: title.trim(),
        completed: false,
      });

      onTodoCreated(newTodo);

      setTitle("");
      setError(null);
    } catch (error) {
      console.error("Error al crear la tarea:", error);
      setError("No se pudo crear la tarea");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Escribe una tarea..."
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        disabled={loading}
      />

      <button type="submit" disabled={loading}>
        {loading ? "Agregando..." : "Agregar"}
      </button>

      {error && <p>{error}</p>}
    </form>
  );
}