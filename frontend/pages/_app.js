import Layout from "@/components/Layout";
import AppWrapper from "../context/DataContext";
import "@/styles/globals.css";
import { WalletProvider } from "@/context/WalletContext";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <div className="">
        <AppWrapper>
          <WalletProvider>
            <Component {...pageProps} />
          </WalletProvider>
        </AppWrapper>
      </div>
    </Layout>
  );
}
