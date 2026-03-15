export default function SummaryCards({budget,spent}){

 const remaining = budget - spent;

 return(

 <div className="grid grid-cols-3 gap-5 mt-5">

 <div className="bg-white p-5 shadow rounded">

 <p className="text-gray-500">Salary</p>

 <h2 className="text-2xl font-bold text-green-600">
 ₹{budget}
 </h2>

 </div>

 <div className="bg-white p-5 shadow rounded">

 <p className="text-gray-500">Spent</p>

 <h2 className="text-2xl font-bold text-red-500">
 ₹{spent}
 </h2>

 </div>

 <div className="bg-white p-5 shadow rounded">

 <p className="text-gray-500">Remaining</p>

 <h2 className="text-2xl font-bold text-blue-500">
 ₹{remaining}
 </h2>

 </div>

 </div>

 );

}