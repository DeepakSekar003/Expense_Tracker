export default function ExpenseTable({expenses}){

 return(

 <div className="bg-white p-5 shadow rounded mt-5">

 <h2 className="text-lg font-bold mb-3">
 Recent Expenses
 </h2>

 <table className="w-full">

 <thead>

 <tr className="text-left border-b">

 <th>Description</th>
 <th>Amount</th>
 <th>Date</th>

 </tr>

 </thead>

 <tbody>

 {expenses.map(e=>(
  <tr key={e.id} className="border-b">

  <td>{e.description}</td>
  <td>₹{e.amount}</td>
  <td>{e.expenseDate}</td>

  </tr>
 ))}

 </tbody>

 </table>

 </div>

 );

}