import React, { useEffect, useRef } from "react";
import "./CustomCursor.css";

const CustomCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const moveCursor = (event) => {
      const { clientX, clientY } = event;
      if (cursorRef.current) {
        cursorRef.current.style.left = `${clientX}px`;
        cursorRef.current.style.top = `${clientY}px`;
      }
    };

    const enlargeCursor = () => {
      if (cursorRef.current) {
        cursorRef.current.classList.add("cursor-large");
      }
    };

    const shrinkCursor = () => {
      if (cursorRef.current) {
        cursorRef.current.classList.remove("cursor-large");
      }
    };

    window.addEventListener("mousemove", moveCursor);

    const clickableElements = document.querySelectorAll("button, a");

    if (clickableElements.length > 0) {
      clickableElements.forEach((el) => {
        el.addEventListener("mouseenter", enlargeCursor);
        el.addEventListener("mouseleave", shrinkCursor);
      });
    }

    return () => {
      window.removeEventListener("mousemove", moveCursor);

      if (clickableElements.length > 0) {
        clickableElements.forEach((el) => {
          el.removeEventListener("mouseenter", enlargeCursor);
          el.removeEventListener("mouseleave", shrinkCursor);
        });
      }
    };
  }, []);

  return <div className="custom-cursor" ref={cursorRef}></div>;
};

export default CustomCursor;
