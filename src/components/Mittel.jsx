import React from "react";

function Mittel({ navigateTo }) {
  return (
    <div className="note">
      <h2>
        Hey, my name is Ksenia Gulyaeva! <br />
      </h2>
      <p>I am a graphic designer, UI/UX designer & front-end web developer!</p>
      <div className="button-container">
        <button onClick={() => navigateTo("projects")}>see my projects</button>
        <button
          onClick={() => navigateTo("about")}
          className="button-with-icon"
        >
          more about me
        </button>
        <button onClick={() => navigateTo("contact")}>contact me</button>
      </div>
    </div>
  );
}

export default Mittel;
