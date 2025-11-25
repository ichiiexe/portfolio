import { motion } from "framer-motion";

const GridItem = ({ title, image, duration, onClick }) => {
  return (
    <motion.div
      className="group cursor-pointer rounded-sm overflow-hidden w-full"
      onClick={onClick}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration }}
    >
      <div className="relative w-full pt-[100%] overflow-hidden">
        <motion.img
          src={image}
          alt={title}
          className="absolute top-0 left-0 w-full h-full object-cover group-hover:scale-110 transition-all duration-300 ease-out"
        />

        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-black/40 transition-opacity flex items-end p-4">
          <h3 className="text-white font-semibold">{title}</h3>
        </div>
      </div>
    </motion.div>
  );
};

export default GridItem;
