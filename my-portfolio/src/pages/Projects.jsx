import React from "react";
import ProjectCard from "../components/ProjectCard.jsx";
import "./Pages.css";

function Projects() {
  const projects = [
    { title: "Personal Portfolio", description: "Responsive portfolio built using React and Vite." },
    { title: "Python Project", description: "Basic automation and data processing using Python." },
    { title: "CodeQuest AI", description: "AI-driven coding interview platform with live evaluation." }
  ];

  return (
    <section id="projects" className="section">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((proj, index) => (
          <ProjectCard key={index} title={proj.title} description={proj.description} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
