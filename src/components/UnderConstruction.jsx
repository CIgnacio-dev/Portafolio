import React from "react";
import { Button, Box, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

const UnderConstruction = () => {
  const { t } = useTranslation();

  return (
    
    <Box
      sx={{
        position: "fixed", 
        top: { xs: 10, sm: 20 },
        left: 0,
        width: "100%",
        height: "100%",
        bgcolor: "#111", 
        color: "white",
        zIndex: 9999, 
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        
      }}
    >
    
    <LanguageSwitcher />
   
      <Typography variant="h3" sx={{ fontWeight: "bold", mb: 2 }}>
        🚧 {t("under.title")}
      </Typography>
      <Typography variant="h6" sx={{ mb: 4 }}>
        {t("under.description")}
      </Typography>
      
      <Button
        variant="contained"
        color="secondary"
        size="large"
        href="https://github.com/CIgnacio-dev"
        target="_blank"
        startIcon={<GitHubIcon />}
        sx={{ bgcolor: "#a020f0", "&:hover": { bgcolor: "#8b1ee0" } }}
      >
        {t("under.button")}
      </Button>
    </Box>
  );
};

export default UnderConstruction;
