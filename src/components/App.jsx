import React, { useState } from "react";
import Mittel from "./Mittel";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Projects from "./Projects";
import CustomCursor from "./CustomCursor";
import Menu from "./Menu";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { IconButton, Box } from "@mui/material";
import Footer from "./Footer";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigateTo = (page) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <IconButton
        onClick={toggleMenu}
        sx={{
          position: "fixed",
          top: 20,
          right: 40,
          zIndex: 1000,
          bgcolor: "white",
          borderRadius: "8px",
          width: 56,
          height: 56,
          transition: "transform 0.2s",
          "&:hover": {
            transform: "scale(1.1)",
          },
        }}
      >
        {isMenuOpen ? (
          <MenuOpenIcon
            sx={{
              fontSize: 40,
              color: "#ff69b4",
              transition: "color 0.2s",
            }}
          />
        ) : (
          <MenuIcon
            sx={{
              fontSize: 40,
              color: "#ff69b4",
              transition: "color 0.2s",
              "&:hover": {
                color: "#ff1493",
              },
            }}
          />
        )}
      </IconButton>
      <Box
        sx={{
          position: "fixed",
          top: 0,
          right: 0,
          width: "33%",
          height: "100%",
          backgroundColor: "white",
          zIndex: 998,
          transition: "transform 0.3s ease",
          transform: isMenuOpen ? "translateX(0)" : "translateX(100%)",
        }}
      >
        {isMenuOpen && <Menu setCurrentPage={navigateTo} />}
      </Box>

      <Box sx={{ flex: 1, paddingBottom: "60px" }}>
        {currentPage === "home" && <Mittel navigateTo={navigateTo} />}
        {currentPage === "about" && <AboutMe />}
        {currentPage === "contact" && <Contact />}
        {currentPage === "projects" && <Projects navigateTo={navigateTo} />}
        <CustomCursor />
      </Box>
      <Footer />
    </Box>
  );
}

export default App;
