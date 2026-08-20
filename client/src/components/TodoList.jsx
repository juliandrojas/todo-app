import TodoItem from "./TodoItem";

export default function TodoList({ todos }) {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Tarea</th>
          <th>Estado</th>
          <th>Acciones</th>
        </tr>
      </thead>

      <tbody>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
          />
        ))}
      </tbody>
    </table>
  );
}