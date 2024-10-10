import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  const location = useLocation();

  
  const showNavbarPaths = ['/'];
  const shouldShowNavbar = showNavbarPaths.includes(location.pathname) || 
                           location.pathname.startsWith('/userdetails/')||
                           location.pathname.startsWith('/subadmin/');

  return (
    <div>
      
      {shouldShowNavbar  && <Navbar />}
      {children}
    </div>
  );
};

export default Layout;