import { motion } from "framer-motion";

const SideNav = () => {
  const navItemsAnim = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.3 } },
  };
  return (
    <motion.div
      initial={{ x: -800 }}
      animate={{ x: 0 }}
      exit={{ x: -800 }}
      transition={{ ease: "easeInOut" }}
      className="z-50 py-28 fixed top-0 bottom-0 left-0 w-[35vw] min-w-[400px] bg-[#A14DA0] grid grid-rows-[60%_1fr] justify-center justify-items-center gap-8 "
    >
      <h1 className="self-end text-dark-green sr-only">Navigation</h1>
      <div className="">
        <motion.ul
          initial="initial"
          whileInView="animate"
          transition={{ staggerChildren: 0.07, delayChildren: 0.1 }}
          className="text-cream text-4xl flex flex-col h-full justify-between"
        >
          <motion.li variants={navItemsAnim}>
            <a href="#projects" className="">
              Projects
            </a>
          </motion.li>
          <motion.li variants={navItemsAnim}>
            <a href="#about">About me</a>
          </motion.li>
          <motion.li variants={navItemsAnim}>
            <a href="#connect" className="">
              Let's Talk
            </a>
          </motion.li>
        </motion.ul>
      </div>
      <motion.div
        initial="initial"
        whileInView="animate"
        transition={{ staggerChildren: 0.07, delayChildren: 0.1 }}
        className="self-end text-sm text-cream"
      >
        <motion.a
          variants={navItemsAnim}
          href="https://www.linkedin.com/in/shubham-ghogle-25743a258/"
          target="_blank"
          className="mr-5 inline-block"
        >
          LinkedIn
        </motion.a>
        <motion.a
          variants={navItemsAnim}
          href="https://github.com/itohara22"
          target="_blank"
          className="inline-block"
        >
          Github
        </motion.a>
      </motion.div>
    </motion.div>
  );
};

export default SideNav;
