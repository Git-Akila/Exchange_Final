import React,{useState} from 'react'

function FiatAsset({FiatAssetData}) {
    const [fiatOpen, setfaitOpen] = useState("");
    const handlefiatDepositOpen = () => {
        fiatOpen === "deposit" ? setfaitOpen("") : setfaitOpen("deposit");
      };
      const handlefiatWithdrawOpen = () => {
        fiatOpen === "withdraw" ? setfaitOpen("") : setfaitOpen("withdraw");
      };
  return (
   <>
    <h2 className="font-semibold text-xl mb-2">Fiat</h2>
   <table className="border w-full h-full border-gray-300 bg-slate-50">
          <thead>
            <tr className="text-center border border-gray-300 ">
              <th className="py-2">Coin</th>
              <th className="py-2">Available</th>
              <th className="py-2">On hold</th>
              <th className="py-2">Total</th>
              <th className="py-2">Operations</th>
            </tr>
          </thead>
          <tbody>
            {FiatAssetData &&
            Array.isArray(FiatAssetData) &&
            FiatAssetData.length > 0 ? (
              FiatAssetData.map((data, i) => (
                <tr className="text-center" key={data.id || i}>
                  <td className="py-2 flex items-center justify-start p-2">
                    <img
                      src={data.logo}
                      className="w-14 h-14 mr-2"
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
                      } `}
                      disabled={!data.withdraw}
                      onClick={handlefiatDepositOpen}
                    >
                      Deposit
                    </button>

                    <button
                      className={`p-1 rounded font-medium ${
                        data.withdraw ? "text-blue-500" : "text-red-500"
                      }`}
                      disabled={!data.withdraw}
                      onClick={handlefiatWithdrawOpen}
                    >
                      Withdraw
                    </button>
                  </td>
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
        {/* Deposit Modal */}

        {fiatOpen === "deposit" && FiatAssetData.some((e) => e.deposit) ? (
          <div className="mx-auto container justify-center items-center mt-6">
            <div className="bg-slate-50 rounded-lg p-4 shadow-lg max-w-md mx-auto">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-blue-700 font-bold text-xl">
                  Bank Details
                </h2>

                <button
                  className="text-red-500 font-bold"
                  onClick={handlefiatDepositOpen}
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
                    type="text"
                    required
                    placeholder="UPI ID"
                    className="w-full border rounded p-2"
                  />
                </div>
              </form>
            </div>
          </div>
        ) : null}
        {/* For Deposit False Statement */}
        {fiatOpen === "deposit" && FiatAssetData.some((e) => !e.deposit)
          ? FiatAssetData.some((e) => (
              <p key={e.id}>{e.description || "...Loading"}</p>
            ))
          : null}

        {/* Withdraw Modal */}
        {fiatOpen === "withdraw" && FiatAssetData.some((e) => e.withdraw) ? (
          <div className="mx-auto container justify-center items-center mt-8">
            <div className="bg-slate-50 rounded-lg p-4 shadow-lg max-w-md mx-auto">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-blue-700 font-bold text-xl">
                  Withdrawal Details
                </h2>

                <button
                  className="text-red-500 font-bold"
                  onClick={handlefiatWithdrawOpen}
                >
                  X
                </button>
              </div>
              <form>
                <div className="mb-4">
                  <label>Withdraw Amount</label>
                  <input
                    type="text"
                    placeholder="Withdraw Amount"
                    className="w-full border rounded p-2"
                  />
                </div>
                <div className="mb-4">
                  <label>Payment Option</label>
                  <select className="w-full border rounded p-2">
                    <option value="">Select Payment Option</option>
                    <option value="imps">IMPS</option>
                    <option value="neft">NEFT</option>
                  </select>
                </div>

                <div className="mb-4">
                  <label>Transaction Fee</label>
                  <input
                    type="text"
                    placeholder="Transaction Fee"
                    className="w-full border rounded p-2"
                  />
                </div>

                <div className="mb-4">
                  <label>Notes</label>
                  <input
                    type="text"
                    placeholder="Notes"
                    className="w-full border rounded p-2"
                  />
                </div>
                <div className="text-center">
                  <button className="bg-blue-400 rounded p-2 font-medium">
                    Confirm Withdrawal
                  </button>
                </div>
              </form>
            </div>
          </div>
        ) : null}
        {/* for  Withdraw Model false statement */}
        {fiatOpen === "withdraw" && FiatAssetData.some((e) => !e.withdraw) ? (
          <h2>Withdraw is not available for this Currency..</h2>
        ) : null}
   
   </>
  )
}

export default FiatAsset