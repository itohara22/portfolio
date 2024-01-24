import { useState } from "react";
import About from "./components/About";
import Connect from "./components/Connect";
import Hero from "./components/Hero";
import { Projects } from "./components/Projects";
import SideNav from "./components/SideNav";
import NavBtn from "./components/NavBtn";
import { AnimatePresence, useScroll } from "framer-motion";

export default function App() {
  const [isActive, setIsActive] = useState<boolean>(false);

  const { scrollY } = useScroll();

  return (
    <>
      <NavBtn scrollY={scrollY} setIsActive={setIsActive} isActive={isActive} />
      <AnimatePresence>{isActive && <SideNav />}</AnimatePresence>
      <Hero />
      <Projects />
      <About />
      <Connect />
    </>
  );
}
