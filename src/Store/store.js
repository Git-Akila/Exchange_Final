import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../Slicers/userSlice";

import loginSlice from '../Slicers/loginSlice';
import kycSlice from '../Slicers/kycSlice';
import graphSlice from "../Slicers/graphSlice";
import cryptoSlice from "../Slicers/cryptoSlice";
import fiatSlice from '../Slicers/fiatSlice';

import tradehistorySlice from '../Slicers/tradehistorySlice';

const store=configureStore({
    reducer:{
        userlist:userSlice,
        login:loginSlice,

        kyclist: kycSlice,
        graph_data:graphSlice,
        cryptoData:cryptoSlice,
        fiatData:fiatSlice,
        tradehistoryData:tradehistorySlice,



    }
})

export default store;