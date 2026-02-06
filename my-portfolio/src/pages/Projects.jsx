// src/pages/Projects.jsx
import React from "react";

function Projects() {
  return (
    <div style={{ padding: "50px" }}>
      <h2>Projects</h2>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        <div style={{ border: "1px solid #ddd", padding: "20px", borderRadius: "10px" }}>
          <h3>Personal Portfolio</h3>
          <p>Responsive portfolio built using React and Vite.</p>
        </div>
        <div style={{ border: "1px solid #ddd", padding: "20px", borderRadius: "10px" }}>
          <h3>Python Project</h3>
          <p>Automation and data processing using Python.</p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
