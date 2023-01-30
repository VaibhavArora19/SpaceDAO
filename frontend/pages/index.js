import Sidebar from "@/components/Sidebar";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>SpaceDAO</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Sidebar />
      </main>
    </>
  );
}
