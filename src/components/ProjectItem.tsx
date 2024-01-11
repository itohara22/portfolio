type Props = {
  img: string;
  img2: string;
};

export default function ProjectItem({ img, img2 }: Props) {
  return (
    <div className="mt-16 px-4 md:container md:mx-auto md:px-8 h-[70vh] max-h-[900px] grid grid-cols-none grid-rows-[3fr_1fr] md:grid-rows-none md:grid-cols-[2.5fr_1fr] place-items-center">
      <div className="h-full relative">
        <img src={img} alt="project image" className="object-contain h-full" />
        <img
          src={img2}
          alt="project image"
          className="absolute object-cover h-52 w-32 -bottom-8 sm:h-64 sm:w-40 md:h-64 md:w-48 sm:-bottom-20 md:bottom-2 lg:h-72 lg:w-52 xl:h-96 xl:w-72 right-10"
        />
      </div>
      <div className="h-full w-full grid place-items-center">jjjjj</div>
    </div>
  );
}
