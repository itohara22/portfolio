import { motion } from "framer-motion";

const SideNav = () => {
  return (
    <motion.div
      initial={{ x: -800 }}
      animate={{ x: 0 }}
      exit={{ x: -800 }}
      transition={{ ease: "easeInOut" }}
      className="z-50 fixed top-0 bottom-0 left-0 w-[600px] bg-green"
    >
      <ul>
        <li>
          <a
            href="#projects"
            className="underline-hover relative hover:cursor-pointer"
          >
            Projects
          </a>
        </li>
        <li>
          <a href="#" className="underline-hover relative hover:cursor-pointer">
            Let's Talk
          </a>
        </li>
      </ul>
    </motion.div>
  );
};

export default SideNav;
