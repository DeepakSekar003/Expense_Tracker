import Sidebar from "../components/Sidebar";
import BudgetComponent from "../components/Budget";

export default function Budget(){

 return(

  <div className="flex bg-gray-100 min-h-screen">

   <Sidebar/>

   <div className="flex-1 p-8">

    <h1 className="text-2xl font-bold mb-6">
     Budget
    </h1>

    <BudgetComponent/>

   </div>

  </div>

 );

}