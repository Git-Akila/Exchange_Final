import React from "react";

function UserSecurity({ userData, kycData }) {
  const tfaVerified = userData.tfaVerified;
  const kycVerified = userData.kycVerified;
  const passcodeStatus = userData.passcodeStatus;
  const isActive = userData.isActive;
  const BankInfo=userData.bank_info;
  
  return (
    <div className="mx-auto container w-full">
      <div className="justify-center md:flex-row flex-col flex gap-2  px-3 mt-3">
        <div className="md:w-1/2 w-full p-5 bg-slate-50 text-[16px]">
          <h2 className="text-blue-700 font-bold text-xl">Bank Details</h2>
          {BankInfo.map((BankInfo,i)=>{<ul key={i || BankInfo.id}>
            <li className="gap-2">
              <span className="bg-slate-50 p-2 border-2 border-gray-50">
                Account Holder Name
              </span>
              <p
                type="text"
                className="p-2 border-2 border-slate-300 mt-2 mb-2 bg-slate-200 rounded w-[500px]"
              >
               {BankInfo.holder || 'N/A'}
              </p>
            </li>
            <li className="gap-2">
              <span className="bg-slate-50 p-2 border-2 border-gray-50">
                Bank Name
              </span>
              <p
                type="text"
                className="p-2 border-2 border-slate-300 mt-2 mb-2 rounded bg-slate-200 w-[500px]"
              >
                {BankInfo.bankname || 'N/A'}
              </p>
            </li>
            <li className="gap-2">
              <span className="bg-slate-50 p-2 border-2 border-gray-50">
                Branch
              </span>
              <p
                type="text"
                className="p-2 border-2 border-slate-300 rounded mt-2 mb-2 bg-slate-200 w-[500px]"
              >
              {BankInfo.branch || 'N/A'}
              </p>
            </li>
            <li className="gap-2">
              <span className="bg-slate-50 p-2 border-2 border-gray-50">
                IFSC Code
              </span>
              <p
                type="text"
                className="p-2 border-2 border-slate-300 rounded mt-2 mb-2 bg-slate-200 w-[500px]"
              >
               {BankInfo.ibancode || 'N/A'}
              </p>
            </li>
            <li className="gap-2">
              <span className="bg-slate-50 p-2 border-2 border-gray-50">
                Account Type
              </span>
              <p
                type="text"
                className="p-2 border-2 border-slate-300 rounded mt-2 mb-2 bg-slate-200 w-[500px]"
              >
               {BankInfo.account_type || 'N/A'}
              </p>
            </li>
            <li className="gap-2">
              <span className="bg-slate-50 p-2 border-2 border-gray-50">
                UPI Id
              </span>
              <p
                type="text"
                className="p-2 border-2 rounded border-slate-300 mt-2 mb-2 bg-slate-200 w-[500px]"
              >
               {BankInfo.Upi_id || 'N/A'}
              </p>
            </li>
          </ul> })}
        </div>
        <div className="md:w-1/2 w-full bg-slate-50 text-[16px] p-5">
          <ul>
            <li className="gap-2 flex text-center items-center justify-between mb-2 mt-2">
              <span className="bg-slate-50  border-2 border-gray-50 text-[16px]">
                Account is Activated/ Tab to block account
              </span>
              <span className="flex justify-center items-center w-1/3">
                <label className="switch">
                  <input
                    checked={isActive}
                    type="checkbox"
                    className="toggle"
                  />
                  <span className="slider"></span>
                  <span className="card-side"></span>
                </label>
              </span>
            </li>

            <li className="gap-2 flex text-center  items-center justify-between">
              <span className="bg-slate-50 border-2 border-gray-50 text-[16px]">
                TFA
              </span>
              <span className="flex justify-center items-center w-1/3">
                <label className="switch">
                  <input
                    checked={tfaVerified}
                    type="checkbox"
                    className="toggle"
                  />
                  <span className="slider"></span>
                  <span className="card-side"></span>
                </label>
              </span>
            </li>

            {/* <li className="gap-2 flex text-center items-center mt-2 mb-2 justify-between">
                    <span className="bg-slate-50  border-2 border-gray-50 text-[16px]">
                      P2P
                    </span>
                    <span className="mr-10">
                      <label className="switch">
                        <input checked="" type="checkbox" class="toggle" />
                        <span className="slider"></span>
                        <span className="card-side"></span>
                      </label>
                    </span>
                  </li> */}

            <li className="gap-2 flex text-center items-center mt-2 mb-2 justify-between">
              <span className="bg-slate-50 border-2 border-gray-50 text-[16px]">
                KYC
              </span>
              <span className="flex justify-center items-center w-1/3">
                <label className="switch">
                  <input
                    checked={kycVerified}
                    type="checkbox"
                    className="toggle"
                  />
                  <span className="slider"></span>
                  <span className="card-side"></span>
                </label>
              </span>
            </li>

            <li className="gap-2 flex text-center items-center justify-between mt-2 mb-2">
              <span className="bg-slate-50 border-2 border-gray-50 text-[16px]">
                Funds Passcode is enabled
              </span>
              <div className="flex justify-center items-center w-1/3">
                <label className="switch">
                  <input
                    checked={passcodeStatus}
                    type="checkbox"
                    className="toggle"
                  />
                  <span className="slider"></span>
                  <span className="card-side"></span>
                </label>
              </div>
            </li>

            <li className="gap-2 flex text-center items-center justify-between">
              <span className="bg-slate-50 border-2 border-gray-50 text-[16px]">
                Bank Proof
              </span>
              <span className="flex gap-2">
                <img
                  src={'https://example.com/image.jpg'}
                  style={{ width: "200px", height: "200px" }}
                  className="p-3"
                />
              </span>
              <span>
                <button className="bg-red-500 rounded p-2">Download</button>
              </span>
            </li>

            {/* <li className="text-center">
              <h2 className="text-blue-700 text-xl font-semibold p-2 mt-2 mb-2">
                User Funds Block Section
              </h2>
              <span className="flex justify-between mt-2 mb-2">
                <p>Delete Account</p>
                <button className="bg-red-500 p-2 rounded">Delete</button>
              </span>
              <span className="flex justify-between mt-2 mb-2">
                <p>Freeze Account</p>
                <button className="bg-blue-300 p-2 rounded">Freeze</button>
              </span>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default UserSecurity;
