const API_URL = "http://localhost:8080/api/expenses";

export async function getExpenses() {
  const res = await fetch(API_URL);
  return res.json();
}

export async function deleteExpense(id) {
  await fetch(`${API_URL}/${id}`, {
    method: "DELETE"
  });
}