import React from "react";

function ProjectModal({ project, onClose }) {
  return (
    <div className="modalOverlay" onClick={onClose}>
      <div className="modalContent" onClick={(e) => e.stopPropagation()}>
        <button className="modalClose" onClick={onClose}>X</button>
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <div className="modalMeta">
          <p><strong>참여인원:</strong> {project.members}</p>
          <p><strong>기간:</strong> {project.period}</p>
          <p><strong>관련 링크:</strong> <a href={project.link} target="_blank" rel="noopener noreferrer">바로가기</a></p>
        </div>
        <ul className="modalDetails">
          {project.details.map((detail, i) => (
            <li key={i}>{detail}</li>
          ))}
        </ul>
        <div className="stackIcons">
          {project.stacks.map((icon, i) => (
            <img key={i} src={icon} alt={`stack-${i}`} className="stackIcon" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;
