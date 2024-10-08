import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        padding: "20px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          width: "100%",
          maxWidth: "1200px",
        }}
      >
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <img
            src="./ksenia about.jpg"
            alt="Ksenia Gulyaeva"
            style={{
              borderRadius: "16px",
              maxWidth: "400px",
              height: "auto",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              marginRight: "10px",
            }}
          />
        </motion.div>

        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          style={{
            flex: 1,
            textAlign: "left",
            backgroundColor: "white",
            borderRadius: "8px",
            padding: "20px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            marginLeft: "5px",
          }}
        >
          <Typography
            variant="h1"
            component="h1"
            sx={{
              textDecoration: "underline",
              fontSize: { xs: "2rem", md: "2.5rem" },
              marginBottom: "20px",
              fontFamily: "NeueMachina-Regular, sans-serif",
            }}
          >
            About Me
          </Typography>
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontSize: { xs: "1.2rem", md: "1.5rem" },
              fontFamily: "NeueMachina-Regular, sans-serif",
              marginBottom: "20px",
              lineHeight: 1.5,
              maxWidth: "100%",
            }}
          >
            Hi, I’m Ksenia Gulyaeva. <br />
            I’m a graphic designer, UX/UI designer, and front-end web developer
            based in Germany. <br /> I have a passion for urban planning and
            hold a master’s degree in architecture. <br />
            I’m always eager to explore new technologies and delve into creative
            coding.
          </Typography>
          <Box sx={{ marginTop: "20px" }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#ff69b4",
                color: "white",
                "&:hover": {
                  backgroundColor: "#ff1493",
                },
              }}
              onClick={() =>
                (window.location.href =
                  "https://drive.google.com/file/d/14AREcVql5ADQTpjXrDe2_7IAp42rLI9u/view?usp=sharing")
              }
            >
              resume
            </Button>
          </Box>
        </motion.div>
      </Box>
    </Box>
  );
};

export default AboutMe;
