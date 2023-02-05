import Books from "@/components/Books";
import HeroCard from "@/components/Cards/HeroCard";
import Games from "@/components/Games";
import WalletModal from "@/components/WalletModal";
import { WalletContext } from "@/context/WalletContext";
import Head from "next/head";
import { useContext } from "react";
import { useAccount } from "wagmi";

export default function Home() {
  const { currentAccount } = useContext(WalletContext);

  const { address, isConnecting, isDisconnected } = useAccount();

  return (
    <>
      <Head>
        <title>SpaceDAO</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {!address && <WalletModal />}
      <main>
        <HeroCard />
        <Games />
        <Books />
      </main>
    </>
  );
}
