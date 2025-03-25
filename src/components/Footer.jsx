import React from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#1a1a1a",
        color: "white",
        padding: "30px 20px",
        textAlign: "center",
        mt: 10,
      }}
    >
      <Typography variant="body1" sx={{ mb: 2 }}>
        <Link
          to="/vida-personal"
          style={{
            color: "#00D4FF",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Quién soy fuera del código
        </Link>
      </Typography>

      <Typography
        variant="caption"
        display="block"
        sx={{ opacity: 0.6 }}
      >
        © {new Date().getFullYear()} Carlos Roa · Todos los derechos reservados
      </Typography>
    </Box>
  );
};

export default Footer;
