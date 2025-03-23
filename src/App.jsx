import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/SideBar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import UnderConstruction from "./components/UnderConstruction";
import LanguageSwitcher from "./components/LanguageSwitcher"; 
import "./i18n";

const App = () => {
  return (
    <Router>
      <div
        style={{
          display: "flex",
          backgroundColor: "#111",
          minHeight: "100vh",
          color: "white",
        }}
      >
        <Sidebar />

        <main
          style={{
            flex: 1,
            textAlign: "center",
            padding: "50px",
            position: "relative",
          }}
        >
          {/* Botón de cambio de idioma */}
          <div
            style={{
              position: "absolute",
              top: "10px",
              right: "20px",
              zIndex: 10,
            }}
          >
            <LanguageSwitcher />
          </div>

          {/* Página principal en construcción */}
          <UnderConstruction />

          {/* Rutas futuras */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
