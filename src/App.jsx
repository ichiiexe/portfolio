import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import personalProjectData from "./data/personalProjectData";

import SpaceBackground from "./components/ui/SpaceBackground";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Intro from "./components/ui/Intro";
import Grid from "./components/ui/Grid";
import Timeline from "./components/ui/Timeline";

function App() {
  const [loaded, setLoaded] = useState(false);
  const [tab, setTab] = useState("personal");

  return (
    <>
      <SpaceBackground />

      <Intro hasLoaded={() => setLoaded(true)}>
        <Header />

        <main className="h-screen flex flex-col items-center text-white pt-20">
          <div className="max-w-4xl w-full flex flex-col items-center gap-10">
            <Profile hasLoaded={loaded} projects={personalProjectData.length} />

            {/* TABS */}
            <div className="bg-white/10 rounded-lg flex p-1 gap-2 relative">
              {/* Personal */}
              <button
                onClick={() => setTab("personal")}
                className="relative px-4 py-2 rounded-lg text-white"
              >
                {tab === "personal" && (
                  <motion.div
                    layoutId="tabHighlight"
                    className="absolute inset-0 bg-white/10 rounded-lg"
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  />
                )}
                <span className="relative z-10">Personal</span>
              </button>

              {/* Education */}
              <button
                onClick={() => setTab("education")}
                className="relative px-4 py-2 rounded-lg text-white"
              >
                {tab === "education" && (
                  <motion.div
                    layoutId="tabHighlight"
                    className="absolute inset-0 bg-white/10 rounded-lg"
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  />
                )}
                <span className="relative z-10">Education</span>
              </button>
            </div>

            {/* CONTENT */}

            {tab === "personal" && <Grid data={personalProjectData} />}

            {tab === "education" && <Timeline />}
          </div>
        </main>
      </Intro>
    </>
  );
}

export default App;
