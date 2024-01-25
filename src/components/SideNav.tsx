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
      className="z-50 fixed top-0 bottom-0 left-0 w-[50vw] min-w-[250px] bg-light-purple grid place-items-center"
    >
      <motion.ul
        initial="initial"
        whileInView="animate"
        transition={{ staggerChildren: 0.07, delayChildren: 0.1 }}
        className="text-dark-green text-4xl flex flex-col h-full justify-evenly"
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
    </motion.div>
  );
};

export default SideNav;
