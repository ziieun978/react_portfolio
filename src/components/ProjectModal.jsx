import React from "react";

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null; // 프로젝트 데이터가 없으면 모달을 렌더링하지 않음

  return (
    <div className="modalOverlay" onClick={onClose}>
      <div className="modalContent" onClick={(e) => e.stopPropagation()}>
        <button className="closeBtn" onClick={onClose}>✖</button>
        <h2>{project.title}</h2>
        <img className="modalImage" src={project.src} alt={project.title} loading="lazy" />
        <p>{project.content}</p>
      </div>
    </div>
  );
};

export default ProjectModal;