import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";

const projects = [
  {
    title: "FlyMe",
    description: "Aplicación de reservas de espacios con autenticación y JWT.",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    github: "#",
    demo: "#",
  },
  {
    title: "Otro Proyecto",
    description: "Descripción breve de otro proyecto interesante.",
    tags: ["JavaScript", "CSS", "Firebase"],
    github: "#",
    demo: "#",
  },
];

const Projects = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "40px", // 
        padding: "30px",
      }}
    >
      {projects.map((project, index) => (
        <FlipCard key={index} project={project} />
      ))}
    </Box>
  );
};

// 
const FlipCard = ({ project }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      className="flip-card"
      onClick={() => setFlipped(!flipped)}
      style={{
        perspective: "1200px",
        width: "300px", 
        height: "220px",
        margin: "20px", 
      }}
    >
      <motion.div
        className="flip-card-inner"
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          transformStyle: "preserve-3d",
          cursor: "pointer",
        }}
      >
        {/*  Lado frontal */}
        <Box
          sx={{
            background: "#00D4FF",
            padding: "20px",
            borderRadius: "12px",
            width: "100%",
            height: "100%",
            textAlign: "center",
            boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
            position: "absolute",
            backfaceVisibility: "hidden",
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
            {project.title}
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            {project.description}
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", gap: "8px", flexWrap: "wrap" }}>
            {project.tags.map((tag, i) => (
              <Box key={i} sx={{ background: "black", color: "white", padding: "5px 10px", borderRadius: "5px", fontSize: "14px" }}>
                {tag}
              </Box>
            ))}
          </Box>
        </Box>

        {/*  Lado trasero */}
        <Box
          sx={{
            background: "black",
            color: "white",
            padding: "20px",
            borderRadius: "12px",
            width: "100%",
            height: "100%",
            textAlign: "center",
            boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
            position: "absolute",
            transform: "rotateY(180deg)",
            backfaceVisibility: "hidden",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
            Más Información
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", gap: "10px", mt: 2 }}>
            <Button variant="contained" sx={{ background: "white", color: "black" }} href={project.github}>
              GITHUB
            </Button>
            <Button variant="contained" sx={{ background: "#6200EE", color: "white" }} href={project.demo}>
              DEMO
            </Button>
          </Box>
        </Box>
      </motion.div>
    </motion.div>
  );
};

export default Projects;
