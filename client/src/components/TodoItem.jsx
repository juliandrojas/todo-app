import { useState } from "react";
import { updateTodo } from "../services/todoService";

export default function TodoItem({ todo, onTodoUpdated }) {
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(todo.title);
  const [completed, setCompleted] = useState(todo.completed);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleEdit = () => {
    setEditing(true);
  };

  const handleCancel = () => {
    setTitle(todo.title);
    setCompleted(todo.completed);
    setError(null);
    setEditing(false);
  };

  const handleSave = async () => {
    if (!title.trim()) {
      setError("El título es obligatorio");
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const updatedTodo = await updateTodo(todo.id, {
        title: title.trim(),
        completed,
      });

      onTodoUpdated(updatedTodo);
      setEditing(false);
    } catch (error) {
      console.error("Error al actualizar la tarea:", error);
      setError("No se pudo actualizar la tarea");
    } finally {
      setLoading(false);
    }
  };

  return (
    <tr>
      <td>{todo.id}</td>

      <td>
        {editing ? (
          <input
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            disabled={loading}
          />
        ) : (
          todo.title
        )}
      </td>

      <td>
        {editing ? (
          <select
            value={completed}
            onChange={(event) => setCompleted(event.target.value === "true")}
            disabled={loading}
          >
            <option value="false">Pendiente</option>
            <option value="true">Completada</option>
          </select>
        ) : todo.completed ? (
          "Completada"
        ) : (
          "Pendiente"
        )}
      </td>

      <td>
        {editing ? (
          <>
            <button onClick={handleSave} disabled={loading}>
              {loading ? "Guardando..." : "Guardar"}
            </button>

            <button onClick={handleCancel} disabled={loading}>
              Cancelar
            </button>
          </>
        ) : (
          <button onClick={handleEdit}>Editar</button>
        )}
      </td>

      {error && (
        <td>
          <p>{error}</p>
        </td>
      )}
    </tr>
  );
}
