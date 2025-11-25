import { useState } from "react";
import GridItem from "./GridItem";

const Grid = ({ data }) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const openProject = (item) => {
    setSelected(item);
    setOpen(true);
  };

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:p-0 lg:grid-cols-3 gap-4 w-full max-w-4xl mx-auto">
      {data.map((p) => (
        <GridItem
          key={p.id}
          title={p.title}
          image={p.img}
          duration={p.id * 1.2}
          onClick={() => openProject(p)}
        />
      ))}
    </div>
  );
};

export default Grid;
