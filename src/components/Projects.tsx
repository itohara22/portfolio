import { useScroll } from "framer-motion";
import { useRef } from "react";

import ProjectCard from "./ProjectCard";
import img from "/itoEstate.png";

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
      <main ref={container} className="relative mt-28 mb-[50vh]">
        <ProjectCard
          img={img}
          bg="bg-[#BBACAF]"
          top="top-[0]"
          title="Ito Estate"
          progress={scrollYProgress}
          range={[0, 1]}
          scale={0.7}
        />
        <ProjectCard
          img={img}
          bg="bg-[#BBACEE]"
          top="top-[25px]"
          title="Ito Estate"
          progress={scrollYProgress}
          range={[0.25, 1]}
          scale={0.85}
        />
        <ProjectCard
          img={img}
          bg="bg-[#BBACAF]"
          top="top-[50px]"
          title="Ito Estate"
          progress={scrollYProgress}
          range={[0.5, 1]}
          scale={1}
        />
      </main>
    </div>
  );
};
