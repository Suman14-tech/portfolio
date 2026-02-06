import React from "react";
import ProjectCard from "../components/ProjectCard.jsx";
import "./Pages.css";

function Projects() {
  const projects = [
    {
      title: "Personal Portfolio",
      description: "Responsive portfolio built using React and Vite.",
      tech: "React • Vite • CSS",
      github: "https://github.com/Suman14-tech/portfolio"
    },
    {
      title: "Python Project",
      description: "Basic automation and data processing using Python.",
      tech: "Python • Pandas",
      github: "https://github.com/Suman14-tech"
    },
    {
      title: "CodeQuest AI",
      description: "AI-driven coding interview platform with live evaluation.",
      tech: "React • Flask • SQLite",
      github: "https://github.com/Suman14-tech"
    }
  ];

  return (
    <section id="projects" className="section">
      <h2 className="section-title">Projects</h2>

      <div className="projects-grid">
        {projects.map((proj, index) => (
          <ProjectCard
            key={index}
            title={proj.title}
            description={proj.description}
            tech={proj.tech}
            github={proj.github}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
