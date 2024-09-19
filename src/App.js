import React from 'react';
//npm i react-redux highcharts highcharts-react-official @reduxjs/toolkit
//npm install -D tailwindcss   npx tailwindcss init 
import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from '../src/Navbar/Layout'; 
import Login from '../src/Pages/Login/Login';
import Dashboard from '../src/Pages/Dashboard';
import KycUserDetails from '../src/Components/KycUserDetails';
const App = () => {
  
  const token = localStorage.getItem("token");

  return (
    <Router>
      <Layout>
        <Routes>
          <Route
            path="/login"
            element={token ? <Navigate to="/" /> : <Login token1={token}/>}
          />
          <Route
            path="/"
            element={token ? <Dashboard /> : <Navigate to="/login" />}
          />
          <Route path="/userdetails/:_id" element={<KycUserDetails />} />
          
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;