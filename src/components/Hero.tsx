import Header from "./Header";

export default function Hero() {
  return (
    <div className="h-[100dvh] ">
      <Header />
      <div className="w-[80vw] mx-auto font-rozha text-dark-green grid grid-rows-2 mb-[10rem]">
        <h1 className="[font-size:clamp(4rem,15vw,12rem)] leading-[6rem] md:leading-[8rem] lg:leading-[10rem] xl:leading-[14rem] mt-14">
          Hey, <br />
          I'm Shubham
        </h1>
        <h2 className="mt-14 text-4xl text-right">I build things for web</h2>
      </div>
    </div>
  );
}
