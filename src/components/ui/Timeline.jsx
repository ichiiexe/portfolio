import TimelineItem from "./TimelineItem";

export default function Timeline() {
  return (
    <div className="relative py-20">
      {/* LINE */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-full bg-gradient-to-b from-white to-transparent" />

      {items.map((item, i) => (
        <TimelineItem key={i} year={item.year} text={item.text} />
      ))}

      {/* FADE */}
      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-40 bg-transparent" />
    </div>
  );
}

