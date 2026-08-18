import { useEffect, useState } from "react";
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
        console.error("Error al obtener las tareas: ", error);
        setError("No se pudieron obtener las tareas");
      } finally {
        setLoading(false);
      }
    };
    loadTodos();
  }, [])
  
  return (
    <div>Todos</div>
  )
}
