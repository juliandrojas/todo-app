import api from "../config/api";
export const getTodos = async () => {
    const response = await api.get("/todos");
    return response.data;
}
export const createTodo = async () => {
    const response = await api.post("/todos", todo);
    return response.data;
}
export const updateTodo = async (id, todo) => {
    const response = await api.put(`/todos/${id}`, todo);
    return response.data;
}
export const deleteTodo = async (id, todo) => {
    const response = await api.delete(`/todos/${id}`, todo);
    return response.data;
}