import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function TimelineItem({ year, text }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-20% 0px -20% 0px", once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="flex items-start my-16"
    >
        
      {/* YEAR */}
      <div className="w-1/2 text-right pr-6">
        <span className="text-xl font-semibold">{year}</span>
      </div>

      {/* CONTENT*/}
      <div className="w-1/2 pl-6">
        <div className=" shadow-lg border-l-4 border-blue-600 p-5 rounded-lg bg-white/10 backdrop-blur-md">
          {text}
        </div>
      </div>

    </motion.div>
  );
}

export default TimelineItem;