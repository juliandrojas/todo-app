import TodoItem from "./TodoItem";

export default function TodoList({ todos, onTodoUpdated }) {
  return (
    <div className="table-responsive">
      <table className="table table-striped table-hover align-middle">
        <thead className="table-dark">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Tarea</th>
            <th scope="col">Estado</th>
            <th scope="col">Acciones</th>
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
    </div>
  );
}