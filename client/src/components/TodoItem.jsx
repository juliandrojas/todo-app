
export default function TodoItem({ todo }) {
  return (
    <li>
      <span>
        {todo.title}
      </span>
      <br />
      <span>
        {todo.completed ? "Completada" : "Pendiente"}
      </span>
    </li>
  );
}