import { motion } from "framer-motion";
const Connect = () => {
  return (
    <div
      id="connect"
      className="flex flex-col h-[100vh] container mx-auto px-4 pt-[12rem] gap-4"
    >
      <div>
        <h2 className="text-end text-3xl sm:text-4xl md:text-6xl font-rozha text-dark-green mb-12">
          Let's create something together
        </h2>
        <motion.div
          initial={{ scale: 0, originX: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.3, type: "spring", stiffness: 50 }}
          className="w-[85vw] md:w-[70vw] mx-auto bg-green rounded-3xl"
        >
          <a href="mailto:ito.k23018@gmail.com">
            <button className="overflow-hidden w-full min-h-60 h-max text-cream text-5xl md:text-7xl lg:text-9xl font-rozha p-12 drop-shadow-lg">
              DROP ME A MESSAGE
            </button>
          </a>
        </motion.div>
      </div>
      <div className="mt-auto grid justify-items-center grid-cols-2 text-dark-green">
        <div>
          <h3 className="text-xl md:text-3xl lg:text-4xl font-inter">
            Contact Details
          </h3>
          <ul className="text-xs md:text-lg font-inter pl-2">
            <li className="mt-4">ito.k23018@gmail.com</li>
            <li className="mt-4">+91 9509523018</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl md:text-3xl lg:text-4xl font-inter">Others</h3>
          <ul className="text-xs md:text-lg font-inter pl-2">
            <li className="mt-4">
              <a
                className="relative underline-hover"
                href="https://www.linkedin.com/in/shubham-ghogle-25743a258/"
                target="_blank"
              >
                Linkedin
              </a>
            </li>
            <li className="mt-4">
              <a
                className="relative underline-hover"
                href="https://github.com/itohara22"
                target="_blank"
              >
                Github
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-xs sm:text-lg font-rozha text-center mt-6 mb-2">
        Site designed and coded by Shubham
      </div>
    </div>
  );
};

export default Connect;
