import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/SideBar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { Button, Box, Select, MenuItem, useMediaQuery } from "@mui/material";
import { useTranslation } from "react-i18next";
import "./i18n";

const App = () => {
  const { i18n } = useTranslation();
  const isMobile = useMediaQuery("(max-width: 768px)"); 

  return (
    <Router>
      <div style={{ display: "flex", backgroundColor: "#111", minHeight: "100vh", color: "white" }}>
        <Sidebar />
        <main style={{ flex: 1, textAlign: "center", padding: "50px", position: 'relative' }}>
          
          
          <Box
            sx={{
              position: "absolute",
              top: "10px",
              right: "20px",
              zIndex: 10,
            }}
          >
            {isMobile ? (
              <Select
                value={i18n.language}
                onChange={(e) => i18n.changeLanguage(e.target.value)}
                sx={{
                  color: "white",
                  backgroundColor: "#222",
                  borderRadius: "5px",
                  fontSize: "14px",
                  '& .MuiSelect-icon': { color: "white" },
                  '& .MuiOutlinedInput-notchedOutline': { borderColor: "white" },
                }}
              >
                <MenuItem value="en">US English</MenuItem>
                <MenuItem value="es">🇪🇸 Español</MenuItem>
              </Select>
            ) : (
              <Box sx={{ display: "flex", gap: "10px" }}>
                <Button
                  variant="outlined"
                  sx={{
                    color: i18n.language === "en" ? "#00D4FF" : "white",
                    borderColor: "white",
                    padding: "5px 10px",
                    fontWeight: i18n.language === "en" ? "bold" : "normal",
                  }}
                  onClick={() => i18n.changeLanguage("en")}
                >
                  US English
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    color: i18n.language === "es" ? "#00D4FF" : "white",
                    borderColor: "white",
                    padding: "5px 10px",
                    fontWeight: i18n.language === "es" ? "bold" : "normal",
                  }}
                  onClick={() => i18n.changeLanguage("es")}
                >
                  🇪🇸 Español
                </Button>
              </Box>
            )}
          </Box>

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
