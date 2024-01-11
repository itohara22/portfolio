import img from "../../public/903041.jpg";
import img2 from "../../public/download.jpeg";
import ProjectItem from "./ProjectItem";

export const Projects = () => {
  return (
    <div className="w-full min-h-screen pt-8 bg-light-green">
      <h2 className="text-center text-7xl sm:text-8xl md:text-9xl font-rozha text-dark-green mb-12">
        Projects
      </h2>
      <ProjectItem img={img} img2={img2} />
      <ProjectItem img={img} img2={img2} />
      <ProjectItem img={img} img2={img2} />
    </div>
  );
};
