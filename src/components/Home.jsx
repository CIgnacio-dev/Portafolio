import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t, i18n } = useTranslation();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center", 
        justifyContent: "center",
        height: "100vh",  
        width: "100%", 
        textAlign: "center",
        overflow: "hidden",  
        position: "relative",
      }}
    >
     
      <Box
        sx={{
          position: "absolute",
          top: "10px", 
          right: "10px", 
          display: "flex",
          gap: "8px",
          zIndex: 1, 
        }}
      >
        
      </Box>

     
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
       <Typography
  variant="h2"
  sx={{
    fontSize: { xs: "2rem", md: "4rem" },
    color: "#00D4FF",
    fontWeight: "bold",
  }}
>
  {t("home.title", "¡Hola, soy Carlos Roa!")}
</Typography>

      </motion.div>

      {/*  Descripción */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}>
        <Typography variant="h5" sx={{ color: "white", maxWidth: "600px", mb: 3 }}>
          {t("home.description", "Desarrollador Frontend especializado en React, JavaScript y tecnologías web modernas.")}
        </Typography>
      </motion.div>

      {/*  Botón de Ver Proyectos */}
      <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }}>
        <Button
          variant="contained"
          sx={{
            background: "#6200EE",
            color: "white",
            padding: "12px 20px",
            fontSize: "18px",
            fontWeight: "bold",
            borderRadius: "8px",
            textTransform: "none",
          }}
          onClick={() => {
            const projectsSection = document.getElementById("projects");
            projectsSection?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          {t("home.projects_button", "Ver Proyectos")}
        </Button>
      </motion.div>
    </Box>
  );
};

export default Home;
