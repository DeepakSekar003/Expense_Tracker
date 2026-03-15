import API from "./api";

export const getExpenses = () => API.get("/expense");

export const addExpense = (data) => API.post("/expense", data);

export const deleteExpense = (id) => API.delete(`/expense/${id}`);