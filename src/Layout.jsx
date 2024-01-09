import React from "react";
import NavBar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col h-screen">
      <NavBar />
      {children}
    </div>
  );
};

export default Layout;
