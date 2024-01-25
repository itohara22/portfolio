import { MotionValue, motion, useMotionValueEvent } from "framer-motion";
import React, { Dispatch, useState } from "react";

type Props = {
  setIsActive: Dispatch<React.SetStateAction<boolean>>;
  scrollY: MotionValue;
  isActive: boolean;
};
const NavBtn = ({ setIsActive, scrollY, isActive }: Props) => {
  const [showNavBtn, setShowNavBtn] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (isActive) {
      setShowNavBtn(true);
      return;
    } else {
      setShowNavBtn(false);
    }
    if (latest > 300) {
      setShowNavBtn(true);
    } else {
      setShowNavBtn(false);
    }
  });

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={showNavBtn ? { scale: 1 } : {}}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.4 }}
      className="z-50 fixed top-10 right-10 bg-green p-4 aspect-square rounded-full grid place-items-center cursor-pointer"
      onClick={() => setIsActive((prev: boolean) => !prev)}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2.5}
        stroke="#fffefd"
        className="w-7 h-7"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </motion.div>
  );
};

export default NavBtn;
