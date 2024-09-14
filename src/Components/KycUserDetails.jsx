import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { kycUserDetails } from "../Data/fetchUserData";
import { cryptoAsset } from "../Data/fetchUserData";
import {FiatAsset} from '../Data/fetchUserData';
import { FaCloudArrowDown } from "react-icons/fa6";
import {TradehistoryAsset} from '../Data/fetchUserData';
import "react-datepicker/dist/react-datepicker.css";
import UserPersonalInfo from "./userDetails/UserPersonalInfo";

import P2PWallet from "./userDetails/P2PWallet";
import SwapHistory from "./userDetails/SwapHistory";
import WalletHistory from "./userDetails/WalletHistory";
import Assets from "../Components/Assets/Assets";
import UserOrderHistory from "./userDetails/UserOrderHistory";
import UserSecurity from "./userDetails/UserSecurity";
import OpenOrder from "./userDetails/OpenOrder";
import UserActivity from "./userDetails/UserActivity/UserActivity";
//import SecurityHistory from "./userDetails/UserActivity/SecurityHistory";
import { useParams } from "react-router-dom";
const TabButton = ({ label, isActive, onClick }) => (
  <button
  className={`px-1 py-2 text-sm mr-1 cursor-pointer ${
    isActive ? "border-b-2 border-blue-500 bg-blue-50 rounded-xl" : ""
  }`}
  onClick={onClick}
>
  {label}
</button>
);

const TabPanel = ({ children, isActive }) => (
  <div style={{ display: isActive ? "block" : "none", padding: "10px" }}>
    {children}
  </div>
);

function KycUserDetails() {
  const dispatch = useDispatch();
  const { isLoading:isKycLoading, data:data, isError:isKycError } = useSelector((state) => state.kyclist);
  const {isLoading:isCryptoLoading,data:cryptoData,isError:isCryptoError}=useSelector((state)=>state.cryptoData);
  const {isLoading:isfiatLoading,data:fiatData,isError:isFiatError}=useSelector((state)=>state.fiatData);
  const {isLoading:istradehistoryLoading,data:tradehistoryData,isError:istradehistoryError}=useSelector((state)=>state.tradehistoryData);
  
  const {_id}=useParams();

  const [activeTab, setActiveTab] = useState(0);
  console.log(".................data" + JSON.stringify(data, 2, null));
  console.log(".......CryptoData"+JSON.stringify(cryptoData));
 useEffect(()=>{
  if(_id){
    console.log("Fetching"+_id);
    dispatch(kycUserDetails(_id));
  } 
 },[dispatch,_id]);

 useEffect(()=>{
  if(_id){
    console.log("Fetching..."+_id);
    dispatch(cryptoAsset(_id));
  }
 },[dispatch,_id]);

useEffect(()=>{
  if(_id){
    dispatch(FiatAsset(_id));
  }
},[dispatch,_id]);

useEffect(()=>{
  if(_id){
    dispatch(TradehistoryAsset(_id));
  }
},[dispatch,_id]);



  if (isKycLoading ||isCryptoLoading || isfiatLoading || istradehistoryLoading) {
    return <p>Loading...</p>;
  }

  if (isKycError || isCryptoError || isFiatError || istradehistoryError) {
    return <p>There was an error fetching the details...</p>;
  }


// userData for UserPersonalInfo
  const userData = data?.data || {};
  console.log("userDattaatta" + JSON.stringify(userData, 2, null));
  const kycData = userData.kyc || {};

//logData for UserActivity
const log=data || data?.logs || {}
const logData=log.logs;


// cryptoAssetData for Asset Tab

const cryptoAssetData=cryptoData?.data || {};
console.log("Cryptooo"+JSON.stringify(cryptoAssetData,null,2));

//FiatAssetData for Asset Tab
const FiatAssetData=fiatData?.data ||{};
console.log("FFFF"+JSON.stringify(FiatAssetData));

  return (
    <div>
   <div className="mx-auto container justify-center items-center">
  <div
    className="bg-slate-100 p-4 max-w-screen-xl mx-auto flex flex-wrap justify-center gap-4"
  >
        <TabButton
          label="Personal Info"
          isActive={activeTab === 0}
          onClick={() => setActiveTab(0)} 
        />
        <TabButton
          label="Security"
          isActive={activeTab === 1}
          onClick={() => setActiveTab(1)}
        />

        <TabButton
          label="Assets"
          isActive={activeTab === 2}
          onClick={() => setActiveTab(2)}
        />
        <TabButton
          label="P2P Wallet"
          isActive={activeTab === 3}
          onClick={() => setActiveTab(3)}
        />
        <TabButton
          label="Swap History"
          isActive={activeTab === 4}
          onClick={() => setActiveTab(4)}
        />
        <TabButton
          label="Wallet History"
          isActive={activeTab === 5}
          onClick={() => setActiveTab(5)}
        />
        <TabButton
          label="Open Orders"
          isActive={activeTab === 6}
          onClick={() => setActiveTab(6)}
        />
        <TabButton
          label="Orders History"
          isActive={activeTab === 7}
          onClick={() => setActiveTab(7)}
        />
        <TabButton
          label="User Activity"
          isActive={activeTab === 8}
          onClick={() => setActiveTab(8)}
        />
        <TabButton
          label="Referral"
          isActive={activeTab === 9}
          onClick={() => setActiveTab(9)}
        />
        <TabButton
          label="Tickets"
          isActive={activeTab === 10}
          onClick={() => setActiveTab(10)}
        />
        <TabButton
          label="Airdrop"
          isActive={activeTab == 11}
          onClick={() => setActiveTab(11)}
        />
        <TabButton
          icon={<FaCloudArrowDown />}
          label="Export History"
          isActive={activeTab == 12}
          onClick={() => setActiveTab(12)}
        />
      </div></div>

      <TabPanel isActive={activeTab === 0}>
        <Typography variant="h6">
          <UserPersonalInfo userData={userData} kycData={kycData} />
        </Typography>
      </TabPanel>
      <TabPanel isActive={activeTab === 1}>
        <Typography variant="h6">
          <UserSecurity userData={userData} kycData={kycData}/>
        </Typography>
      </TabPanel>
      <TabPanel isActive={activeTab === 2}>
        <Typography variant="h6">
          <Assets cryptoAssetData={cryptoAssetData} FiatAssetData={FiatAssetData}/>
        </Typography>
      </TabPanel>
      <TabPanel isActive={activeTab === 3}>
        <Typography variant="h6">
          <P2PWallet />
        </Typography>
      </TabPanel>
      <TabPanel isActive={activeTab === 4}>
        <Typography varient="h6">
          <SwapHistory />
        </Typography>
      </TabPanel>
      <TabPanel isActive={activeTab === 5}>
        <Typography variant="h6">
          <WalletHistory />
        </Typography>
      </TabPanel>
      <TabPanel isActive={activeTab === 6}>
        <Typography varient="h6">
          <OpenOrder/>
        </Typography>
      </TabPanel>
      <TabPanel isActive={activeTab === 7}>
        <Typography variant="h6">
          <UserOrderHistory />
        </Typography>
      </TabPanel>
      <TabPanel isActive={activeTab===8}>
        <Typography variant="h6">
          <UserActivity logData={logData}/>
          {/* <SecurityHistory logData={logData}/> */}
        </Typography>
      </TabPanel>
      </div>
  );
}

export default KycUserDetails;
