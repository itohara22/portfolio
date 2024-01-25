import { motion } from "framer-motion";
const Connect = () => {
  return (
    <div
      id="connect"
      className="flex flex-col min-h-[70vh] container mx-auto px-4"
    >
      <div>
        <h2 className="text-end text-5xl font-rozha text-dark-green mb-12">
          Let's create something together
        </h2>
        <motion.div
          initial={{ scale: 0, originX: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.3, type: "spring", stiffness: 50 }}
          className="w-[70vw] mx-auto bg-green rounded-3xl"
        >
          <a href="mailto:ito.k23018@gmail.com">
            <button className="overflow-hidden w-full min-h-60 h-max text-cream text-7xl lg:text-9xl font-rozha p-12 drop-shadow-lg">
              DROP ME A MESSAGE
            </button>
          </a>
        </motion.div>
      </div>
      <div className="mt-auto grid justify-items-end grid-cols-3 pb-4 text-dark-green">
        <div className="justify-self-start self-end">
          <div className="text-sm font-inter text-start">
            Site designed and coded by Shubham
          </div>
        </div>
        <div>
          <h3 className="text-3xl md:text-4xl font-inter">Contact Details</h3>
          <ul className="text-lg font-inter">
            <li className="mt-4">ito.k23018@gmail.com</li>
            <li className="mt-4">+91 9509523018</li>
          </ul>
        </div>
        <div>
          <h3 className="text-3xl md:text-4xl font-inter">Others</h3>
          <ul className="text-lg font-inter">
            <li className="mt-4">Linkedin</li>
            <li className="mt-4">Github</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Connect;
