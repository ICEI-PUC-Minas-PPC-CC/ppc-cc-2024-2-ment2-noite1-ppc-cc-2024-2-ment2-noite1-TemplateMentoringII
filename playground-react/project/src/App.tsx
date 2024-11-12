// App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { motion } from "framer-motion"; // Importando framer-motion
import Home from "./pages/Home";
import ChooseGame from "./pages/ChooseGame";
import Credits from "./pages/Credits";

const App: React.FC = () => {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route
            path="/"
            element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 3 }}
              >
                <Home />
              </motion.div>
            }
          />
          <Route
            path="/choose-game"
            element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 3 }}
              >
                <ChooseGame />
              </motion.div>
            }
          />
          <Route
            path="/credits"
            element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 3 }}
              >
                <Credits />
              </motion.div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
