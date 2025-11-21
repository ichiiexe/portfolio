import { motion } from "framer-motion";

function App() {

  return (
    <>
      <div className="h-screen flex items-center justify-center bg-gray-900 text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold"
      >
        Hello Framer Motion + Tailwind!
      </motion.div>
    </div>
    </>
  )
}

export default App
