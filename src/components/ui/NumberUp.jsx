import { useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

const NumberUp = ({ value }) => {
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) => Math.round(latest));

  useEffect(() => {
    const controls = animate(motionValue, value, {
      duration: 1.5,
      ease: "easeOut",
    });

    return () => controls.stop();
  }, [value]);

  return <motion.span>{rounded}</motion.span>;
};

export default NumberUp;
