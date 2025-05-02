import React, { useState } from "react";
import ProjectModal from "./ProjectModal";
import { projectData } from "../data/ProjectData";



function ProjectCard() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="card_view">
        <div className="card_wrapper">
            <h2>🍳 프로젝트</h2>
            <h1>프로젝트를 확인해보세요</h1>
            
            <div className="projectGrid"> {/* ✅ 그리드 배치 */}
            {projectData.map((project) => (
                <div
                key={project.id}
                className="projectCard"
                onClick={() => setSelectedProject(project)} // ✅ 클릭 시 모달
                >
                <img src={project.src} alt={project.title} className="cardImage" />
                <h3>{project.title}</h3>
                <p>{project.content}</p>
                <div className="stackIcons">
                    {project.stacks.map((icon, i) => (
                    <img key={i} src={icon} alt={`stack-${i}`} className="stackIcon" />
                    ))}
                </div>
                </div>
            ))}
            </div>
        </div>

        {/* 모달 */}
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
