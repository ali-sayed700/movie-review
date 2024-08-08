import { motion } from "framer-motion";
import { ReactNode } from "react";

interface IOverlay {
  className?: string;
  children: ReactNode;
}

const variants = {
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};
const Overlay = ({ className, children }: IOverlay) => {
  return (
    <motion.div
      style={{ zIndex: "1002 !importan" }}
      variants={variants}
      initial="hidden"
      animate="show"
      exit="hidden"
      className={`position-fixed top-0 left-0 z-3 bg-black bg-opacity-50  w-100 h-100 ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default Overlay;
