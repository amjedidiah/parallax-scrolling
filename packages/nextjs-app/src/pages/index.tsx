import Header from "@/components/header";
import { Fragment } from "react";
import Hero from "@/components/hero";
import History from "@/components/history";

export default function Home() {
  return (
    <Fragment>
      <Header />
      <main>
        <Hero />
        <History />
      </main>
    </Fragment>
  );
}
