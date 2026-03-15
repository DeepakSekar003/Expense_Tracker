export default function Budget(){

 return(

  <div className="bg-white p-6 rounded shadow mt-6 w-[400px]">

    <h2 className="text-lg font-bold mb-4">
      Monthly Budget
    </h2>

    <input
      type="number"
      placeholder="Enter Budget"
      className="border p-2 w-full mb-4 rounded"
    />

    <button className="bg-green-500 text-white px-4 py-2 rounded">
      Save Budget
    </button>

  </div>

 );

}