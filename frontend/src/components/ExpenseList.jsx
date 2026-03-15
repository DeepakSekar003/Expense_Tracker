import { useEffect, useState } from "react";
import { getExpenses, deleteExpense } from "../services/api";

export default function ExpenseList({ setEditingExpense }) {

  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    loadExpenses();
  }, []);

  const loadExpenses = async () => {
    const data = await getExpenses();
    setExpenses(data);
  };

  const handleDelete = async (id) => {
    await deleteExpense(id);
    loadExpenses();
  };

  return (

    <div className="mt-6 bg-white shadow rounded p-4">

      <h2 className="text-lg font-bold mb-4">
        Expense List
      </h2>

      {expenses.length === 0 ? (
        <p className="text-gray-500">No expenses found</p>
      ) : (
        expenses.map((expense) => (

          <div
            key={expense.id}
            className="flex justify-between items-center border-b py-3"
          >

            <div>

              <p className="font-semibold">
                ₹{expense.amount}
              </p>

              <p className="text-sm text-gray-500">
                {expense.description}
              </p>

            </div>

            <div className="flex gap-2">

              <button
                onClick={() => setEditingExpense(expense)}
                className="bg-yellow-500 text-white px-3 py-1 rounded"
              >
                Edit
              </button>

              <button
                onClick={() => handleDelete(expense.id)}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Delete
              </button>

            </div>

          </div>

        ))
      )}

    </div>

  );
}