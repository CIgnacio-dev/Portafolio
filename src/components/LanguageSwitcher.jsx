import { Button, Box, Select, MenuItem, useMediaQuery } from "@mui/material";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const isMobile = useMediaQuery("(max-width: 768px)");

  return isMobile ? (
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
  );
};

export default LanguageSwitcher;
