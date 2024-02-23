import React from 'react';

import "./ProjectCard.css";

function ProjectCard({ projectData }) {
  return (
    <div className="project-card">
      <img src={projectData.projectImage} alt={projectData.projectName} />

      <div className="other-details">
        <span>{projectData.projectName}</span>

        <div className="git-links">
            <a href={projectData.projectLinkGit} target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-square-github"></i></a>
            <a href={projectData.projectLinkPage} target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard;
