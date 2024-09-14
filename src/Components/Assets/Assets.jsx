import React, { useState } from "react";
import FiatAsset from "./FiatAsset";
import CryptoAsset from "./CryptoAsset";

function Assets({ cryptoAssetData, FiatAssetData }) {
  
 

  

  return (
    <div className="mx-auto container text-[16px] justify-center items-center mt-4 px-4">
  <div className="bg-blue-50 rounded-lg max-w-screen-xl mx-auto p-6 shadow-md">
        <FiatAsset FiatAssetData={FiatAssetData} />
        <CryptoAsset cryptoAssetData={cryptoAssetData} />
      </div>
    </div>
  );
}

export default Assets;
