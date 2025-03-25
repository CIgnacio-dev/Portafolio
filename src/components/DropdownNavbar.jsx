import React, { useState } from "react";
import {
  IconButton,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@mui/material";
import {
  KeyboardArrowDown as ArrowDown,
  KeyboardArrowUp as ArrowUp,
  Home,
  Person,
  Work,
  Email
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const menuItems = [
  { to: "/", label: "Inicio", icon: <Home /> },
  { to: "/about", label: "Sobre mí", icon: <Person /> },
  { to: "/projects", label: "Proyectos", icon: <Work /> },
  { to: "/contact", label: "Contacto", icon: <Email /> }
];

const DropdownMenu = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen((prev) => !prev);
  const close = () => setOpen(false);

  return (
    <>
   
      <Box
        sx={{
          position: "fixed",
          top: 10,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 3000
        }}
      >
        <IconButton
          onClick={toggle}
          sx={{
            color: "white",
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.1)" }
          }}
        >
          {open ? <ArrowUp /> : <ArrowDown />}
        </IconButton>
      </Box>


      {open && (
        <Box
          onClick={close}
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100vh",
            background: "rgba(0, 0, 0, 0.8)",
            backdropFilter: "blur(6px)",
            zIndex: 2000,
            display: "flex",
            justifyContent: "center",
            pt: 10
          }}
        >
          <List sx={{ textAlign: "center", width: "100%", maxWidth: 300 }}>
            {menuItems.map((item) => (
              <ListItem
                key={item.to}
                button
                component={Link}
                to={item.to}
                onClick={close}
                sx={{
                  color: "white",
                  justifyContent: "center",
                  gap: 1,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    color: "#9f4dff",
                    transform: "scale(1.05)"
                  }
                }}
              >
                <ListItemIcon sx={{ color: "white", minWidth: 36 }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{ fontSize: "1.2rem" }}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      )}
    </>
  );
};

export default DropdownMenu;
