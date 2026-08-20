export default function TodoItem({ todo }) {
  return (
    <tr>
      <td>{todo.id}</td>

      <td>{todo.title}</td>

      <td>
        {todo.completed ? "Completada" : "Pendiente"}
      </td>

      <td>
        <button>Editar</button>
      </td>
    </tr>
  );
}