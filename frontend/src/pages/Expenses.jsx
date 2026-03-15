import Sidebar from "../components/Sidebar";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";
import { useState } from "react";

export default function Expenses() {

  const [editingExpense, setEditingExpense] = useState(null);

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
          refreshExpenses={() => window.location.reload()}
        />

        <ExpenseList
          setEditingExpense={setEditingExpense}
        />

      </div>

    </div>

  );
}