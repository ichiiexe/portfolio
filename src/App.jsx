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
        <div className="bg-gray-800 px-6 py-2 rounded-lg flex gap-4">
          <button onClick={() => setTab("personal")} className={``}>
            Personal
          </button>

          <button onClick={() => setTab("education")} className={``}>
            Education
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
