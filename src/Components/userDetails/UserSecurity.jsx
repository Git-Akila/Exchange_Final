import React, { useState } from "react";
import Lightbox from "react-awesome-lightbox";
import "react-awesome-lightbox/build/style.css";
function UserSecurity({ userData, kycData }) {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const tfaVerified = userData.tfaVerified;
  const kycVerified = userData.kycVerified;
  const passcodeStatus = userData.passcodeStatus;
  const isActive = userData.isActive;
  const userData1 = userData || { bank_info: [] };

  return (
    <div className="mx-auto container w-full">
      <div className="justify-center md:flex-row flex-col flex gap-2  px-3 mt-3">
        <div className="md:w-1/2 w-full p-5 bg-slate-50 text-[16px]">
          <h2 className="text-blue-700 font-bold text-xl">Bank Details</h2>
          {userData1?.bank_info && userData1.bank_info.length > 0 ? (
            userData1.bank_info.map((BankInfo, i) => (
              <ul key={i || BankInfo.id}>
                <li className="gap-2">
                  <span className="bg-slate-50 p-2 border-2 border-gray-50">
                    Account Holder Name
                  </span>
                  <p
                    type="text"
                    className="p-2 border-2 border-slate-300 mt-2 mb-2 bg-slate-200 rounded w-[500px]"
                  >
                    {BankInfo.holder || "Not provided"}
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
                    {BankInfo.bankname || "N/A"}
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
                    {BankInfo.branch || "N/A"}
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
                    {BankInfo.ibancode || "N/A"}
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
                    {BankInfo.account_type || "N/A"}
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
                    {BankInfo.Upi_id || "N/A"}
                  </p>
                </li>
              </ul>
            ))
          ) : (
            <div className="flex justify-center items-center h-full text-center">
              <p>No Bank Details Available</p>
            </div>
          )}
        </div>
        <div className="md:w-1/2 w-full bg-slate-50 text-[16px] p-5">
          <ul className="mb-4 mt-4 border-b border-gray-200 pb-4">
            <li className="flex items-center justify-between gap-4 mb-4">
              <span className="bg-slate-50 text-lg px-3 py-2 rounded-md">
                Account is Activated/ Tab to block account
              </span>
              <div className="flex justify-center items-center w-1/3">
                <label className="switch">
                  <input
                    checked={isActive}
                    type="checkbox"
                    className="toggle"
                  />
                  <span className="slider"></span>
                </label>
              </div>
            </li>

            <li className="flex items-center justify-between gap-4 mb-4">
              <span className="bg-slate-50 text-lg px-3 py-2 rounded-md">
                TFA
              </span>
              <div className="flex justify-center items-center w-1/3">
                <label className="switch">
                  <input
                    checked={tfaVerified}
                    type="checkbox"
                    className="toggle"
                  />
                  <span className="slider"></span>
                  <span className="card-side"></span>
                </label>
              </div>
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

            <li className="flex items-center justify-between gap-4 mb-4">
              <span className="bg-slate-50 text-lg px-3 py-2 rounded-md">
                KYC
              </span>
              <div className="flex justify-center items-center w-1/3">
                <label className="switch">
                  <input
                    checked={kycVerified}
                    type="checkbox"
                    className="toggle"
                  />
                  <span className="slider"></span>
                  <span className="card-side"></span>
                </label>
              </div>
            </li>

            <li className="flex items-center justify-between gap-4 mb-4">
              <span className="bg-slate-50 text-lg px-3 py-2 rounded-md">
                {" "}
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

            {userData1?.bank_info && userData1.bank_info ? (
              userData1.bank_info.map((BankInfo, i) => (
                <ul
                  key={i || BankInfo.id}
                  className="mb-4 mt-4 px-3 border-b border-gray-200 pb-4"
                >
                  <li className="flex  items-center justify-between gap-4">
                    <span className="bg-slate-50 text-lg py-2 rounded-md">
                      Bank Proof
                    </span>

                    <div className="flex items-center gap-4">
                      {BankInfo.verifystatus === 2 && BankInfo.proof ? (
                        <>
                          <img
                            src={BankInfo.proof}
                            className="w-32 h-28 rounded-md object-cover shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out cursor-pointer"
                            onClick={() => setIsOpen(true)}
                            alt="Bank Proof"
                            loading="lazy"
                          />

                          {isOpen && (
                            <Lightbox
                              image={BankInfo.proof}
                              title="KYC Image"
                              onClose={() => setIsOpen(false)}
                            />
                          )}
                          <button className="bg-red-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-red-600 transition-colors duration-300 ease-in-out">
                            Download
                          </button>
                        </>
                      ) : (
                        <button
                          className={`p-2 rounded ${
                            BankInfo.verifystatus === 0
                              ? "bg-gray-300 text-gray-600"
                              : BankInfo.verifystatus === 1
                              ? "bg-green-300 text-green-600"
                              : BankInfo.verifystatus === 3
                              ? "bg-red-300 text-red-600"
                              : "bg-gray-300 text-gray-600"
                          }`}
                        >
                          {BankInfo.verifystatus === 0
                            ? "Rejected"
                            : BankInfo.verifystatus === 1
                            ? "Approved"
                            : BankInfo.verifystatus === 3
                            ? "Not Provided"
                            : "Unknown Status"}
                        </button>
                      )}
                    </div>
                  </li>
                </ul>
              ))
            ) : (
              <p className="text-red-600">No bank information available.</p>
            )}

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
