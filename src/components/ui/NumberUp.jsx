import { useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

const NumberUp = ({ value, start }) => {
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) => Math.round(latest));

  useEffect(() => {
    if (!start) return;

    const controls = animate(motionValue, value, {
      duration: 3.5,
      ease: "easeOut",
    });

    return () => controls.stop();
  }, [value, start]);

  return <motion.span>{rounded}</motion.span>;
};

export default NumberUp;
