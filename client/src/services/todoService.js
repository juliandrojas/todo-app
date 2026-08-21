import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const getTodos = async () => {
  const response = await axios.get(`${API_URL}/api/todos`);
  return Array.isArray(response.data?.todos) ? response.data.todos : [];
};

export const createTodo = async (todo) => {
  const response = await axios.post(`${API_URL}/api/todos`, todo);
  return response.data?.todo ?? response.data;
};

export const updateTodo = async (id, todo) => {
  const response = await axios.put(`${API_URL}/api/todos/${id}`, todo);
  return response.data.todo;
};