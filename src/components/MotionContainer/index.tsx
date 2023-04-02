import { motion } from "framer-motion";
import type { ReactNode } from "react";

export type MotionContainerProps = {
  children: ReactNode;
};

function MotionContainer({ children }: MotionContainerProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      {children}
    </motion.div>
  );
}

export default MotionContainer;
