import { motion } from "framer-motion";

const SideNav = () => {
  return (
    <motion.div
      initial={{ x: -800 }}
      animate={{ x: 0 }}
      exit={{ x: -800, opacity: 0 }}
      transition={{ ease: "easeOut" }}
      className="z-50 fixed top-0 bottom-0 left-0 w-[600px] bg-purple-500"
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
