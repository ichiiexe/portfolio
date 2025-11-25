import project1 from "../assets/projects/Tipper-splitter/logo.png";
import project2 from "../assets/projects/Aniflix/logo.png";

const personalProjectData = [
  {
    id: 1,
    title: "Tipper/Splitter",
    img: project1,
    description:
      "Tipper/Splitter is a web application that allows users to easily calculate tips and split bills among multiple people. Built with a modern React + Vite frontend and a Node.js + Express backend, it features user authentication with JWT and image uploads via Cloudinary.",
    technologies: ["React", "Vite", "Tailwind CSS"],
    link: "",
    github: "",
  },
  {
    id: 2,
    title: "Aniflix(in Progress)",
    img: project2,
    description:
      "Aniflix combines a fast React (Vite) frontend with a Node/Express backend and a separate TypeScript-based provider API to deliver an all-in-one anime discovery and streaming experience. The UI is mobile-first and responsive (Tailwind CSS), with a video player capable of playback for HLS streams (Hls.js), subtitle rendering and efficient image handling. The backend supports user authentication, media uploads via Cloudinary, and optional manifest proxying when necessary. Provider logic and scraping are handled by a dedicated TypeScript microservice (api.consumet.org), letting the app query many sources in a unified, performant API.",
    technologies: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Framer Motion",
      "React Router",
      "Node.js",
      "Express",
      "Cloudinary",
      "TypeScript",
    ],
    link: "",
    github: "",
  },
  {
    id: 3,
    title: "TypeRacer(In Progress)",
    img: project2,
    description:
      "TypeRacer is a fast, real‑time typing game built with a modern React + Vite frontend and an Express + Socket.IO backend. It supports singleplayer practice and multiplayer rooms with live position updates, text generation, and result tracking in MongoDB.",
    technologies: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
    ],
    link: "",
    github: "",
  },
];

export default personalProjectData;
