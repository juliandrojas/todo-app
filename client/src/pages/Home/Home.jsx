import { Link } from "react-router-dom";
export default function Home() {
  return (
    <>
    <h1>Todo App</h1>
    <Link to={"/todos"}>Ver tareas</Link>
    </>
  )
}
