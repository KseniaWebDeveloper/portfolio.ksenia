import React from "react";
import { Card, CardContent, Typography, Link } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { motion } from "framer-motion";

const theme = createTheme({
  typography: {
    body1: {
      marginBottom: 0,
    },
  },
});

function Contact() {
  const fadeInUp = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          margin: 0,
        }}
      >
        <Card
          style={{
            maxWidth: 500,
            borderRadius: 8,
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            padding: 20,
            textAlign: "center",
          }}
        >
          <CardContent style={{ paddingBottom: "16px" }}>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Typography
                variant="h3"
                component="h1"
                style={{
                  fontFamily: "NeueMachina-Regular, sans-serif",
                  marginBottom: "20px",
                }}
              >
                Contact Me
              </Typography>
            </motion.div>

            {[
              {
                text: "my email: ",
                link: "mailto:kseniagulyaevaproject@gmail.com",
                linkText: "kseniagulyaevaproject@gmail.com",
              },
              {
                text: "my LinkedIn: ",
                link: "https://www.linkedin.com/in/ksenia-gulyaeva-projects-web-development/",
                linkText: "ksenia-gulyaeva-web",
              },
              {
                text: "my Xing: ",
                link: "https://www.xing.com/profile/Ksenia_Gulyaeva/",
                linkText: "ksenia_gulyaeva",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
              >
                <Typography
                  variant="body1"
                  style={{
                    fontFamily: "NeueMachina-Regular, sans-serif",
                    marginBottom: "10px",
                    fontSize: "1.2rem",
                  }}
                >
                  {item.text}
                  <Link
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    underline="hover"
                    style={{ color: "#ff69b4", fontWeight: "bold" }}
                  >
                    {item.linkText}
                  </Link>
                </Typography>
              </motion.div>
            ))}
          </CardContent>
        </Card>
      </div>
    </ThemeProvider>
  );
}

export default Contact;
