import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

type Props = {
  img: string;
  bg: string;
  top: string;
  title: string;
};

export default function ProjectCard({ title, img, bg, top }: Props) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });
  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);

  return (
    <div
      ref={container}
      className="h-screen grid place-items-center sticky top-0"
    >
      <div
        className={`${bg} relative flex flex-col h-[500px] w-[90vw] max-w-[1000px] rounded-xl p-5 origin-top ${top}`}
      >
        <h2 className="text-center text-7xl font-rozha text-dark-green">
          {title}
        </h2>
        <div className="flex h-full mt-12 gap-12">
          <div className="w-[40%] relative top-[10%]">
            <p>
              Lorem ipsum dolor sit amet, qui minim labore adipisicing minim
              sint cillum sint consectetur cupidatat.
            </p>
          </div>
          <div className="realtive w-[60%] h-full overflow-hidden rounded-xl">
            <motion.div className="h-full w-full" style={{ scale: imageScale }}>
              <img src={img} className="object-cover h-full w-full" />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
