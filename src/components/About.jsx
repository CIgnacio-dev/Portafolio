import React from "react";
import { Container, Typography, Box } from "@mui/material";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation(); // 🔹 Obtener la función de traducción

  return (
    <Container maxWidth="md" sx={{ textAlign: "center", mt: 10 }}>
      <Typography variant="h3" sx={{ fontWeight: "bold", mb: 2 }}>
        {t("about.title")} {/* 🔹 Título traducido */}
      </Typography>
      <Typography variant="body1" sx={{ fontSize: "1.2rem", lineHeight: "1.6", mb: 3 }}>
        {t("about.intro")} {/* 🔹 Introducción traducida */}
      </Typography>
      <Typography variant="body2" sx={{ fontSize: "1rem", lineHeight: "1.5", color: "#bbb" }}>
        {t("about.details")} {/* 🔹 Detalles traducidos */}
      </Typography>

      <Box sx={{ mt: 4, display: "flex", justifyContent: "center" }}>
        <img 
          src="/images/profile.jpg"  // Reemplázalo con tu imagen real
          alt="My Photo"
          style={{ width: 150, height: 150, borderRadius: "50%" }}
        />
      </Box>
    </Container>
  );
};

export default About;
