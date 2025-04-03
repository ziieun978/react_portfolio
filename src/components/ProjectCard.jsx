import React, { useState } from 'react'
import CardItem from './CardItem';
import ProjectModal from'./ProjectModal';

const projectData = [
  {id:1, src:"", title:"프로젝트1", content:"content1"},
  {id:2, src:"", title:"프로젝트1", content:"content1"},
  {id:3, src:"", title:"프로젝트1", content:"content1"},
  {id:4, src:"", title:"프로젝트1", content:"content1"},
  {id:5, src:"", title:"프로젝트1", content:"content1"},
  {id:6, src:"", title:"프로젝트1", content:"content1"},
]

function ProjectCard() {
  const [selectedProject, setSelectedProject] = useState(null);
  return (
    <div className="card_view">
      <div className="card_wrapper">
        <h2>🍳 프로젝트</h2>
        <h1>프로젝트를 확인해보세요</h1>
        <div className="card_items">
          {projectData.map((project) => (
            <CardItem
              key={project.id}
              src={project.src}
              title={project.title}
              content={project.content}
              onClick={() => setSelectedProject(project)} // 카드 클릭 시 모달 열기
            />
          ))}
        </div>
      </div>

      {/* 모달 표시 조건 */}
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