import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import ExpenseChart from "../components/ExpenseChart";

export default function Dashboard() {

  const [expenses, setExpenses] = useState([]);
  const [salary, setSalary] = useState(
    localStorage.getItem("salary") || 0
  );

  const [editing, setEditing] = useState(false);

  useEffect(() => {
    fetchExpenses();
  }, []);

  const fetchExpenses = async () => {

    const res =await fetch("/api/expenses") ;

    const data = await res.json();

    setExpenses(data);
  };

  const totalSpent = expenses.reduce(
    (sum, e) => sum + e.amount,
    0
  );

  const remaining = salary - totalSpent;

  const saveSalary = () => {
    localStorage.setItem("salary", salary);
    setEditing(false);
  };

  return (

    <div className="flex bg-gray-100 min-h-screen">

      <Sidebar />

      <div className="flex-1 p-8">

        <h1 className="text-2xl font-bold mb-6">
          Dashboard
        </h1>

        {/* Cards */}

        <div className="grid grid-cols-3 gap-6">

          {/* Salary */}

          <div className="bg-white p-6 rounded shadow">

            <p className="text-gray-500">Salary</p>

            {editing ? (

              <div className="flex gap-2 mt-2">

                <input
                  type="number"
                  value={salary}
                  onChange={(e) =>
                    setSalary(Number(e.target.value))
                  }
                  className="border p-1 rounded w-24"
                />

                <button
                  onClick={saveSalary}
                  className="bg-green-500 text-white px-2 rounded"
                >
                  Save
                </button>

              </div>

            ) : (

              <div className="flex items-center gap-3">

                <h2 className="text-xl font-bold text-green-600">
                  ₹{salary}
                </h2>

                <button
                  onClick={() => setEditing(true)}
                  className="text-blue-500 text-sm"
                >
                  Edit
                </button>

              </div>

            )}

          </div>

          {/* Spent */}

          <div className="bg-white p-6 rounded shadow">

            <p className="text-gray-500">Spent</p>

            <h2 className="text-xl font-bold text-red-500">
              ₹{totalSpent}
            </h2>

          </div>

          {/* Remaining */}

          <div className="bg-white p-6 rounded shadow">

            <p className="text-gray-500">Remaining</p>

            <h2 className="text-xl font-bold text-blue-500">
              ₹{remaining}
            </h2>

          </div>

        </div>

        {/* Chart */}

        <div className="bg-white p-6 rounded shadow mt-8 w-[400px]">

          <ExpenseChart expenses={expenses} />

        </div>

      </div>

    </div>

  );

}











































































