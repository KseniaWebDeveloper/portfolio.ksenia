import React from "react";
import { Box, Typography, Divider } from "@mui/material";
import { motion } from "framer-motion"; // Импортируем анимацию

const Menu = ({ setCurrentPage }) => {
  const menuItems = [
    { label: "HOME", page: "home" },
    { label: "WORK", page: "projects" },
    { label: "ABOUT ME", page: "about" },
    { label: "CONTACT", page: "contact" },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start", // Выровнено по левому краю
        justifyContent: "center",
        height: "100vh",
        padding: "20px",
        position: "fixed",
        top: 0,
        right: 0,
        backgroundColor: "white",
        width: "100%", // Занимает всю ширину
        zIndex: 999,
      }}
    >
      <Typography
        variant="h4"
        sx={{ marginBottom: "20px", fontWeight: "bold" }}
      >
        MENU
      </Typography>
      {menuItems.map((item, index) => (
        <motion.div
          key={item.label}
          initial={{ y: -50, opacity: 0 }} // Начальное состояние (выше и прозрачность)
          animate={{ y: 0, opacity: 1 }} // Конечное состояние (обычное)
          transition={{ duration: 0.5, delay: index * 0.1 }} // Анимация с задержкой
        >
          <Typography
            variant="h6"
            onClick={() => {
              setCurrentPage(item.page);
            }}
            sx={{
              color: "#ff69b4",
              cursor: "pointer",
              margin: "10px 0",
              textTransform: "uppercase", // Текст в верхнем регистре
            }}
          >
            {item.label}
          </Typography>
          {index < menuItems.length - 1 && (
            <Divider sx={{ width: "100%", bgcolor: "#ff69b4", my: 1 }} /> // Разделитель
          )}
        </motion.div>
      ))}
      {/* Добавляем ссылку на Behance */}
      <Divider sx={{ width: "100%", bgcolor: "#ff69b4", my: 1 }} />{" "}
      {/* Разделитель перед ссылкой */}
      <Typography
        variant="h6"
        component="a"
        href="https://www.behance.net/kseniagulyaeva"
        target="_blank" // Открывать в новой вкладке
        rel="noopener noreferrer" // Защита от возможных атак
        sx={{
          color: "#ff69b4",
          cursor: "pointer",
          margin: "10px 0",
          textTransform: "uppercase", // Текст в верхнем регистре
          display: "flex", // Чтобы разместить стрелку и текст рядом
          alignItems: "center",
        }}
      >
        ➜ behance
      </Typography>
    </Box>
  );
};

export default Menu;
