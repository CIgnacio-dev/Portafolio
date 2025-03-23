import React, { useState } from "react";
import { Box, TextField, Button, Typography, Paper } from "@mui/material";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSent, setIsSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      
      
      .then(() => {
        setIsSent(true);
        setFormData({ name: "", email: "", message: "" });
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al enviar mensaje:", error);
        setError(t("contact.error")); // Mensaje de error en traducciones
        setLoading(false);
      });
  };
  console.log("Service ID:", import.meta.env.VITE_EMAILJS_SERVICE_ID);
  console.log("Template ID:", import.meta.env.VITE_EMAILJS_TEMPLATE_ID);
  console.log("Public Key:", import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        position: "relative",
        zIndex: 2,
      }}
    >
      <Paper
        elevation={5}
        sx={{
          padding: 4,
          bgcolor: "rgba(20, 20, 20, 0.9)", 
          borderRadius: "15px",
          width: "90%",
          maxWidth: "500px",
          textAlign: "center",
          backdropFilter: "blur(15px)",
        }}
      >
        <Typography variant="h3" sx={{ fontWeight: "bold", mb: 2, color: "#fff" }}>
          {t("contact.title")}
        </Typography>
        <Typography variant="body1" sx={{ color: "#bbb", mb: 3 }}>
          {t("contact.description")}
        </Typography>

        {isSent ? (
          <Typography sx={{ color: "#4CAF50", fontWeight: "bold", fontSize: "18px" }}>
            {t("contact.sent")}
          </Typography>
        ) : (
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label={t("contact.name")}
              name="name"
              variant="outlined"
              value={formData.name}
              onChange={handleChange}
              required
              sx={textFieldStyle}
            />
            <TextField
              fullWidth
              label={t("contact.email")}
              name="email"
              type="email"
              variant="outlined"
              value={formData.email}
              onChange={handleChange}
              required
              sx={textFieldStyle}
            />
            <TextField
              fullWidth
              label={t("contact.message")}
              name="message"
              multiline
              rows={4}
              variant="outlined"
              value={formData.message}
              onChange={handleChange}
              required
              sx={textFieldStyle}
            />
            {error && (
              <Typography sx={{ color: "red", fontSize: "14px", mb: 2 }}>
                {error}
              </Typography>
            )}
            <Button
              type="submit"
              variant="contained"
              sx={buttonStyle}
              disabled={loading}
            >
              {loading ? t("contact.sending") : t("contact.send")}
            </Button>
          </form>
        )}
      </Paper>
    </Box>
  );
};


const textFieldStyle = {
  mb: 2,
  bgcolor: "#222",
  borderRadius: "5px",
  input: { color: "white" },
  label: { color: "#aaa" },
};

// Estilos del botón
const buttonStyle = {
  bgcolor: "#03DAC6",
  width: "100%",
  fontSize: "1rem",
  padding: "12px",
  "&:hover": { bgcolor: "#029c94" },
};

export default Contact;
