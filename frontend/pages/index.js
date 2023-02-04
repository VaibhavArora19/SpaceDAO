import Books from "@/components/Books";
import HeroCard from "@/components/Cards/HeroCard";
import Games from "@/components/Games";
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
        <HeroCard />
        <Games />
        <Books />
      </main>
    </>
  );
}
