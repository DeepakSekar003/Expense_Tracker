import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

export default function ExpenseChart({ expenses }) {

  if (!expenses || expenses.length === 0) {
    return <p>No expenses available</p>;
  }

  const data = expenses.map((e) => ({
    name: e.category || "Expense",
    value: e.amount
  }));

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <div>
      <h2 className="text-lg font-bold mb-3">Expense Chart</h2>

      <PieChart width={350} height={300}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          outerRadius={100}
          label
        >
          {data.map((entry, index) => (
            <Cell
              key={index}
              fill={COLORS[index % COLORS.length]}
            />
          ))}
        </Pie>

        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
}