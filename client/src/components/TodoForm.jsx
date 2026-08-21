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
    <form onSubmit={handleSubmit} className="d-flex flex-column gap-2">
      <div className="d-flex gap-2">
        <input
          type="text"
          className="form-control"
          placeholder="Escribe una tarea..."
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          disabled={loading}
        />

        <button
          type="submit"
          className="btn btn-primary"
          disabled={loading}
        >
          {loading ? "Agregando..." : "Agregar"}
        </button>
      </div>

      {error && (
        <p className="text-danger mb-0">
          {error}
        </p>
      )}
    </form>
  );
}