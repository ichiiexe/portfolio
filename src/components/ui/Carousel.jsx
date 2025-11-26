import { useState } from "react";
import { motion } from "framer-motion";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  if (!images || images.length === 0) return null;

  const prevImage = (e) => {
    e.stopPropagation();
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setDirection(1);
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const slideTransition = { type: "spring", stiffness: 300, damping: 30 };

  return (
    <div className="w-full aspect-video rounded-lg overflow-hidden mb-6 relative flex items-center justify-center">
      <motion.img
        key={currentIndex}
        src={images[currentIndex]}
        alt={`Image ${currentIndex + 1}`}
        initial={{ x: direction > 0 ? 300 : -300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: direction > 0 ? -300 : 300, opacity: 0 }}
        transition={slideTransition}
        className="w-full h-full object-cover absolute"
      />

      {images.length > 1 && (
        <>
          <button
            onClick={prevImage}
            className="absolute left-2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60 z-10"
          >
            ‹
          </button>
          <button
            onClick={nextImage}
            className="absolute right-2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60 z-10"
          >
            ›
          </button>
        </>
      )}
    </div>
  );
};

export default Carousel;
