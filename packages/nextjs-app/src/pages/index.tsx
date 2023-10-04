import Header from "@/components/header";
import { Fragment } from "react";
import Hero from "@/components/hero";
import History from "@/components/history";
import Team from "@/components/team";

export default function Home() {
  return (
    <Fragment>
      <div id="top" />
      <Header />
      <main>
        <Hero />
        <History />
        <Team />
      </main>
    </Fragment>
  );
}