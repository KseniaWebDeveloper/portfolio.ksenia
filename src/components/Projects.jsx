import React, { useState } from "react";
import { Typography, Box, Divider, Paper } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const projects = [
  {
    title: "FINITY BANK - Banking App Modernization",
    description: "Banking App Modernization by Ksenia Gulyaeva",
    imgSrc: "/fb1.png",
    gallery: ["/fb1.png", "/fb2.png", "/fb3.png"],
    link: "https://www.behance.net/gallery/198736953/Banking-App-Modernization-by-LBBW",
  },
  {
    title: "Senior Connect - an app for elderly communication",
    description: "UX CASE STUDY Website&App by Ksenia Gulyaeva",
    imgSrc: "/sc1.png",
    gallery: ["/sc1.png", "/sc2.png", "/sc3.png", "/sc4.png", "/sc5.png"],
    link: "https://www.behance.net/gallery/201769317/UX-CASE-STUDY-Website-App-Senior-Connect",
  },
  {
    title: "Corporate identity for 'SPITZEN TECH'",
    description: "Corporate identity for the company by Ksenia Gulyaeva",
    imgSrc: "/sp1.png",
    gallery: ["/sp1.png", "/sp2.png", "/sp3.png"],
    link: "https://www.behance.net/gallery/201108559/Corporate-identity-for-the-company-SPITZEN-TECH",
  },
  {
    title: "UI/UX Design and Development of NFT Marketplace Website",
    description: "Website NFT MARKET",
    imgSrc: "/nft-market.png",
    gallery: ["/nft-market.png", "/sp2.png", "/sp3.png"],
    link: "https://www.behance.net/gallery/196501959/Website-NFT-MARKET",
  },
  {
    title: "Shaping the Maison Reid Personal Brand Website",
    description: "Archi/elegance: The Maison Reid Personal Brand Website",
    imgSrc: "/mr-website.png",
    gallery: ["/mr-website.png", "/sp2.png", "/sp3.png"],
    link: "https://www.behance.net/gallery/196999799/Archielegance-The-Maison-Reid-Personal-Brand-Website",
  },
];

const Projects = () => {
  const [selectedImage, setSelectedImage] = useState("");
  const [hoveredProject, setHoveredProject] = useState(null);

  const handleMouseEnter = (project) => {
    setSelectedImage(project.imgSrc);
    setHoveredProject(project.title);
  };

  const handleMouseLeave = () => {
    setSelectedImage("");
    setHoveredProject(null);
  };

  const navigateTo = (url) => {
    window.open(url, "_blank");
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px",
        fontFamily: '"NeueMachina-Regular", sans-serif',
      }}
    >
      <Box
        sx={{
          flex: 1,
          marginRight: "20px",
          transition: "opacity 0.3s",
          opacity: selectedImage ? 1 : 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {selectedImage && (
          <img
            src={selectedImage}
            alt="Selected Project"
            style={{
              borderRadius: "8px",
              width: "100%",
              height: "auto",
              maxWidth: "600px",
              maxHeight: "500px",
            }}
          />
        )}
      </Box>

      <Box sx={{ flex: 1, padding: "20px" }}>
        <Typography variant="h2" component="h1" textAlign="left" gutterBottom>
          WORK
        </Typography>
        <Divider
          sx={{ borderBottomWidth: 2, width: "100%", marginBottom: 2 }}
        />

        {projects.map((project) => (
          <Paper
            key={project.title}
            onMouseEnter={() => handleMouseEnter(project)}
            onMouseLeave={handleMouseLeave}
            onClick={() => navigateTo(project.link)}
            sx={{
              padding: "10px",
              marginBottom: "10px",
              cursor: "pointer",
              backgroundColor: "white",
              transition: "background-color 0.3s",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              paddingLeft: hoveredProject === project.title ? "20px" : "10px",
              position: "relative",
              fontFamily: '"NeueMachina-Regular", sans-serif',
            }}
          >
            {hoveredProject === project.title && (
              <ArrowForwardIcon
                sx={{
                  marginRight: "10px",
                  transition: "transform 0.3s",
                  transform:
                    hoveredProject === project.title
                      ? "translateX(5px)"
                      : "translateX(0)",
                  alignSelf: "center",
                }}
              />
            )}
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                transition: "margin-left 0.3s",
                marginLeft: hoveredProject === project.title ? "5px" : "0px",
                display: "flex",
                alignItems: "center",
                fontFamily: '"NeueMachina-Regular", sans-serif',
              }}
            >
              {project.title}
            </Typography>
            <Divider />
          </Paper>
        ))}
      </Box>
    </Box>
  );
};

export default Projects;
