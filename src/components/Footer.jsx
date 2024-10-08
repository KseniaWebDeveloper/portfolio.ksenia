import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <p>Designed and coded by Ksenia Gulyaeva ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
