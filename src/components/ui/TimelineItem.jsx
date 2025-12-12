import { motion } from "framer-motion";

const TimelineItem = ({ item, index }) => {
  return (
    <div
      className="flex h-[80vh] w-full items-center justify-center"
      style={{ scrollSnapAlign: "start" }}
    >
      <div className="grid w-full max-w-7xl grid-cols-[1fr_auto_1fr] items-center gap-12 px-8">
        {/* Year */}
        <motion.div
          className="flex justify-end text-right text-8xl font-bold text-blue-500"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
        >
          {item.year}
        </motion.div>

        {/* Spacer for center line */}
        <div className="w-0.5" />

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.3 }}
        >
          <h2 className="mb-4 text-5xl font-bold tracking-tight">
            {item.title}
          </h2>
          <p className="text-xl leading-relaxed">{item.description}</p>
        </motion.div>
      </div>
    </div>
  );
};

export default TimelineItem;
