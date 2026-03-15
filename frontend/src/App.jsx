import { Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Expenses from "./pages/Expenses";
import Budget from "./pages/Budget";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/expenses" element={<Expenses />} />
      <Route path="/budget" element={<Budget />} />
    </Routes>
  );

}

export default App;