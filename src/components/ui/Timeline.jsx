import { useEffect, useRef, useState } from "react";
import TimelineItem from "./TimelineItem";

const Timeline = ({ items }) => {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [showTopFade, setShowTopFade] = useState(false);
  const [showBottomFade, setShowBottomFade] = useState(true);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollTop = container.scrollTop;
      const clientHeight = container.clientHeight;

      const currentIndex = Math.round(scrollTop / clientHeight);
      const clampedIndex = Math.max(
        0,
        Math.min(currentIndex, items.length - 1)
      );
      setActiveIndex(clampedIndex);

      setShowTopFade(clampedIndex !== 0);
      setShowBottomFade(clampedIndex !== items.length - 1);
    };

    container.addEventListener("scroll", handleScroll);
    handleScroll(); // initial
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative h-[80vh] w-full overflow-hidden bg-transparent text-white">
      {/* Center line with fades */}
      <div className="pointer-events-none absolute md:left-1/2 top-1/2 md: left-3 z-20 h-[50vh] w-0.5 -translate-x-1/2 -translate-y-1/2">
        <div className="absolute left-0 top-0 h-full w-full bg-white" />
        {/* Top fade */}
        <div
          className={`absolute left-0 top-0 z-10 h-32 w-full transition-opacity duration-500 bg-linear-to-b from-gray-900 to-transparent ${
            showTopFade ? "opacity-100" : "opacity-0"
          }`}
        />
        {/* Bottom fade */}
        <div
          className={`absolute bottom-0 left-0 z-10 h-32 w-full transition-opacity duration-500 bg-linear-to-t from-gray-900 to-transparent ${
            showBottomFade ? "opacity-100" : "opacity-0"
          }`}
        />
        {/* Active dot */}
        <div className="absolute left-1/2 top-1/2 z-20 flex h-4 w-4 -translate-x-1/2 -translate-y-1/2 items-center justify-center">
          <div className="h-full w-full rounded-full bg-white" />
        </div>
      </div>

      {/* Scrollable timeline */}
      <div
        ref={containerRef}
        className="h-full overflow-y-scroll scroll-smooth"
        style={{
          scrollSnapType: "y mandatory",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <style>{`div::-webkit-scrollbar { display: none; }`}</style>

        {items.map((item, index) => (
          <TimelineItem key={item.id} item={item} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Timeline;
