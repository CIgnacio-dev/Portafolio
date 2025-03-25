import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DropDownNavbar from "./components/DropdownNavbar";
import Home from "./components/Home";
import About from "./components/About";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import UnderConstruction from "./components/UnderConstruction";
import LanguageSwitcher from "./components/LanguageSwitcher"; 
import NonTechLife from "./components/NonTechLife";
import "./i18n";


const SHOW_UNDER_CONSTRUCTION = true;

const App = () => {
  return (
    <Router>
       {SHOW_UNDER_CONSTRUCTION ? (
      <UnderConstruction />
    ) : (
      <div
        style={{
          display: "flex",
          backgroundColor: "#111",
          minHeight: "100vh",
          color: "white",
        }}
      >
        <DropDownNavbar />

        <main
          style={{
            flex: 1,
            textAlign: "center",
            padding: "50px",
            position: "relative",
          }}
        >
         
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

    
          

          {/* Rutas futuras */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/vida-personal" element={<NonTechLife />} />
          </Routes>
          <Footer />
        </main>
      </div>
       )} 
    </Router>
  );
};

export default App;
