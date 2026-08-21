import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import TodoForm from "../../components/TodoForm";
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
        setTodos(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Error al obtener las tareas:", error);
        setError("No se pudieron cargar las tareas");
      } finally {
        setLoading(false);
      }
    };

    loadTodos();
  }, []);

  const handleTodoCreated = (newTodo) => {
    setTodos((currentTodos) => [...currentTodos, newTodo]);
  };

  const handleTodoUpdated = (updatedTodo) => {
    setTodos((currentTodos) =>
      currentTodos.map((todo) =>
        todo.id === updatedTodo.id ? updatedTodo : todo
      )
    );
  };

  if (loading) {
    return (
      <div className="container mt-4">
        <p className="text-center">Cargando tareas...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mt-4">
        <p className="text-danger text-center">{error}</p>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="mb-0">Mis tareas</h1>

          <Link to="/" className="btn btn-secondary">
  Volver al inicio
</Link>
      </div>

      <div className="card shadow-sm mb-4">
        <div className="card-body">
          <h5 className="card-title mb-3">Nueva tarea</h5>

          <TodoForm onTodoCreated={handleTodoCreated} />
        </div>
      </div>

      {todos.length === 0 ? (
        <div className="alert alert-info text-center">
          No hay tareas todavía.
        </div>
      ) : (
        <TodoList
          todos={todos}
          onTodoUpdated={handleTodoUpdated}
        />
      )}
    </div>
  );
}