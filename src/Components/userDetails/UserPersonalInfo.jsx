import React, { useEffect, useState } from "react";
import { RiEditFill } from "react-icons/ri";
import axios from "axios";

import "react-toastify/dist/ReactToastify.css";

//npm install react-image-lightbox
//npm install react-awesome-lightbox

// import Lightbox from "react-image-lightbox";
// import "react-image-lightbox/style.css";
import Lightbox from "react-awesome-lightbox";
import "react-awesome-lightbox/build/style.css";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
function UserPersonalInfo({ userData, kycData }) {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const images = [kycData.front, kycData.back, kycData.selfie, kycData.pan];

  const { _id } = useParams();

  const reason = "jjjj";
  const token = localStorage.getItem("token");

  const approveKyc = async (page) => {
    console.log("approve kyc called");
    try {
      const response = await axios.get(
        `https://demoback.kairaaexchange.com/api/v1/user/approve-kyc/${_id}/${page}`,

        {
          headers: {
            Authorization: `${token}`,
            Tag: "admin",
          },
        }
      );
      toast.success("Approved Successfully");
      console.log("KYC Approved:", response.data);
    } catch (error) {
      console.error(
        "Error approving KYC:",
        error.response?.data || error.message
      );
      toast.error("KYC Failed to Approved");
    }
  };

  const KYCReject = async (page) => {
    console.log("reject");
    try {
      const res = await axios.post(
        `https://demoback.kairaaexchange.com/api/v1/user/reject-kyc/${_id}/${page}`,
        {
          reason: [reason],
        },
        {
          headers: {
            Authorization: `${token}`,
            Tag: "admin",
          },
        }
      );
      toast.error("Rejected Successfully");
      console.log("The Response of KYC Reject" + res?.data);
    } catch (err) {
      console.log("Error" + err.res?.data || err.message);
      toast.error("Can not Reject KYC");
    }
  };
  return (
    <div className="mx-auto container">
      <div className="justify-center md:grid-cols-2 grid grid-cols-1 gap-2  px-3 mt-3">
        <div className="  p-3 bg-blue-50 text-[16px]">
          <h2 className="font-semibold text-blue-700 text-xl mb-2">
            Personal Information
          </h2>
          <div className="bg-[#fff] p-6">
            <ul>
            <li className="flex justify-between items-center py-3 border-b border-gray-100">
            <div className="xs:w-1/2 w-1/2 justify-start flex">
                <span className="font-semibold text-gray-700">Name</span></div>
                <div className="xs:w-1/2 w-1/2 justify-start flex">
                <span className="text-gray-900">
                  {userData.name || "Not provided"}
                </span></div>
              </li>
              <li className="flex justify-between items-center py-3 border-b border-gray-100">
              <div className="xs:w-1/2 w-1/2 justify-start flex">
                <span className="font-semibold text-gray-700">Email</span></div>
                <div className="xs:w-1/2 w-1/2 justify-start flex">
                <span className="text-gray-900">
                  {userData.email || "Not provided"}
                </span></div>
              </li>
              <li className="flex justify-between  py-3 items-center border-b border-gray-100">
              <div className="xs:w-1/2 w-1/2 justify-start flex">
                <span className="font-semibold text-gray-700">
                  Date of Birth{" "}
                </span></div>
                <div className="xs:w-1/2 w-1/2 justify-start flex">
                <span>{userData.dob || "Not provided"} </span></div>
              </li>
              <li className="flex justify-between  py-3 items-center border-b border-gray-100">
                <div className="flex w-1/2 xs:w-1/2 items-start">
                  <span className="font-semibold text-gray-700">Age </span>
                </div>
                <div className="flex w-1/2 xs:w-1/2 items-start">
                  <span>{userData.age || "Not provided"} </span>
                </div>
              </li>
              <li className="flex justify-between  py-3 items-center border-b border-gray-100">
                <div className="xs:w-1/2 w-1/2 justify-start flex">
                  <span className="font-semibold text-gray-700">Gender </span>
                </div>
                <div className="xs:w-1/2 w-1/2 justify-start flex">
                  <span>{userData.gender || "Not provided"} </span>
                </div>
              </li>
              <li className="flex justify-between  py-3 items-center  border-b border-gray-100">
                <div className="flex justify-start xs:w-1/2 w-1/2">
                  <span className="font-semibold text-gray-700">Phone no</span>
                </div>
                <div className="flex justify-start xs:w-1/2 w-1/2">
                  <span>{userData.phone || "Not provided"} </span>
                </div>
              </li>
              <li className="flex justify-between  py-3 items-center border-b border-gray-100">
                <div className="xs:w-1/2 w-1/2 justify-start flex">
                  {" "}
                  <span className="font-semibold text-gray-700">Address </span>
                </div>
                <div className="xs:w-1/2 w-1/2 justify-start flex"> 
                  <span>{userData.address || "Not provided"} </span>
                </div>
              </li>
              <li className="flex justify-between  py-3 items-center border-b border-gray-100">
                <div className="xs:w-1/2 w-1/2 justify-start flex">
                <span className="font-semibold text-gray-700">City </span>
                </div><div className="xs:w-1/2 w-1/2 justify-start flex">
                <span>{userData.city || "Not provided"} </span>
                </div>
              </li>
              <li className="flex justify-between  py-3 items-center border-b border-gray-100">
              <div className="xs:w-1/2 w-1/2 justify-start flex">
                <span className="font-semibold text-gray-700">State </span></div> 
                <div className="xs:w-1/2 w-1/2 justify-start flex">
                <span>{userData.state || "Not provided"} </span></div>
              </li>
              <li className="flex justify-between   py-3 items-center border-b border-gray-100">
              <div className="xs:w-1/2 w-1/2 justify-start flex">
                <span className="font-semibold text-gray-700">Pincode </span></div>
                <div className="xs:w-1/2 w-1/2 justify-start flex">
                <span>{userData.pincode || "Not provided"} </span></div>
              </li>
              <li className="flex justify-between  py-3 items-center border-b border-gray-100">
              <div className="xs:w-1/2 w-1/2 justify-start flex">
                <span className="font-semibold text-gray-700">Country </span></div>
                <div className="xs:w-1/2 w-1/2 justify-start flex">

                <span>{userData.country || "Not provided"} </span></div>
              </li>

              <li className="flex justify-between  py-3 items-center border-b border-gray-100">
              <div className="xs:w-1/2 w-1/2 justify-start flex">
                <span className="font-semibold text-gray-700">Referred By</span></div>
                <div className="xs:w-1/2 w-1/2 justify-start flex">
                
                <span>{userData.referrals || "Not provided"}</span></div>
              </li>
            </ul>
          </div>
        </div>
        <div className=" p-2 bg-blue-50 text-[16px] ">
          <h2 className="justify-between flex">
            <span className="font-semibold text-xl text-blue-700 mb-2">
              KYC Information
            </span>
            <span className="flex gap-2 mb-2">
              {/* <button className="bg-blue-100 p-1 rounded">
              Verified
            </button> */}
              {/* <button className="text-red-500 p-1 gap-1 items-center flex " >
              Edit
              <RiEditFill color="red" />
            </button> */}
            </span>
          </h2>
          <div className="bg-[#fff] p-4 ">
            <p className="text-[16px] font-bold mb-2">Document Information</p>
            <ul>
              {/* <li>Proof Name&nbsp;&nbsp;&nbsp;&nbsp;{kycData.proofname}</li> */}
              <li className="flex justify-between py-3 items-center border-b border-gray-200">
              <div className="xs:w-1/2 w-1/2 justify-start flex">
                <span className="font-semibold text-gray-700">Proof Name</span></div>
                <div className="xs:w-1/2 w-1/2 justify-start flex">
                <span>{kycData.proofname || "Not provided"}</span></div>
              </li>
              <li className="flex justify-between py-3 items-center border-b border-gray-100 ">
              <div className="xs:w-1/2 w-1/2 justify-start flex">
                <span className="font-semibold text-gray-700">
                  Proof Number
                </span></div>
                <div className="xs:w-1/2 w-1/2 justify-start flex">
                <span> {kycData.proofnumber || "Not provided"} </span></div>
              </li>
              <li className="flex justify-between py-3 items-center border-b border-gray-100 ">
              <div className="xs:w-1/2 w-1/2 justify-start flex">
                <span className="font-semibold text-gray-700">Front</span></div>
                <div className="xs:w-1/2 w-1/2 justify-start flex">
                <span>
                  <img
                    className="w-[500px] h-[100px] bg-slate-50 shadow-lg rounded p-2"
                    src={kycData.front}
                    alt="Front"
                    onClick={() => {
                      setPhotoIndex(0); // Set the current image
                      setIsOpen(true); // Open lightbox
                    }}
                    loading="lazy"
                    style={{ cursor: "pointer", width: "100px" }}
                  />
                </span></div>
              </li>
              <li className="flex justify-between py-3 items-center border-b border-gray-100">
              <div className="xs:w-1/2 w-1/2 justify-start flex">
                <span className="font-semibold text-gray-700">Back</span></div>
                <div className="xs:w-1/2 w-1/2 justify-start flex">
                <span className="bg-slate-50 shadow-lg p-1">
                  <img
                    className="w-[500px] h-[100px] "
                    src={kycData.back}
                    alt="Back"
                    onClick={() => {
                      setPhotoIndex(1);
                      setIsOpen(true);
                    }}
                    loading="lazy"
                    style={{ cursor: "pointer", width: "100px" }}
                  />
                </span></div>
              </li>
              {isOpen && (
                <Lightbox
                  image={images[photoIndex]}
                  title="KYC Image"
                  onClose={() => setIsOpen(false)}
                />
              )}

              {/* {isOpen && (
  <Lightbox
    mainSrc={images[photoIndex]}
    nextSrc={images[(photoIndex + 1) % images.length]} 
    prevSrc={images[(photoIndex + images.length - 1) % images.length]} 
    onCloseRequest={() => setIsOpen(false)} 
    onMoveNextRequest={() =>
      setPhotoIndex((photoIndex + 1) % images.length)
    }
    onMovePrevRequest={() =>
      setPhotoIndex((photoIndex + images.length - 1) % images.length)
    }
  />
)} */}

              {/* <li className="flex justify-between">
              <span>Proof Status</span>
              <span>{kycData.proofstatus}</span>
            </li> */}
              <li className="flex justify-between py-3 items-center border-b border-gray-100">
              <div className="xs:w-1/2 w-1/2 justify-start flex">
                <span className="font-semibold text-gray-700">
                  Proof Status
                </span></div>
                <div className="xs:w-1/2 w-1/2 justify-start flex">
                <span className="flex gap-2">
                  <button
                    className={`p-2 rounded ${
                      kycData.proofstatus === 0
                        ? "bg-gray-200"
                        : kycData.proofstatus === 1
                        ? "bg-green-500"
                        : kycData.proofstatus === 3
                        ? "bg-red-300 text-red-600"
                        : "bg-gray-100"
                    }`}
                  >
                    {kycData.proofstatus === 0 ? (
                      "Rejected"
                    ) : kycData.proofstatus === 1 ? (
                      "Approved"
                    ) : kycData.proofstatus === 3 ? (
                      "Not Provided"
                    ) : kycData.proofstatus === 2 ? (
                      <div className="flex justify-between gap-2">
                        <button
                          className="bg-green-500 p-2 rounded "
                          onClick={() => approveKyc("proof")}
                        >
                          Approve
                        </button>
                        <button
                          className="bg-red-500 p-2 rounded"
                          onClick={() => KYCReject("proof")}
                        >
                          Reject
                        </button>
                      </div>
                    ) : (
                      "Unknown Status"
                    )}
                  </button>
                </span></div>
              </li>
              <li className="flex justify-between py-3 items-center border-b border-gray-100">
              <div className="xs:w-1/2 w-1/2 justify-start flex">
                <span className="font-semibold text-gray-700">
                  {" "}
                  Proof Verified By{" "}
                </span></div>
                <div className="xs:w-1/2 w-1/2 justify-start flex">
                <span> {kycData.proofVerifiedBy || ""} </span></div>
              </li>
              <li className="flex justify-between py-3 items-center border-b border-gray-100">
              <div className="xs:w-1/2 w-1/2 justify-start flex">
                <span  className="font-semibold text-gray-700"> Selfie </span></div>
                <div className="xs:w-1/2 w-1/2 justify-start flex">
                <span>
                  <img
                    className="w-[500px] h-[100px] bg-slate-50 shadow-lg rounded p-2 "
                    src={kycData.selfie}
                    alt="Back"
                    onClick={() => {
                      setPhotoIndex(2);
                      setIsOpen(true);
                    }}
                    loading="lazy"
                    style={{ cursor: "pointer", width: "100px" }}
                  />
                </span></div>
              </li>
              {isOpen && (
                <Lightbox
                  image={images[photoIndex]}
                  title="KYC Image"
                  onClose={() => setIsOpen(false)}
                />
              )}

              <li className="flex justify-between py-3 items-center border-b border-gray-100">
              <div className="xs:w-1/2 w-1/2 justify-start flex">
                <span className="font-semibold text-gray-700">
                  Selfie Status
                </span></div>
                <div className="xs:w-1/2 w-1/2 justify-start flex">
                <span className="flex gap-2">
                  <button
                    className={`p-2 rounded ${
                      kycData.selfiestatus === 0
                        ? "bg-gray-200"
                        : kycData.selfiestatus === 1
                        ? "bg-green-500"
                        : kycData.selfiestatus === 3
                        ? "bg-red-300 text-red-600"
                        : "bg-gray-100"
                    }`}
                  >
                    {kycData.selfiestatus === 0 ? (
                      "Rejected"
                    ) : kycData.selfiestatus === 1 ? (
                      "Approved"
                    ) : kycData.selfiestatus === 3 ? (
                      "Not Provided"
                    ) : kycData.selfiestatus === 2 ? (
                      <div className="flex justify-between gap-2">
                        <button
                          className="bg-green-500 p-2 rounded"
                          onClick={() => approveKyc("selfie")}
                        >
                          Approve
                        </button>
                        <button
                          className="bg-red-500 p-2 rounded"
                          onClick={() => KYCReject("selfie")}
                        >
                          Reject
                        </button>
                      </div>
                    ) : (
                      "Unknown Status"
                    )}
                  </button>
                </span></div>
              </li>
              <li className="flex justify-between py-3 items-center border-b border-gray-100">
              <div className="xs:w-1/2 w-1/2 justify-start flex">
                <span> Selfie VerifiedBy </span></div>
                <div className="xs:w-1/2 w-1/2 justify-start flex">
                <span> {kycData.selfieVerifiedBy || "Not provided"}</span></div>
              </li>
              <li className="flex justify-between py-3 items-center border-b border-gray-100">
              <div className="xs:w-1/2 w-1/2 justify-start flex">
                <span className="font-semibold text-gray-700">Pancard</span></div>
                <div className="xs:w-1/2 w-1/2 justify-start flex">
                <span>
                  <img
                    className="w-[500px] h-[100px] bg-slate-50 shadow-lg rounded p-2 "
                    src={kycData.pan}
                    alt="Back"
                    onClick={() => {
                      setPhotoIndex(3);
                      setIsOpen(true);
                    }}
                    loading="lazy"
                    style={{ cursor: "pointer", width: "100px" }}
                  />
                </span></div>
              </li>
              {isOpen && (
                <Lightbox
                  image={images[photoIndex]}
                  title="KYC Image"
                  onClose={() => setIsOpen(false)}
                />
              )}

              <li className="flex justify-between items-center py-3 border-b border-gray-100">
              <div className="xs:w-1/2 w-1/2 justify-start flex">
                <span className="font-semibold text-gray-700">
                  {" "}
                  Pancard status
                </span></div><div className="xs:w-1/2 w-1/2 justify-start flex"><span>
                <button
                  className={`p-2 rounded ${
                    kycData.proofstatus === 0
                      ? "bg-gray-200"
                      : kycData.proofstatus === 1
                      ? "bg-green-500"
                      : kycData.proofstatus === 3
                      ? "bg-red-300 text-red-600"
                      : "bg-gray-100"
                  }`}
                >
                  {kycData.proofstatus === 0 ? (
                    "Rejected"
                  ) : kycData.proofstatus === 1 ? (
                    "Approved"
                  ) : kycData.proofstatus === 3 ? (
                    "Not Provided"
                  ) : kycData.proofstatus === 2 ? (
                    <div className="flex justify-between gap-2">
                      <button
                        className="bg-green-500 p-2 rounded"
                        onClick={() => approveKyc("pan")}
                        // onClick={async () => {
                        //   try {
                        //     await approveKyc("pan");
                        //     console.log("Successfully approved KYC for pan");
                        //     toast.success("Successfully Approved");
                        //   } catch (error) {
                        //     console.error("Error approving KYC:", error);
                        //     toast.error("Error approving KYC");
                        //   }
                        // }}
                      >
                        Approve
                      </button>

                      <button
                        className="bg-red-500 p-2 rounded"
                        onClick={() => KYCReject("pan")}
                      >
                        Reject
                      </button>
                      
                    </div>
                  ) : (
                    "Unknown Status"
                  )}
                </button></span></div>
              </li>
              <li className="flex justify-between py-3 items-center ">
              <div className="xs:w-1/2 w-1/2 justify-start flex">
                <span className="font-semibold text-gray-700"> Date</span></div>
                <div className="xs:w-1/2 w-1/2 justify-start flex">
                <span> {kycData.Date || "Not provided"} </span></div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default UserPersonalInfo;
