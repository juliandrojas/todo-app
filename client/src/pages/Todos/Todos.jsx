import { useEffect, useState } from "react";
import TodoList from "../../components/TodoList";
import { getTodos } from "../../services/todoService";

export default function Todos() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadTodos = async () => {
      try {
        const data = await getTodos();
        setTodos(data);
      } catch (error) {
        console.error("Error al obtener las tareas:", error);
        setError("No se pudieron cargar las tareas");
      } finally {
        setLoading(false);
      }
    };

    loadTodos();
  }, []);

  if (loading) {
    return <p>Cargando tareas...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h1>Mis tareas</h1>

      {todos.length === 0 ? (
        <p>No hay tareas todavía.</p>
      ) : (
        <TodoList todos={todos} />
      )}
    </div>
  );
}