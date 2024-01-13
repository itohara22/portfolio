import ProjectCard from "./ProjectCard";
import img from "/itoEstate.png";

export const Projects = () => {
  return (
    <div className="w-full min-h-screen pt-8 bg-light-green">
      <h2 className="sticky top-8 text-center text-7xl sm:text-8xl md:text-9xl font-rozha text-dark-green mb-12">
        Projects
      </h2>
      <ProjectCard
        img={img}
        bg="bg-[#BBACAF]"
        top="top-[0]"
        title="Ito Estate"
      />
      <ProjectCard
        img={img}
        bg="bg-[#977F6D]"
        top="top-[25px]"
        title="Ai article summarizer"
      />
      <ProjectCard
        img={img}
        bg="bg-[#C2491D]"
        top="top-[50px]"
        title="some roject"
      />
      <ProjectCard
        img={img}
        bg="bg-white"
        top="top-[75px]"
        title="nina is hoe"
      />
    </div>
  );
};
