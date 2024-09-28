import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  const location = useLocation();

  
  const showNavbarPaths = ['/', '/subadmin'];
  const shouldShowNavbar = showNavbarPaths.includes(location.pathname) || 
                           location.pathname.startsWith('/userdetails/');

  return (
    <div>
      
      {shouldShowNavbar  && <Navbar />}
      {children}
    </div>
  );
};

export default Layout;