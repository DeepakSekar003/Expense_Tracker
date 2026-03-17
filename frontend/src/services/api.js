const API_URL = "http://35.173.15.130:8080/api/expenses";

export async function getExpenses() {
  const res = await fetch(API_URL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  });

  if (!res.ok) {
    throw new Error("Failed to fetch expenses");
  }

  return res.json();
}

export async function deleteExpense(id) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    }
  });

  if (!res.ok) {
    throw new Error("Failed to delete expense");
  }
}