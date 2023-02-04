import Layout from "@/components/Layout";
import AppWrapper from "../context/DataContex";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <div className="">
        <AppWrapper>
          <Component {...pageProps} />
        </AppWrapper>
      </div>
    </Layout>
  );
}
