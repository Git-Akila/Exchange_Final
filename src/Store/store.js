import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../Slicers/userSlice";

import loginSlice from '../Slicers/loginSlice';
import kycSlice from '../Slicers/kycSlice';
import graphSlice from "../Slicers/graphSlice";





const store=configureStore({
    reducer:{
        userlist:userSlice,
        login:loginSlice,

        kyclist: kycSlice,
        graph_data:graphSlice,



    }
})

export default store;