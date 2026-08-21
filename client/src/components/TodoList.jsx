import TodoItem from "./TodoItem";

export default function TodoList({ todos, onTodoUpdated }) {
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
            onTodoUpdated={onTodoUpdated}
          />
        ))}
      </tbody>
    </table>
  );
}