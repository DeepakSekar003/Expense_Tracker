import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";

export default function Expenses() {

  const [editingExpense, setEditingExpense] = useState(null);
  const [expenses, setExpenses] = useState([]);

  // ✅ FETCH DATA
  const fetchExpenses = async () => {
    const res = await fetch("http://localhost:8080/api/expenses");
    const data = await res.json();
    setExpenses(data);
  };

  // ✅ LOAD ON PAGE
  useEffect(() => {
    fetchExpenses();
  }, []);

  return (

    <div className="flex bg-gray-100 min-h-screen">

      <Sidebar />

      <div className="flex-1 p-8">

        <h1 className="text-2xl font-bold mb-6">
          Expenses
        </h1>

        <ExpenseForm
          editingExpense={editingExpense}
          setEditingExpense={setEditingExpense}
          refreshExpenses={fetchExpenses}   // ✅ REAL FIX
        />

        <ExpenseList
          expenses={expenses}              // ✅ PASS DATA
          setEditingExpense={setEditingExpense}
          refreshExpenses={fetchExpenses} // (optional)
        />

      </div>

    </div>
  );
}