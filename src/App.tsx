// import { useEffect } from "react";
import About from "./components/About";
import Connect from "./components/Connect";
import Hero from "./components/Hero";
import { Projects } from "./components/Projects";
// import Lenis from "@studio-freight/lenis/types";

export default function App() {
  // useEffect(() => {
  //   const lenis = new Lenis();
  //
  //   function raf(time) {
  //     lenis.raf(time);
  //     requestAnimationFrame(raf);
  //   }
  //
  //   requestAnimationFrame(raf);
  // }, []);
  return (
    <>
      <Hero />
      <Projects />
      <About />
      <Connect />
    </>
  );
}
