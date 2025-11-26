import { motion } from "framer-motion";
import StackIcon from "tech-stack-icons";

import Carousel from "./Carousel";

import CloseIcon from "@mui/icons-material/Close";
import PublicIcon from "@mui/icons-material/Public";
import GitHubIcon from "@mui/icons-material/GitHub";

const GridModal = ({ project, open, onClose }) => {
  if (!project || !open) return null;

  const images =
    project.imgs && project.imgs.length > 0 ? project.imgs : [project.logo];
  return (
    <>
      {/* Backdrop */}
      <motion.div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />

      {/* Modal */}
      <motion.div
        className="fixed inset-0 flex items-center justify-center z-50 px-4"
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      >
        <div className="bg-white/20 rounded-xl shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-xs border border-white/30 max-w-3xl max-h-[90vh] overflow-y-auto p-6 relative text-white">
          <CloseIcon
            onClick={onClose}
            className="absolute top-4 right-4 cursor-pointer text-white"
          />

          <h2 className="text-2xl font-bold mb-4">{project.title}</h2>

          <Carousel images={images} />

          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech) => (
              <StackIcon
                key={tech}
                name={tech}
                variant="dark"
                className="rounded-md sm:h-10 sm:w-10 h-8 w-8 p-1"
              />
            ))}
          </div>

          <p className="leading-relaxed mb-6">{project.description}</p>

          <div className="flex justify-center gap-3">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="border px-4 py-2 rounded-md"
              >
                <PublicIcon className="inline-block mr-2 mb-1 text-lg!" />
                Live Site
              </a>
            )}

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="border px-4 py-2 rounded-md"
              >
                <GitHubIcon className="inline-block mr-2 mb-1 text-lg!" />
                Github
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </>
  );
};
export default GridModal;
