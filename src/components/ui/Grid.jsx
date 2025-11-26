import { useState } from "react";
import GridItem from "./GridItem";
import { AnimatePresence } from "framer-motion";
import GridModal from "./GridModal";

const Grid = ({ data }) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const openProject = (item) => {
    setSelected(item);
    setOpen(true);
  };

  const closeProject = () => {
    setSelected(null);
    setOpen(false);
  };

  return (
    <>
      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:p-0 lg:grid-cols-3 gap-4 w-full max-w-4xl mx-auto">
        {data.map((p) => (
          <GridItem
            key={p.id}
            title={p.title}
            image={p.logo}
            duration={p.id * 1.2}
            onClick={() => openProject(p)}
          />
        ))}
      </div>

      <AnimatePresence>
        {open && (
          <GridModal project={selected} open={open} onClose={closeProject} />
        )}
      </AnimatePresence>
    </>
  );
};

export default Grid;
