import { createContext, useEffect, useState } from "react";

export const WalletContext = createContext();

export const WalletProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState("");

  const checkIfWalletIsConnected = async () => {
    try {
      if (!ethereum) return alert("Please install Metamask!!😕");

      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length) {
        setCurrentAccount(accounts[0]);
        getAllTransactions();
      } else {
        console.log("No accounts found!!");
      }
    } catch (error) {
      console.error(error);
      throw new Error("No ethereum object!");
    }
  };

  const connectWallet = async () => {
    try {
      if (!ethereum) return alert("Please install Metamask!! 😕");

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.error(error);
      throw new Error("No ethereum object!");
    }
  };

  return (
    <WalletContext.Provider
      value={{
        connectWallet,
        checkIfWalletIsConnected,
        currentAccount,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
};
