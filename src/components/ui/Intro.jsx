import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Intro = ({ children, hasLoaded }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <motion.div
        initial="closed"
        animate={open ? "open" : "closed"}
        onAnimationComplete={() => hasLoaded && hasLoaded()}
        className="fixed inset-0 overflow-hidden z-9999 pointer-events-none"
      >
        {/* TOP PANEL */}
        <motion.div
          variants={{
            closed: { y: 0 },
            open: { y: "-100%" },
          }}
          transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1] }}
          className="absolute top-0 left-0 w-full h-1/2 bg-[#111]"
        />

        {/* BOTTOM PANEL */}
        <motion.div
          variants={{
            closed: { y: 0 },
            open: { y: "100%" },
          }}
          transition={{ duration: 1.5, ease: [0.76, 0, 0, 1] }}
          className="absolute bottom-0 left-0 w-full h-1/2 bg-[#111]"
        />
      </motion.div>
      {children}
    </>
  );
};

export default Intro;
