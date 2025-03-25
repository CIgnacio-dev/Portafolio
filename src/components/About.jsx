import React from "react";
import { Box, Typography, Chip, Grid, Divider } from "@mui/material";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const techStack = [
  "React",
  "JavaScript (ES6+)",
  "Vite",
  "Tailwind CSS",
  "MUI",
  "Git/GitHub",
  "Figma",
  "Node.js"
];

const About = () => {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        color: "white",
        backgroundColor: "#121212",
        padding: { xs: "60px 20px", md: "100px 80px" },
        textAlign: "center",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Typography variant="h3" gutterBottom>
          {t("about.title")}
        </Typography>
        <Divider sx={{ backgroundColor: "#6200EE", marginBottom: "30px" }} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <Typography variant="h6" sx={{ maxWidth: "800px", margin: "0 auto" }}>
          {t("about.intro")}
        </Typography>

        <Typography
          variant="body1"
          sx={{ maxWidth: "700px", margin: "30px auto 50px" }}
        >
          {t("about.description")}
        </Typography>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <Typography variant="h5" gutterBottom>
          {t("about.techTitle")}
        </Typography>

        <Grid
          container
          spacing={2}
          justifyContent="center"
          sx={{ maxWidth: 800, margin: "0 auto", mt: 2 }}
        >
          {techStack.map((tech, index) => (
            <Grid item key={index}>
              <Chip label={tech} color="primary" variant="outlined" />
            </Grid>
          ))}
        </Grid>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
      >
        <Typography
          variant="subtitle1"
          sx={{ mt: 6, fontStyle: "italic", color: "#aaa" }}
        >
          {t("about.quote")}
        </Typography>
      </motion.div>
    </Box>
  );
};

export default About;
