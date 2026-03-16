const API_URL = "http://35.173.15.130:8080/api/expenses";

export async function getExpenses() {
  const res = await fetch(API_URL);
  return res.json();
}

export async function deleteExpense(id) {
  await fetch(`${API_URL}/${id}`, {
    method: "DELETE"
  });
}