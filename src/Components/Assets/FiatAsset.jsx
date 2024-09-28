import React, { useState, useEffect } from "react";

function FiatAsset({ FiatAssetData }) {
  const [togglelist, setToggledList] = useState({});
  const [togglelistfind,setToggledListfind]=useState(null);
  const [togglelistforwithdraw, setTogglelistforwithdraw] = useState({});
  const [togglelistforwithdrawfind, setTogglelistforwithdrawfind] = useState(null);
  const handleToggle = (id) => {
    setToggledList((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
    let data=FiatAssetData?.find((e)=>e.id===id);
    setToggledListfind(data)
  };
  const handleToggleClose = (id) => {
    setToggledList((prev) => ({
      ...prev,
      [id]: false,
     

    }));
    let data=FiatAssetData?.find((e)=>e.id===id);
    setToggledListfind(null);
   
  };
  // withdraw
  const handleToggle1 = (id) => {
    setTogglelistforwithdraw((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
    const data=FiatAssetData?.find((e)=>e.id===id);
    setTogglelistforwithdrawfind(data);
  };
  const handleToggleClose1 = (id) => {
    setTogglelistforwithdraw((prev) => ({
      ...prev,
      [id]: false,
    }));
    setTogglelistforwithdrawfind(null);
  };

  

  return (
    <>
      <h2 className="font-semibold text-xl mb-2">Fiat</h2>
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
          {FiatAssetData.length > 0 ? (
            FiatAssetData.map((data, i) => (
              <React.Fragment key={data.id || i}>
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
                        onClick={() => handleToggle(data.id)}
                      >
                        Deposit
                      </button>
                      <button
                        className={`p-1 rounded font-medium ${
                          data.withdraw ? "text-blue-500" : "text-red-500"
                        }`}
                        // disabled={!data.withdraw}
                        onClick={()=>handleToggle1(data.id)}
                      >
                        Withdraw
                      </button>
                    </div>
                  </td>
                </tr>

                {/* Show Details Below the Deposit Selected Row */}
                {togglelistfind &&
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
                              onClick={()=>handleToggleClose(data.id)}
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
                                value={data.holder || ""}
                                className="w-full border rounded p-2"
                                readOnly
                              />
                            </div>
                            <div className="mb-4">
                              <label>Account Number</label>
                              <input
                                type="text"
                                required
                                placeholder="Account Number"
                                value={data.accountNumber || ""}
                                className="w-full border rounded p-2"
                                readOnly
                              />
                            </div>
                            <div className="mb-4">
                              <label>IFSC Code</label>
                              <input
                                type="text"
                                required
                                placeholder="IFSC Code"
                                value={data.ifscCode || ""}
                                className="w-full border rounded p-2"
                                readOnly
                              />
                            </div>
                            <div className="mb-4">
                              <label>Account Type</label>
                              <input
                                type="text"
                                required
                                placeholder="Account Type"
                                value={data.accountType || ""}
                                className="w-full border rounded p-2"
                                readOnly
                              />
                            </div>
                            <div className="mb-4">
                              <label>UPI ID</label>
                              <input
                                required
                                value={data.upiId || ""}
                                className="p-2 w-full border rounded"
                                placeholder="UPI ID"
                                readOnly
                              />
                            </div>
                          </form>
                        </div>
                      </td>
                    </tr>
                  ) : (
                    <p> No Data Available...</p>
                  ))}

                {togglelistforwithdrawfind &&
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
                              onClick={() => handleToggleClose1(data.id)}
                            >
                              X
                            </button>
                          </div>
                          <form>
                            <div className="mb-4">
                              <label>Withdraw Amount</label>
                              <input
                                type="text"
                                required
                                placeholder="Withdraw Amount"
                                value={data.holder || ""}
                                className="w-full border rounded p-2"
                                readOnly
                              />
                            </div>
                            <div className="mb-4">
                              <label>Withdraw Method</label>
                              <select
                                required
                                // value={data.accountMethod || ""} // assuming accountMethod is part of your state
                                // onChange={(e) => setData({ ...data, accountMethod: e.target.value })} // update state with the selected value
                                className="w-full border rounded p-2"
                              >
                                <option value="" disabled>
                                  Select Method
                                </option>{" "}
                                {/* Placeholder option */}
                                <option value="IMPS">IMPS</option>
                                <option value="NEFT">NEFT</option>
                              </select>
                            </div>

                            <div className="mb-4">
                              <label>Transaction Fee</label>
                              <input
                                type="text"
                                required
                                placeholder="Transaction Fee"
                                value={data.ifscCode || ""}
                                className="w-full border rounded p-2"
                                readOnly
                              />
                            </div>
                            <div className="mb-4">
                              <label>Notes</label>
                              <input
                                type="text"
                                required
                                placeholder="notes"
                                value={data.accountType || ""}
                                className="w-full border rounded p-2"
                                readOnly
                              />
                            </div>
                            <div className="justify-center items-center">
                              <button className="bg-blue-700 font-bold p-2 rounded">
                                Confirm Withdrawal
                              </button>
                            </div>
                          </form>
                        </div>
                      </td>
                    </tr>
                  ) : (
                    <p> No Data Available...</p>
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
