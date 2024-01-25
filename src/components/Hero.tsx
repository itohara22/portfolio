import { motion, useScroll, useTransform } from "framer-motion";
import Header from "./Header";
import { headingVariants } from "../data/AnimVariants";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const textScale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  return (
    <div ref={ref} className="h-[100dvh] mb-12">
      <Header />
      <motion.div
        style={{ y: textY, opacity: textOpacity, scale: textScale }}
        className="relative w-[80vw] h-[80%] mx-auto font-rozha text-dark-green flex flex-col justify-center gap-4"
      >
        <motion.h1
          variants={headingVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="[font-size:clamp(4rem,16vw,12rem)] leading-[6rem] md:leading-[8rem] lg:leading-[10rem] xl:leading-[14rem] mt-14"
        >
          {"Hey, I'm Shubham".split(" ").map((word, i) => (
            <span className="block" key={i}>
              {word.split("").map((char, i) => (
                <motion.span
                  className="inline-block"
                  key={i}
                  variants={headingVariants}
                >
                  {char}
                </motion.span>
              ))}
            </span>
          ))}
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-xl md:text-3xl lg:text-4xl xl:text-5xl text-right"
        >
          I build things for web
        </motion.h2>
      </motion.div>
    </div>
  );
}
