import React, { useEffect, useState } from "react";
import { RiEditFill } from "react-icons/ri";
import axios from "axios";

//npm install react-image-lightbox
//npm install react-awesome-lightbox

// import Lightbox from "react-image-lightbox";
// import "react-image-lightbox/style.css";
import Lightbox from "react-awesome-lightbox";
import "react-awesome-lightbox/build/style.css";
import { useParams } from "react-router-dom";
function UserPersonalInfo({ userData, kycData }) {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const images = [kycData.front, kycData.back];

  const { _id} = useParams(); 

  const token=localStorage.getItem("token");
  const approveKyc = async (page) => {
    try {
      const response = await axios.post(
        `https://demoback.kairaaexchange.com/api/v1/user/approve-kyc/${_id}/${page}`,
        {},
        {
          headers: {
            Authorization: `${token}`,
            "Content-Type": "application/json",
            Tag: "Admin",
          },
        }
      );
      console.log("KYC Approved:", response.data);
    } catch (error) {
      console.error("Error approving KYC:", error.response?.data || error.message);
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
              <li className="flex justify-between py-2">
                <span>Name </span>
                <span>{userData.username}</span>
              </li>
              <li className="flex justify-between  py-2">
                <span>Email </span>
                <span>{userData.email || ""} </span>
              </li>
              <li className="flex justify-between  py-2">
                <span>Date of Birth </span>
                <span>{userData.dob || ""} </span>
              </li>
              <li className="flex justify-between  py-2">
                <span>Age </span>
                <span>{userData.age || ""} </span>
              </li>
              <li className="flex justify-between  py-2">
                <span>Gender </span>
                <span>{userData.gender || ""} </span>
              </li>
              <li className="flex justify-between  py-2">
                <span>Phone no</span>
                <span>{userData.phone || ""} </span>
              </li>
              <li className="flex justify-between  py-2">
                <span>Address </span>
                <span>{userData.address || ""} </span>
              </li>
              <li className="flex justify-between  py-2">
                <span>City </span>
                <span>{userData.city || ""} </span>
              </li>
              <li className="flex justify-between  py-2">
                <span>State </span>
                <span>{userData.state || ""} </span>
              </li>
              <li className="flex justify-between  py-2">
                <span>Pincode </span>
                <span>{userData.pincode || ""} </span>
              </li>
              <li className="flex justify-between  py-2">
                <span>Country </span>
                <span>{userData.country || ""} </span>
              </li>

              <li className="flex justify-between  py-2">
                <span>Referred By</span>
                <span>{userData.referrals || ""}</span>
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
              <li className="flex justify-between py-1">
                <span>Proof Name</span>
                <span>{kycData.proofname || ""}</span>
              </li>
              <li className="flex justify-between py-1">
                <span>Proof Number</span>
                <span> {kycData.proofnumber || ""} </span>
              </li>
              <li className="flex justify-between mt-2 mb-2 ">
                <span>Front</span>
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
                </span>
              </li>
              <li className="flex justify-between mb-2">
                <span>Back</span>
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
                </span>
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
              <li className="flex justify-between mb-2 py-1">
                <span>Proof Status</span>
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
                          onClick={async () => {
                            
                            try {
                              await approveKyc("pan");
                            } catch (error) {
                              console.error("Error approving KYC:", error);
                            }
                          }}
                        >
                          Approve
                        </button>
                        <button className="bg-red-500 p-2 rounded">
                          Reject
                        </button>
                      </div>
                    ) : (
                      "Unknown Status"
                    )}
                  </button>
                </span>
              </li>
              <li className="flex justify-between mb-2 py-1">
                <span> Proof Verified By </span>
                <span> {kycData.proofVerifiedBy || ""} </span>
              </li>
              <li className="flex justify-between mb-2">
                <span> Selfie </span>
                <span>
                  <img
                    className="w-[500px] h-[100px] bg-slate-50 shadow-lg rounded p-2 "
                    src={kycData.selfie}
                    alt="Back"
                    onClick={() => {
                      setPhotoIndex(1); 
                      setIsOpen(true); 
                    }}
                    loading="lazy"
                    style={{ cursor: "pointer", width: "100px" }}
                  />
                </span>
              </li>
              {isOpen && (
                <Lightbox
                  image={images[photoIndex]}
                  title="KYC Image"
                  onClose={() => setIsOpen(false)}
                />
              )}

              <li className="flex justify-between mb-2 py-1">
                <span>Selfi Status</span>
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
                        <button className="bg-green-500 p-2 rounded">
                          Approve
                        </button>
                        <button className="bg-red-500 p-2 rounded">
                          Reject
                        </button>
                      </div>
                    ) : (
                      "Unknown Status"
                    )}
                  </button>
                </span>
              </li>
              <li className="flex justify-between mb-2">
                <span> Selfie VerifiedBy </span>
                <span> {kycData.selfieVerifiedBy || ""}</span>
              </li>
              <li className="flex justify-between mb-2">
                <span>Pancard</span>

                <span>
                  <img
                    className="w-[500px] h-[100px] bg-slate-50 shadow-lg rounded p-2 "
                    src={kycData.pan}
                    alt="Back"
                    onClick={() => {
                      setPhotoIndex(1); 
                      setIsOpen(true); 
                    }}
                    loading="lazy"
                    style={{ cursor: "pointer", width: "100px" }}
                  />
                </span>
              </li>
              {isOpen && (
                <Lightbox
                  image={images[photoIndex]}
                  title="KYC Image"
                  onClose={() => setIsOpen(false)}
                />
              )}

            
              <li className="flex justify-between items-center mb-2">
                <span> Pancard status</span>
                <button
                  className={`p-2 rounded ${
                    kycData.proofstatus === 0
                      ? "bg-gray-200"
                      : kycData.proofstatus === 1
                      ? "bg-green-500"
                      : kycData.proofstatus === 3
                      ? "bg-red-300 text-red-600"
                      : "bg-gray-100"
                  }`}   onClick={async () => {
                            
                    try {
                      await approveKyc("pan");
                      console.log("successfull"+approveKyc("pan"));
                    } catch (error) {
                      console.error("Error approving KYC:", error);
                    }
                  }}
                >
                  {kycData.proofstatus === 0 ? (
                    "Rejected"
                  ) : kycData.proofstatus === 1 ? (
                    "Approved"
                  ) : kycData.proofstatus === 3 ? (
                    "Not Provided"
                  ) : kycData.proofstatus === 2 ? (
                    <div className="flex justify-between gap-2">
                      <button className="bg-green-500 p-2 rounded">
                        Approve
                      </button>
                      <button className="bg-red-500 p-2 rounded">Reject</button>
                    </div>
                  ) : (
                    "Unknown Status"
                  )}
                </button>
               
              </li>
              <li className="flex justify-between mb-2">
                <span> Date</span>
                <span> {kycData.Date || ""} </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserPersonalInfo;
