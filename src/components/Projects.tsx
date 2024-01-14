type Project = {
  title: string;
  img: string;
  description: string;
  link: string;
  bg: string;
  top: string;
  tech: string[];
};
import { useScroll } from "framer-motion";
import { useRef } from "react";
import { projectData } from "../data.js";

import ProjectCard from "./ProjectCard";

export const Projects = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <div id="projects" className="w-full min-h-screen pt-8">
      <h2 className="text-center text-7xl sm:text-8xl md:text-9xl font-rozha text-dark-green mb-12">
        Projects
      </h2>
      <main ref={container} className="relative mt-28 mb-[20vh]">
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
