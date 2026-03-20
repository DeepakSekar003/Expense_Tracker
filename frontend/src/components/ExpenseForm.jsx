import { useState } from "react";
import { useEffect } from "react";

export default function ExpenseForm({ editingExpense, setEditingExpense, refreshExpenses }) {

  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {

    if (editingExpense) {

      setAmount(editingExpense.amount);
      setDescription(editingExpense.description);

      // FIX DATE FORMAT
      if (editingExpense.expenseDate) {
        const formattedDate = editingExpense.expenseDate.split("T")[0];
        setDate(formattedDate);
      }

    }

  }, [editingExpense]);

  const addExpense = async () => {

    const newExpense = {
      amount: Number(amount),
      description: description,
      expenseDate: date
    };

    try {

      let res;

      if (editingExpense) {

        res = await fetch(`/api/expenses/${editingExpense.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(newExpense)
        });

        setEditingExpense(null);

      } else {

        res =await fetch("/api/expenses", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(newExpense)
        });

      }

      const data = await res.json();

      console.log("Saved Expense:", data);

      setAmount("");
      setDescription("");
      setDate("");

      if (refreshExpenses) refreshExpenses();

    } catch (error) {
      console.error("Error:", error);
    }

  }

  return (

    <div className="bg-white p-6 rounded shadow mt-6 w-[500px]">

      <h2 className="text-lg font-bold mb-4">
        Add Expense
      </h2>

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="border p-2 w-full mb-3 rounded"
      />

      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border p-2 w-full mb-3 rounded"
      />

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="border p-2 w-full mb-3 rounded"
      />

      <button
        onClick={addExpense}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        {editingExpense ? "Update Expense" : "Add Expense"}
      </button>

    </div>

  );

}