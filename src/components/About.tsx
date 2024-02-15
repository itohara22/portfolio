import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const heading = useRef(null);
  const isInView = useInView(heading, {
    margin: "-200px",
    once: true,
  });

  return (
    <div className="bg-light-purple mb-24">
      <div
        id="about"
        className="pt-11 h-screen mx-auto px-10 md:px-[15vw] md:container"
      >
        <motion.h2
          ref={heading}
          initial={{ x: -100, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-center text-7xl sm:text-8xl lg:text-9xl font-rozha text-dark-green"
        >
          About Me
        </motion.h2>
        <div className="flex justify-center flex-col h-[70vh] overflow-hidden ">
          <p className="mt-12 font-inter text-dark-green text-lg md:text-2xl">
            I'm a passionate and creative Web developer developer based in
            Rajasthan. With a keen eye for detail and a love for clean,
            efficient code, I specialize in crafting dynamic and user-friendly
            web applications.
          </p>
          <p className="mt-12 font-inter text-dark-green text-lg md:text-2xl">
            In my work I follow the principle of "minimum unnecessary, maximum
            meaning", striving to create designs that are clear, concise, and
            effective in achieving their intended purpose.
          </p>
        </div>
      </div>
    </div>
  );
}
