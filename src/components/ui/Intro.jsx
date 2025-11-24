import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Intro = ({ children, hasLoaded }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => setOpen(true), 200);
  }, []);

  return (
    <>
      <motion.div
        initial="closed"
        animate={open ? "open" : "closed"}
        onAnimationComplete={() => hasLoaded && hasLoaded()}
        style={{
          position: "fixed",
          inset: 0,
          overflow: "hidden",
          zIndex: 9999,
          pointerEvents: "none",
        }}
      >
        {/* TOP PANEL */}
        <motion.div
          variants={{
            closed: { y: 0 },
            open: { y: "-100%" },
          }}
          transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1] }}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "50%",
            background: "#111",
          }}
        />

        {/* BOTTOM PANEL */}
        <motion.div
          variants={{
            closed: { y: 0 },
            open: { y: "100%" },
          }}
          transition={{ duration: 1.5, ease: [0.76, 0, 0, 1] }}
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: "50%",
            background: "#111",
          }}
        />
      </motion.div>
      {children}
    </>
  );
};

export default Intro;
