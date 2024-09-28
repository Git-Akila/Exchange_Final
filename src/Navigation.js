import React from "react";
import Login from "../src/Pages/Login/Login";
import Dashboard from "../src/Pages/Dashboard";
import KycUserDetails from "../src/Components/KycUserDetails";
import SubAdmin from "./Components/SubAdmin.jsx/SubAdmin";
// import ProtectedRoute from "./ProtectedRoute";
import PrivateRoute from "./ProtectedRoute";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../src/Navbar/Layout";
import FourNotFour from "../src/FourNotFour";
import Logout from "../src/Pages/Login/Logout";
function Navigation() {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path="/login" element={<Login />} />

            {/* Protected routes: Only accessible with a token */}
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
            <Route
              path="/userdetails/:_id"
              element={
                <PrivateRoute>
                  <KycUserDetails />
                </PrivateRoute>
              }
            />
            <Route
              path="/subadmin"
              element={
                <PrivateRoute>
                  <SubAdmin />
                </PrivateRoute>
              }
            />
            <Route
              path="/logout"
              element={
                <PrivateRoute>
                  <Logout />
                </PrivateRoute>
              }
            />

            <Route path="*" element={<FourNotFour />} />
            {/* <Route  path="/login" element={<Login />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/userdetails/:_id" element={<KycUserDetails />} />
            <Route path="/subadmin" element={<SubAdmin />} />
          </Route> */}
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default Navigation;
