import React, { useEffect, useState } from "react";

function CryptoAsset({ cryptoAssetData }) {
   const [cryptoOpen, setcryptoOpen] = useState("");

  

   const [tableData, setTableData] = useState([]);
   const [activeRowId, setActiveRowId] = useState([]);
 console.log("ActiveROw"+activeRowId);
 console.log("TableData"+tableData);
   
   useEffect(() => {
     if (cryptoAssetData instanceof Promise) {
       const fetchData = async () => {
         const data = await cryptoAssetData;
         setTableData(data);
       };
       fetchData();
     } else {
       setTableData(cryptoAssetData);
     }
   }, [cryptoAssetData]);
 
   
   const handleRowClick = (id) => {
    const table=tableData.filter((e)=>e.id ===id)
    setActiveRowId(table);
   };
 
   
   const closePopup = (id) => {
    const table=tableData.filter((e)=>e.id ===id)
    setActiveRowId(table);
   };
 
  return (
    <> 
    <h2 className="font-semibold text-xl mb-4 mt-4">Crypto</h2>
      <table className="w-full border border-gray-300 bg-slate-50 rounded-lg overflow-x-auto">
        <thead className="bg-blue-100">
          <tr className="text-center border-b border-gray-300">
            <th className="py-2">Coin</th>
            <th className="py-2">Available</th>
            <th className="py-2">On hold</th>
            <th className="py-2">Total</th>
            <th className="py-2">Operations</th>
          </tr>
        </thead>
        <tbody>
          {tableData && Array.isArray(tableData) && tableData.length > 0 ? (
            tableData.map((data, i) => (
              <tr
                className="text-center"
                key={data.id || i}
               
              >
                <td className="py-2 flex items-center justify-start p-2">
                  <img
                    src={data.logo}
                    className="w-14 h-14 mr-6"
                    alt={`${data.coin} logo`}
                  />
                  {data.coin}
                </td>
                <td className="py-2">{data.amount}</td>
                <td className="py-2">{data.hold}</td>
                <td className="py-2">{data.total}</td>
                <td className="py-2 flex gap-2 justify-center items-center">
                  <button
                    className={`p-1 rounded font-medium ${
                      data.deposit ? "text-blue-600" : "text-red-500"
                    }`}
                    // disabled={!data.deposit} 
                    onClick={() => handleRowClick(data.id)} 
                  >
                    Deposit
                  </button>
                  <button
                    className={`p-1 rounded font-medium ${
                      data.withdraw ? "text-blue-500" : "text-red-500"
                    }`}
                    disabled={!data.withdraw}
                  >
                    Withdraw
                  </button>
                </td>

                {/* Conditional rendering of the popup */}
                {activeRowId.length >0? (
                  <tr>
                    <td colSpan={5}>
                      <div className="mx-auto container justify-center items-center mt-8">
                        <div className="bg-slate-50 rounded-lg p-4 shadow-lg max-w-md mx-auto">
                          <div className="flex justify-between items-center mb-4">
                            <h2 className="text-blue-700 font-bold text-xl">
                              Bank Details
                            </h2>

                            <button
                              className="text-red-500 font-bold"
                              onClick={()=>closePopup(data.id)} // Close popup on click
                            >
                              X
                            </button>
                          </div>
                          <form>
                            <div className="mb-4">
                              <label>Account Holder Name</label>
                              <input
                                type="text"
                                required
                                placeholder="Account Name"
                                className="w-full border rounded p-2"
                              />
                            </div>
                            <div className="mb-4">
                              <label>Account Number</label>
                              <input
                                type="text"
                                required
                                placeholder="Account Number"
                                className="w-full border rounded p-2"
                              />
                            </div>
                            <div className="mb-4">
                              <label>IFSC Code</label>
                              <input
                                type="text"
                                required
                                placeholder="IFSC Code"
                                className="w-full border rounded p-2"
                              />
                            </div>
                            <div className="mb-4">
                              <label>Account Type</label>
                              <input
                                type="text"
                                required
                                placeholder="Account Type"
                                className="w-full border rounded p-2"
                              />
                            </div>
                            <div className="mb-4">
                              <label>UPI ID</label>
                              <input
                                required
                                className="p-2 w-full border rounded"
                                placeholder="UPI ID"
                              />
                            </div>
                          </form>
                        </div>
                      </div>
                    </td>
                  </tr>
                ):(<></>)}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5} className="text-center py-4">
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
   
     

  </>
  );
}

export default CryptoAsset;
