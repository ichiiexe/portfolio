import { motion } from "framer-motion";

const TimelineItem = ({ item, index }) => {
  return (
    <div
      className="flex h-[80vh] w-full items-center justify-center pl-10"
      style={{ scrollSnapAlign: "start" }}
    >
      <div className="grid w-full max-w-8xl grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-4 md:gap-12 px-4 md:px-8">
        {/* Year */}
        <motion.div
          className="flex justify-center md:justify-end text-center md:text-right text-4xl md:text-8xl font-bold text-white/40 relative"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
        >
          {item.year}
          <span className="absolute -bottom-4 md:-bottom-5 text-sm md:text-lg">{item.range}</span>
        </motion.div>

        {/* Spacer for center line */}
        <div className="hidden md:block w-0.5" />

        {/* Content */}
        <motion.div
          className="text-center md:text-left"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.3 }}
        >
      
            <h2 className="mb-4 text-2xl md:text-5xl font-bold tracking-tight">
              {item.title}
            </h2>
    

          <p className="text-sm md:text-md leading-relaxed">{item.description}</p>
        </motion.div>
      </div>
    </div>
  );
};

export default TimelineItem;
