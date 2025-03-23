import React, { useState } from "react";
import { Drawer, IconButton, List, ListItem, ListItemText, Box } from "@mui/material";
import { Menu, Home, Person, Work, Email } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (state) => () => {
    setOpen(state);
  };

  return (
    <>
    
      <IconButton
        onClick={toggleDrawer(true)}
        sx={{
          position: "absolute",
          top: "10px",
          left: "10px",
          zIndex: 100,
          color: "white",
          display: { xs: "block", md: "none" }, 
        }}
      >
        <Menu />
      </IconButton>

    
      <Drawer
        anchor="left"
        open={open}
        onClose={toggleDrawer(false)}
        sx={{
          "& .MuiDrawer-paper": {
            width: "250px",
            backgroundColor: "#111",
            color: "white",
          },
        }}
      >
        <Box
          sx={{
            width: "250px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingTop: "20px",
          }}
        >
          <List>
            <ListItem button component={Link} to="/" onClick={toggleDrawer(false)}>
              <Home sx={{ marginRight: "10px" }} />
              <ListItemText primary="Inicio" />
            </ListItem>
            <ListItem button component={Link} to="/about" onClick={toggleDrawer(false)}>
              <Person sx={{ marginRight: "10px" }} />
              <ListItemText primary="Sobre mí" />
            </ListItem>
            <ListItem button component={Link} to="/projects" onClick={toggleDrawer(false)}>
              <Work sx={{ marginRight: "10px" }} />
              <ListItemText primary="Proyectos" />
            </ListItem>
            <ListItem button component={Link} to="/contact" onClick={toggleDrawer(false)}>
              <Email sx={{ marginRight: "10px" }} />
              <ListItemText primary="Contacto" />
            </ListItem>
          </List>
        </Box>
      </Drawer>

     
      <Box
        sx={{
          width: "180px",
          height: "100vh",
          backgroundColor: "#111",
          position: "fixed",
          display: { xs: "none", md: "flex" },
          flexDirection: "column",
          alignItems: "center",
          paddingTop: "20px",
        }}
      >
        <List>
          <ListItem button component={Link} to="/">
            <Home sx={{ marginRight: "10px" }} />
            <ListItemText primary="Inicio" />
          </ListItem>
          <ListItem button component={Link} to="/about">
            <Person sx={{ marginRight: "10px" }} />
            <ListItemText primary="Sobre mí" />
          </ListItem>
          <ListItem button component={Link} to="/projects">
            <Work sx={{ marginRight: "10px" }} />
            <ListItemText primary="Proyectos" />
          </ListItem>
          <ListItem button component={Link} to="/contact">
            <Email sx={{ marginRight: "10px" }} />
            <ListItemText primary="Contacto" />
          </ListItem>
        </List>
      </Box>
    </>
  );
};

export default Sidebar;
