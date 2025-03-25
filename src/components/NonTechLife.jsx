import React from "react";
import { Box, Typography, Container, Divider } from "@mui/material";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import MovieIcon from "@mui/icons-material/Movie";
import PetsIcon from "@mui/icons-material/Pets";
import { motion } from "framer-motion";
import { Link as MuiLink } from "@mui/material";


const NonTechLife = () => {
  return (
    <Container
      maxWidth="md"
      sx={{
        color: "white",
        minHeight: "100vh",
        paddingTop: "80px",
        paddingBottom: "40px",
        textAlign: "center",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Typography variant="h3" gutterBottom>
          ¿Quién soy cuando no estoy programando? Cuando el enter no es para la siguiente línea de código:
        </Typography>
        <Divider sx={{ backgroundColor: "#6200EE", marginBottom: "30px" }} />

        <Box mb={4}>
          <SportsEsportsIcon sx={{ fontSize: 40, color: "#00D4FF" }} />
          <Typography variant="h5">Gamer apasionado</Typography>
          <Typography>
            Me encanta entrenar <strong>Pokémon</strong>, competir en <strong>League of Legends</strong> y disfrutar de juegos retro como <strong>Megaman X</strong> o <strong>Donkey Kong Country 3 </strong>*Claramente el mejor*.
          </Typography>
        </Box>

        <Box mb={4}>
          <MusicNoteIcon sx={{ fontSize: 40, color: "#00D4FF" }} />
          <Typography variant="h5">Amante de la música</Typography>
          <Typography>
            Siempre estoy escuchando algo, desde rock hasta pop. Puedes ver lo que escucho en mi 
            <MuiLink 
              href="https://open.spotify.com/user/31zzv4xj3evfrgp42vqdanyeexza?si=3032b146ad754ebb" 
              target="_blank" 
              rel="noopener noreferrer" 
              sx={{ color: "#1DB954", fontWeight: "bold", ml: 0.5 }}
            >
              perfil de Spotify
            </MuiLink>.
          </Typography>
        </Box>

        <Box mb={4}>
          <MovieIcon sx={{ fontSize: 40, color: "#00D4FF" }} />
          <Typography variant="h5">Cine y Libros</Typography>
          <Typography>
            Disfruto del terror, los SuperHeroes y el misterio. <br></br>
            ¿Ejemplos de películas? Asi en la tierra como en el infierno<br></br>
            ¿Ejemplo de cómic? Capitana Marvel<br></br>
            ¿Ejemplo de libro? Ángeles y Demonios -Dan Brown
          </Typography>
        </Box>

        <Box mb={4}>
          <PetsIcon sx={{ fontSize: 40, color: "#00D4FF" }} />
          <Typography variant="h5">Dueño de gatos (Todos saben que es al revés)</Typography>
          <Typography>
            Tengo con dos gatos (Shiva y Mojo) que hacen que cada día sea más divertido. Son parte esencial de mi vida.
          </Typography>
        </Box>
      </motion.div>
    </Container>
  );
};

export default NonTechLife;
