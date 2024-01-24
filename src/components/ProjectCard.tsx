import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import ProjectBullet from "../ui/ProjectBullet";

type Props = {
  img: string;
  bg: string;
  top: string;
  title: string;
  scale: number;
  range: number[];
  progress: any;
  description: string;
  link: string;
  tech: string[];
};

export default function ProjectCard({
  title,
  description,
  img,
  bg,
  top,
  scale,
  progress,
  range,
  link,
  tech,
}: Props) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });
  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);

  const targetScale = useTransform(progress, range, [1, scale]);
  return (
    <div
      ref={container}
      className="h-screen grid place-items-center sticky top-0"
    >
      <motion.div
        className={`${bg} relative flex flex-col h-fit md:h-[540px] w-[90vw] max-w-[1000px] rounded-xl p-5 origin-top ${top} relative`}
        style={{ scale: targetScale }}
      >
        <h2 className="text-center text-3xl sm:text-5xl md:text-7xl font-rozha text-white">
          {title}
        </h2>
        <div className="flex flex-col-reverse md:flex-row h-full mt-12 gap-6 md:gap-8">
          <div className="w-full md:w-[40%] relative flex flex-col justify-around">
            <p className="mb-4 font-inter text-cream text-sm md:text-[1rem] lg:text-lg leading-relaxed">
              {description}
            </p>
            <section className="mb-8 flex flex-wrap gap-1 ">
              {tech.map((item, i) => (
                <ProjectBullet key={i} text={item} />
              ))}
            </section>
            <a
              href={link}
              target="_blank"
              className="text-2xl font-inter font-semibold"
            >
              <span className="flex items-center gap-4 font-inter text-cream text-[1rem] md:text-2xl lg:text-3xl hover:gap-6 transition-[gap] ease-out duration-200">
                Live link
                <svg
                  width="32"
                  height="20"
                  viewBox="0 0 22 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z"
                    fill="#FCF8FF"
                  />
                </svg>
              </span>
            </a>
          </div>
          <div className="sm:p-2 realtive w-full md:w-[65%] h-full overflow-hidden rounded-xl">
            <motion.div
              className="h-full w-full rounded-xl overflow-hidden"
              style={{ scale: imageScale }}
            >
              <img src={img} className="object-cover h-full w-full" />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
