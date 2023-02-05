import { AppContext } from "@/context/DataContext";
import { WalletContext } from "@/context/WalletContext";
import React, { useContext } from "react";

const Backdrop = () => {
  return (
    <div className="fixed top-0 left-0 z-10  h-screen w-screen bg-black/60 backdrop-blur-sm"></div>
  );
};

const WalletModal = () => {
  const { connectWallet } = useContext(WalletContext);

  return (
    <>
      <Backdrop />
      <div className="bg-white z-20 shadow-xl drop-shadow-md w-[370px] rounded-lg pt-14 pb-8 px-4 absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
        <p className="text-2xl font-bold font-Grotesk text-center">SpaceDAO</p>
        <p className="text-gray-500 font-semibold mb-5 text-center px-4 mt-5">
          SpaceDAO wants you to connect your wallet.
        </p>
        <button
          onClick={connectWallet}
          className="bg-[#2563EB] rounded-lg text-white font-semibold py-3 w-full "
        >
          Connect Wallet
        </button>
      </div>
    </>
  );
};

export default WalletModal;
