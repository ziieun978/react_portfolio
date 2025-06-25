import React, { forwardRef, useEffect, useState } from "react";
import { projectData } from "../data/ProjectData";
import ProjectModal from "./ProjectModal";
import { soloProjects } from "../data/ProjectData";

const ProjectCard = forwardRef((props, ref) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [scrollY, setScrollY] = useState(0);
  
    useEffect(() => {
      const handleScroll = () => setScrollY(window.scrollY);
      window.addEventListener('scroll', handleScroll);
      return () =>
        window.removeEventListener('scroll', handleScroll)},[]);
  
      

  return (
    <section className="projectSection" id="project" ref={ref}>
      <h2> 프로젝트</h2>
      <h3>프로젝트의 세부내용을 확인할 수 있습니다.</h3>
      <div className="projectGrid">
        {projectData.map((project) => (
          <div
            key={project.id}
            className="projectCard"
            onClick={() => setSelectedProject(project)}
          >
            {/*  라벨 추가 */}
            <span className="projectLabel team">팀 프로젝트</span>

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

      <h2>개인 학습</h2>
      <h3>세부내용을 확인할 수 있습니다.</h3>
      <div className="projectGrid">
        {soloProjects.map((project) => (
          <div
            key={project.id}
            className="projectCard"
            onClick={() => setSelectedProject(project)}
          >
            {/*  라벨 추가 */}
            <span className="projectLabel solo">개인 학습</span>

            {project.thumbnail && ( <img src={project.thumbnail} alt={project.title} className="projectThumb" /> )}
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
    </section>
  );
});


export default ProjectCard;
