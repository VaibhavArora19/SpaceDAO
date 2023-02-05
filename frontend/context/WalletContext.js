import { createContext, useEffect, useState } from "react";
import { useWeb3Modal } from "@web3modal/react";

export const WalletContext = createContext();

export const WalletProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState("");
  const [loading, setLoading] = useState(false);

  const { open } = useWeb3Modal();

  async function onOpen() {
    setLoading(true);
    await open();
    // await connectWallet();
    setLoading(false);
  }

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
      await onOpen();
    } catch (error) {
      console.error(error);
    }
  };

//   useEffect(() => {
//     checkIfWalletIsConnected();
//   }, []);

  return (
    <WalletContext.Provider
      value={{
        connectWallet,
        currentAccount,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
};
