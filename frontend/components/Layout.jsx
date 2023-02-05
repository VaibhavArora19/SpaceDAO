import { WalletContext } from "@/context/WalletContext";
import React, { useContext } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {

  return (
    <div>
      <div className="flex">
        
        <Sidebar />
        <div className="w-full">
          <Header />
          <main>{children}</main>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Layout;
