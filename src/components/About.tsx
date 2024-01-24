export default function About() {
  return (
    <div className="pt-10 h-screen mx-auto px-10 md:px-[15vw] md:container">
      <h2 className="bg-red-50 text-center text-7xl sm:text-8xl lg:text-9xl font-rozha text-dark-green">
        About Me
      </h2>
      <div className="flex justify-center flex-col h-[70vh]">
        <p className="mt-12 font-inter text-dark-green text-2xl">
          I'm a passionate and creative Web developer developer based in
          Rajasthan. With a keen eye for detail and a love for clean, efficient
          code, I specialize in crafting dynamic and user-friendly web
          applications.
        </p>
        <p className="mt-12 font-inter text-dark-green text-2xl">
          In my work I follow the principle of "minimum unnecessary, maximum
          meaning", striving to create designs that are clear, concise, and
          effective in achieving their intended purpose.
        </p>
      </div>
    </div>
  );
}
