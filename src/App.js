import React from "react";
//npm i react-redux highcharts highcharts-react-official @reduxjs/toolkit
//npm install -D tailwindcss   npx tailwindcss init
import "./App.css";

import Navigation from "./Navigation";
import store from "./Store/store";
import { Provider } from "react-redux";
const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;
