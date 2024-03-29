import { useInView, useScroll } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import { projectData } from "../data/projectData";

import ProjectCard from "./ProjectCard";

type Project = {
  title: string;
  img: string;
  description: string;
  link: string;
  bg: string;
  top: string;
  tech: string[];
};

export const Projects = () => {
  const container = useRef(null);
  const heading = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const isInView = useInView(heading, {
    margin: "-300px",
    once: true,
  });

  return (
    <div id="projects" className="w-full pt-20 bg-cream relative z-10">
      <motion.h2
        initial={{ y: 50, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.4, ease: [0.61, 1, 0.88, 1] }}
        ref={heading}
        className="text-center text-7xl sm:text-8xl md:text-9xl font-rozha text-dark-green"
      >
        Projects
      </motion.h2>
      <main ref={container} className="relative mt-6 mb-[20vh] ">
        {projectData.map((project: Project, i: number) => {
          const targetScale = 1 - (projectData.length - i) * 0.05;
          const range = [i * 0.25, 1];
          return (
            <ProjectCard
              key={project.title}
              img={project.img}
              bg={project.bg}
              title={project.title}
              description={project.description}
              top={project.top}
              progress={scrollYProgress}
              range={range}
              scale={targetScale}
              link={project.link}
              tech={project.tech}
            />
          );
        })}
      </main>
    </div>
  );
};
