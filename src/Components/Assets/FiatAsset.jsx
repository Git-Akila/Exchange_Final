import React, { useState, useEffect } from "react";

function FiatAsset({ FiatAssetData }) {
  const [toggledId, setToggledId] = useState(null);
  const [operationType, setOperationType] = useState(null);

  const handleToggle = (i, type) => {
    if (toggledId === i && operationType === type) {
      console.log("fff");
      setToggledId(null);
      setOperationType(null);
    } else {
    
      setToggledId(i);
      setOperationType(type);
    }
  };

  const handleClose = () => {
    setToggledId(null);
    setOperationType(null);
  };

  return (
    <>
      <h2 className="font-semibold text-xl mb-2">Fiat</h2>
      <table className="w-full border border-gray-300 bg-slate-50 rounded-lg overflow-x-auto">
        <thead className="bg-blue-100" >
          <tr className="text-center border-b border-gray-300">
            <th className="py-2">Coin</th>
            <th className="py-2">Available</th>
            <th className="py-2">On hold</th>
            <th className="py-2">Total</th>
            <th className="py-2">Operations</th>
          </tr>
        </thead>
        <tbody>
          {FiatAssetData.length > 0 ? (
            FiatAssetData.map((data, i) => (
              <React.Fragment key={i}>
                <tr className="text-center">
                  <td className="py-2">
                    <div className="flex flex-col items-center gap-2   justify-items-center">
                    <div>
                    <img
                      src={data.logo}
                      className="w-12 h-12 "
                      alt={`${data.coin} logo`}
                    /></div><div>
                    {data.coin}</div></div> 
                    {/* <div className="gap-2 p-4  flex items-center text-center">
                      <div className="flex justify-center">
                        <img
                          src={data.logo}
                          className="w-12 h-12"
                          alt={`${data.coin} logo`}
                        />
                      </div>
                      <div className="flex justify-start">{data.coin}</div>
                    </div> */}
                  </td>
                  <td className="py-2">{data.amount}</td>
                  <td className="py-2">{data.hold}</td>
                  <td className="py-2">{data.total}</td>
                  <td className="py-2 ">
                    <div className="flex justify-center items-center gap-2">
                      <button
                        className={`p-1 rounded font-medium ${
                          data.deposit ? "text-blue-600" : "text-red-500"
                        }`}
                        onClick={() => handleToggle(i,"deposit")}
                      >
                        Deposit
                      </button>
                      <button
                        className={`p-1 rounded font-medium ${
                          data.withdraw ? "text-blue-500" : "text-red-500"
                        }`}
                        // disabled={!data.withdraw}
                        onClick={()=>handleToggle(i,"withdraw")}
                      >
                        Withdraw
                      </button>
                    </div>
                  </td>
                </tr>

                 {/* Show Details Below the Selected Row */}
                 {toggledId === i &&
                  operationType === "deposit" &&
                  (data.deposit ? (
                    <tr className="bg-gray-100 xs:mx-20 md:mx-20">
                      <td
                        colSpan={5}
                        className="xs:px-40 xs:py-10 md:px-72 md:py-10 p-6"
                      >
                        <div className="bg-slate-50 rounded-lg p-10 shadow-lg">
                          <div className="flex justify-between items-center mb-4">
                            <h2 className="text-blue-700 font-bold text-xl">
                              Bank Details
                            </h2>
                            <button
                              className="text-red-500 font-bold"
                              onClick={handleClose}
                            >
                              X
                            </button>
                          </div>
                          {  Array.isArray(data.admin_bank_info)?(
                           <form>
                           <div className="mb-4">
                              <label>Account Holder Name</label>
                              <input
                                type="text"
                                //placeholder="Enter name"
                                value={data.admin_bank_info.holder || ""}
                                className="w-full border rounded p-2"
                                readOnly
                              />
                            </div>
                            <div className="mb-4">
                              <label>Account Number</label>
                              <input
                                type="text"
                                //placeholder="Account Number"
                                value={data.admin_bank_info.acc_number || ""}
                                className="w-full border rounded p-2"
                                readOnly
                              />
                            </div>
                            <div className="mb-4">
                              <label>IFSC Code</label>
                              <input
                                type="text"
                                //placeholder="IFSC Code"
                                value={data.admin_bank_info.ifsc_code || ""}
                                className="w-full border rounded p-2"
                                readOnly
                              />
                            </div>
                            <div className="mb-4">
                              <label>Account Type</label>
                              <input
                                type="text"
                                //placeholder="Account Type"
                                value={data.admin_bank_info.account_type || ""}
                                className="w-full border rounded p-2"
                                readOnly
                              />
                            </div>
                            <div className="mb-4">
                              <label>UPI ID</label>
                              <input
                                type="text"
                                //placeholder="UPI ID"
                                value={data.upiId || ""}
                                className="p-2 w-full border rounded"
                                readOnly
                              />
                            </div>
                          </form>):(
                            <form>
                            <div className="mb-4">
                               <label>Account Holder Name</label>
                               <input
                                 type="text"
                                 //placeholder="Enter name"
                                 value={data.holder || ""}
                                 className="w-full border rounded p-2"
                                 readOnly
                               />
                             </div>
                             <div className="mb-4">
                               <label>Account Number</label>
                               <input
                                 type="text"
                                 //placeholder="Account Number"
                                 value={data.acc_number || ""}
                                 className="w-full border rounded p-2"
                                 readOnly
                               />
                             </div>
                             <div className="mb-4">
                               <label>IFSC Code</label>
                               <input
                                 type="text"
                                 //placeholder="IFSC Code"
                                 value={data.ifsc_code || ""}
                                 className="w-full border rounded p-2"
                                 readOnly
                               />
                             </div>
                             <div className="mb-4">
                               <label>Account Type</label>
                               <input
                                 type="text"
                                 //placeholder="Account Type"
                                 value={data.account_type || ""}
                                 className="w-full border rounded p-2"
                                 readOnly
                               />
                             </div>
                             <div className="mb-4">
                               <label>UPI ID</label>
                               <input
                                 type="text"
                                 //placeholder="UPI ID"
                                 value={data.upiId || ""}
                                 className="p-2 w-full border rounded"
                                 readOnly
                               />
                             </div>
                           </form>
                          )}
                        </div>
                      </td>
                    </tr>
                  ) : (
                    <tr className="bg-gray-100 ">
                      <td colSpan={5} className=" p-3">
                        <div className="bg-slate-50 rounded-lg p-10 shadow-lg">
                          <div className="flex justify-between items-center mb-4">
                            <p>...Loading</p>
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}

                {toggledId === i &&
                  operationType === "withdraw" &&
                  (data.withdraw ? (
                    <tr className="bg-gray-100 xs:mx-20 md:mx-20">
                      <td
                        colSpan={5}
                        className="xs:px-40 xs:py-10 md:px-72 md:py-10 p-6"
                      >
                        <div className="bg-slate-50 rounded-lg p-10 shadow-lg">
                          <div className="flex justify-between items-center mb-4">
                            <h2 className="text-blue-700 font-bold text-xl">
                              Withdrawal
                            </h2>
                            <button
                              className="text-red-500 font-bold"
                              onClick={handleClose}
                            >
                              X
                            </button>
                          </div>
                          <form>
                            <div className="mb-4">
                              <label>Withdraw Amount</label>
                              <input
                                type="text"
                                value={data.holder || ""}
                                className="w-full border rounded p-2"
                                readOnly
                              />
                            </div>
                            <div className="mb-4">
                              <label>Withdraw Method</label>
                              <select className="w-full border rounded p-2">
                                <option value="" disabled>
                                  Select Method
                                </option>
                                <option value="IMPS">IMPS</option>
                                <option value="NEFT">NEFT</option>
                              </select>
                            </div>
                            <div className="mb-4">
                              <label>Transaction Fee</label>
                              <input
                                type="text"
                                value={data.ifscCode || ""}
                                className="w-full border rounded p-2"
                                readOnly
                              />
                            </div>
                            <div className="mb-4">
                              <label>Notes</label>
                              <input
                                type="text"
                                value={data.accountType || ""}
                                className="w-full border rounded p-2"
                                readOnly
                              />
                            </div>
                            <div className="justify-center items-center flex">
                              <button className="bg-blue-700 text-white font-bold p-2 rounded">
                                Confirm Withdrawal
                              </button>
                            </div>
                          </form>
                        </div>
                      </td>
                    </tr>
                  ) : (
                    <tr className="bg-gray-100 ">
                      <td colSpan={5} className=" p-3">
                        <div className="bg-slate-50 rounded-lg p-10 shadow-lg">
                          <div className="flex justify-between items-center mb-4">
                            <p className="text-lg text-gray-400">No Withdrawal Available for this User</p>
                            <p>{data.description}</p>
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
              </React.Fragment>
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

export default FiatAsset;
