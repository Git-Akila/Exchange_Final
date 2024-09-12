import React from 'react'

function Assets() {
  return (
    <div className="mx-auto container text-[16px] ">
            <div className="justify-center">
              <h2 className=" font-semibold text-xl mb-2">Flat</h2>
              <table className="border w-full h-full  bg-slate-50">
                <thead>
                  <tr className="text-center border border-gray-300">
                    <th className="py-2">Coin</th>
                    <th className="py-2">Available</th>
                    <th className="py-2">On hold</th>
                    <th className="py-2">Total</th>
                    <th className="py-2">Operations</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="text-center">
                    <td className="py-2">..</td>
                    <td className="py-2">..</td>
                    <td className="py-2">..</td>
                    <td className="py-2">..</td>
                    <td className="py-2 flex gap-2 justify-center items-center">
                      <button className="bg-gray-200 p-1 rounded font-medium">
                        Deposit
                      </button>
                      <button className="bg-blue-100 p-1 rounded font-medium">
                        Withdraw
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
              <h2 className="font-semibold text-xl mb-2">Crypto</h2>
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
                  <tr className="text-center">
                    <td className="py-2">..</td>
                    <td className="py-2">..</td>
                    <td className="py-2">..</td>
                    <td className="py-2">--</td>
                    <td className="py-2 flex gap-2 justify-center items-center">
                      <button className="bg-gray-200 p-1 rounded font-medium">
                        Deposit
                      </button>
                      <button className="bg-blue-100 p-1 rounded font-medium">
                        Withdraw
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
  )
}

export default Assets