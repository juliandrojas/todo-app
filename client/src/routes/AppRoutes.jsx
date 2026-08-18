import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Todos from "../pages/Todos/Todos";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/todos" element={<Todos />} />
    </Routes>
  );
}