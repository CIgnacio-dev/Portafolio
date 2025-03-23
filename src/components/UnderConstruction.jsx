import React from "react";
import { Box, Typography, Button } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import ParticlesBackground from "./ParticlesBackground";
import { useTranslation } from "react-i18next";

const UnderConstruction = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#111",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        textAlign: "center",
        position: "relative",
        overflow: "hidden"
      }}
    >
      <ParticlesBackground />

     

      {/* Contenido principal */}
      <Typography variant="h3" sx={{ mb: 2, fontWeight: "bold", zIndex: 1 }}>
        🚧 {t("construction.title")}
      </Typography>
      <Typography variant="h6" sx={{ mb: 4, maxWidth: "600px", zIndex: 1 }}>
        {t("construction.description")}
      </Typography>
      <Button
        variant="contained"
        color="secondary"
        startIcon={<GitHubIcon />}
        href="https://github.com/CIgnacio-dev"
        target="_blank"
        rel="noopener"
        sx={{ fontWeight: "bold", zIndex: 1 }}
      >
        {t("construction.github")}
      </Button>
    </Box>
  );
};

export default UnderConstruction;
