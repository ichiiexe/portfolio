import { motion } from "framer-motion";
import { useState } from "react";

import  Header  from "./components/Header";
import  Profile  from "./components/Profile";


function App() {
  const [tab, setTab] = useState("personal")

  return (
    <>
    <Header />
  
      <main className="h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
        <Profile />


        {/* TABS */}
        <div>
          <button onClick={() => setTab("personal")}>
            Personal
          </button>

          <button onClick={() => setTab("education")}>
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
  )
}

export default App
