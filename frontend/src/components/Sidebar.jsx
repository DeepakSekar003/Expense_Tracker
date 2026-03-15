import { Link } from "react-router-dom";

export default function Sidebar() {

 return (

  <div className="w-64 bg-gray-900 text-white p-6 min-h-screen">

    <h1 className="text-2xl font-bold mb-8">
      Expense Tracker
    </h1>

    <ul className="space-y-4">

      <li>
        <Link to="/" className="hover:text-blue-400">
          Dashboard
        </Link>
      </li>

      <li>
        <Link to="/expenses" className="hover:text-blue-400">
          Expenses
        </Link>
      </li>

      <li>
        <Link to="/budget" className="hover:text-blue-400">
          Budget
        </Link>
      </li>

    </ul>

  </div>

 );

}