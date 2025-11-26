import project1 from "../assets/projects/Tipper-splitter/logo.png";
import project1img1 from "../assets/projects/Tipper-splitter/splitter-tipper.png";

import project2 from "../assets/projects/Aniflix/logo.png";
import project2img1 from "../assets/projects/Aniflix/aniflix_home.png";
import project2img2 from "../assets/projects/Aniflix/aniflix_home2.png";
import project2img3 from "../assets/projects/Aniflix/aniflix_login.png";
import project2img4 from "../assets/projects/Aniflix/aniflix_watch.png";
import project2img5 from "../assets/projects/Aniflix/aniflix_watch2.png";

import project3 from "../assets/projects/typeRacer/logo.png";
import project3img1 from "../assets/projects/typeRacer/typeracer_home.png";
import project3img2 from "../assets/projects/typeRacer/typeracer_home2.png";
import project3img3 from "../assets/projects/typeRacer/typeracer_login.png";

const personalProjectData = [
  {
    id: 1,
    title: "Tipper/Splitter",
    logo: project1,
    imgs: [project1, project1img1],
    description:
      "Tipper/Splitter is a web application that allows users to easily calculate tips and split bills among multiple people. Built with a modern React + Vite frontend and a Node.js + Express backend, it features user authentication with JWT and image uploads via Cloudinary.",
    technologies: ["react", "vitejs", "tailwindcss"],
    link: "https://ichiiexe.github.io/tipper-splitter-/",
    github: "https://github.com/ichiiexe/tipper-splitter-",
  },
  {
    id: 2,
    title: "Aniflix (in Progress)",
    logo: project2,
    imgs: [
      project2,
      project2img1,
      project2img2,
      project2img3,
      project2img4,
      project2img5,
    ],
    description:
      "Aniflix is an anime discovery and streaming platform built with a fast React (Vite) frontend, a Node.js/Express backend, and a dedicated TypeScript provider API. It features a responsive Tailwind CSS UI, an advanced HLS.js video player with subtitle support, and optimized image handling. The backend enables user authentication, Cloudinary media uploads, and optional manifest proxying, while a separate microservice (api.consumet.org) handles scraping and multi-source aggregation through a unified API.",
    technologies: [
      "react",
      "vitejs",
      "tailwindcss",
      "framer",
      "reactrouter",
      "nodejs",
      "expressjs",
      "cloudinary",
      "typescript",
    ],
    link: "https://ichiiexe.github.io/tipper-splitter-/",
    github: "https://github.com/ichiiexe/tipper-splitter-",
  },
  {
    id: 3,
    title: "TypeRacer (In Progress)",
    logo: project3,
    imgs: [project3, project3img2, project3img1, project3img3],
    description:
      "TypeRacer is a fast, real‑time typing game built with a modern React + Vite frontend and an Express + Socket.IO backend. It supports singleplayer practice and multiplayer rooms with live position updates, text generation, and result tracking in MongoDB.",
    technologies: [
      "react",
      "vitejs",
      "tailwindcss",
      "nodejs",
      "expressjs",
      "mongodb",
    ],
    link: "",
    github: "",
  },
];

export default personalProjectData;
