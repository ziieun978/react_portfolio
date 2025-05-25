import React, { useState } from "react";
import { projectData } from "../data/ProjectData";
import ProjectModal from "./ProjectModal";

function ProjectCard() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="projectSection">
      <h2>프로젝트</h2>
      <div className="projectGrid">
        {projectData.map((project) => (
          <div
            key={project.id}
            className="projectCard"
            onClick={() => setSelectedProject(project)}
          >
            <img src={project.thumbnail} alt={project.title} className="projectThumb" />
            <h3>{project.title}</h3>
            <p>{project.shortDesc}</p>
            <div className="stackIcons">
              {project.stacks.map((icon, i) => (
                <img key={i} src={icon} alt={`stack-${i}`} className="stackIcon" />
              ))}
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}

export default ProjectCard;
