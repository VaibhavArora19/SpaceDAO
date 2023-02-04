import Layout from "@/components/Layout";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <div className="">
        <Component {...pageProps} />
      </div>
    </Layout>
  );
}
