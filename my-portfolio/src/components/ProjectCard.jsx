import React from "react";
import "./ProjectCard.css";

function ProjectCard({ title, description, tech, github }) {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p className="project-desc">{description}</p>
      <p className="project-tech">{tech}</p>

      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className="github-btn"
      >
        View on GitHub
      </a>
    </div>
  );
}

export default ProjectCard;
