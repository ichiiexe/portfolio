import { motion } from "framer-motion";
import { useState } from "react";

import Header from "./components/Header";
import Profile from "./components/Profile";

function App() {
  const [tab, setTab] = useState("personal");

  return (
    <>
      <Header />

      <main className="h-screen flex flex-col items-center bg-gray-900 text-white pt-20 gap-10">
        <Profile />

        {/* TABS */}
        <div className="bg-gray-800 rounded-lg flex p-1 gap-2 relative">
          {/* Personal */}
          <button
            onClick={() => setTab("personal")}
            className="relative px-4 py-2 rounded-lg text-white"
          >
            {tab === "personal" && (
              <motion.div
                layoutId="tabHighlight"
                className="absolute inset-0 bg-gray-600 rounded-lg"
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
                className="absolute inset-0 bg-gray-600 rounded-lg"
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              />
            )}
            <span className="relative z-10">Education</span>
          </button>
        </div>

        {/* CONTENT */}
        <div>
          {tab === "personal" && <>personal</>}

          {tab === "education" && <>education</>}
        </div>
      </main>
    </>
  );
}

export default App;
