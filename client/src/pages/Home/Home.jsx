import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <h1 className="text-center">Todo App</h1>
    
      <div className="container d-flex justify-content-center">
        <Link to="/todos" className="btn btn-primary">
          Ver tareas
        </Link>
      </div>
    </>
  );
}