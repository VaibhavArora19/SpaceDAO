import Layout from "@/components/Layout";
import AppWrapper from "../context/DataContext";
import "@/styles/globals.css";
import { WalletProvider } from "@/context/WalletContext";
import { WagmiConfig, createClient, configureChains, mainnet } from "wagmi";
import {
  EthereumClient,
  modalConnectors,
  walletConnectProvider,
} from "@web3modal/ethereum";

import { Web3Modal } from "@web3modal/react";

const hyperspace = {
  id: 3141,
  name: "Filecoin - Hyperspace testnet",
  network: "Filecoin - Hyperspace testnet",
  nativeCurrency: {
    decimals: 18,
    name: "FILECOIN",
    symbol: "tFIL",
  },
  rpcUrls: {
    default: { http: ["https://api.hyperspace.node.glif.io/rpc/v1"] },
  },
  blockExplorers: {
    default: { name: "Hyperspace", url: "https://hyperspace.filfox.info/en" },
  },
};

const chains = [hyperspace];
// Wagmi client
const { provider } = configureChains(chains, [
  walletConnectProvider({ projectId: "18eaa862738a7e299d4dd9cd925f90b3" }),
]);
const wagmiClient = createClient({
  autoConnect: true,
  connectors: modalConnectors({
    appName: "SpaceDAO",
    chains,
  }),
  provider,
});

const ethereumClient = new EthereumClient(wagmiClient, chains);

export default function App({ Component, pageProps }) {
  return (
    <>
      <WagmiConfig client={wagmiClient}>
        <Layout>
          <div className="">
            <AppWrapper>
              <WalletProvider>
                <Component {...pageProps} />
              </WalletProvider>
            </AppWrapper>
          </div>
        </Layout>
      </WagmiConfig>
      <Web3Modal
        projectId="18eaa862738a7e299d4dd9cd925f90b3"
        ethereumClient={ethereumClient}
      />
    </>
  );
}
