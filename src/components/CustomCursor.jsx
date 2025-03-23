import React, { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  // Mover el cursor personalizado con el mouse
  useEffect(() => {
    const addEventListeners = () => {
      document.addEventListener("mousemove", onMouseMove);
      document.querySelectorAll("button, a, .hover-target").forEach((el) => {
        el.addEventListener("mouseover", () => setHovering(true));
        el.addEventListener("mouseout", () => setHovering(false));
      });
    };

    const removeEventListeners = () => {
      document.removeEventListener("mousemove", onMouseMove);
    };

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    addEventListeners();
    return () => removeEventListeners();
  }, []);

  // Estilos dinámicos para el cursor
  const cursorStyle = {
    position: "fixed",
    top: position.y,
    left: position.x,
    width: hovering ? "40px" : "20px",
    height: hovering ? "40px" : "20px",
    borderRadius: "50%",
    backgroundColor: hovering ? "rgba(255, 255, 255, 0.3)" : "rgba(3, 218, 198, 0.5)", // cambia de color al hacer hover
    pointerEvents: "none",
    transform: "translate(-50%, -50%)",
    transition: "width 0.2s ease, height 0.2s ease, background-color 0.2s ease",
    zIndex: 9999,
    mixBlendMode: "difference", 
  };

  return <div style={cursorStyle}></div>;
};

export default CustomCursor;
