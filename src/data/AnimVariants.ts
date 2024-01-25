const headingVariants = {
  initial: { y: 50, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.2,
      staggerChildren: 0.07,
      ease: [0.61, 1, 0.88, 1],
    },
  },
};

export { headingVariants };
