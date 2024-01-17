import Header from "./Header";

export default function Hero() {
  return (
    <div className="h-[100dvh] mb-12">
      <Header />
      <div className="w-[80vw] h-[80%] mx-auto font-rozha text-dark-green flex flex-col justify-center gap-4">
        <h1 className="[font-size:clamp(4rem,18vw,12rem)] leading-[6rem] md:leading-[8rem] lg:leading-[10rem] xl:leading-[14rem] mt-14">
          Hey, <br />
          I'm Shubham
        </h1>
        <h2 className="text-2xl md:text-4xl lg:text-6xl text-right">
          I build things for web
        </h2>
      </div>
    </div>
  );
}
