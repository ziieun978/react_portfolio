import React, { useEffect } from 'react';

const ProjectModal = ({ onClose, project }) => {
  const {
    title,
    description,
    stacks,
    period,
    members,
    link,
    github,
    details,
    images,
  } = project;

  // 스크롤 잠금
    useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  if (!project) return null;


  return (
    <div className="modalOverlay" onClick={onClose}>
      <div className="modalContent" onClick={(e) => e.stopPropagation()}>
        <button className="modalClose" onClick={onClose}>&times;</button>

        {/* 헤더 영역 */}
        <section className="modalHeader">
          <h3 className="modalTitle">{title}</h3>
          <h4>프로젝트 설명</h4>
          <p className="projectDesc">{description}</p>
        </section>

        {/* 스택 아이콘 / 텍스트 */}
        <h4>기술스택</h4>
        {stacks?.length > 0 && (
          <section className="techStacks">
            {stacks.map((stack, index) =>
              typeof stack === 'string' && stack.startsWith('/') ? (
                <img key={index} src={stack} alt={`stack-${index}`} className="stackIcon" />
              ) : (
                <span className="stackText" key={index}>{stack}</span>
              )
            )}
          </section>
        )}

        {/* 링크 및 정보 */}
        <section className="projectLinks">
          <div><strong>📅 기간:</strong> {period}</div>
          <div><strong>👥 인원:</strong> {members}</div>
          <div className="linkButtons">
            {link && (
              <a href={link} target="_blank" rel="noopener noreferrer" className="linkButton">
                🔗 사이트 바로가기
              </a>
            )}
            {github && (
              <a href={github} target="_blank" rel="noopener noreferrer" className="linkButton">
                💻 GitHub 저장소
              </a>
            )}
          </div>
        </section>

        {/* 이미지 섹션 */}
        {images && images.length > 0 && (
          <section className="exampleImages">
            {images.length === 1 ? (
              <img src={images[0]} alt="example" className="exampleImage fullImage" />
            ) : (
              <div className="responsiveImages">
                {images.map((imgSrc, i) => (
                  <img key={i} src={imgSrc} alt={`example-${i}`} className="exampleImage halfImage" />
                ))}
              </div>
            )}
          </section>
        )}
          {/* 상세 내용 */}
          <section className="detailSection">
            <h3 className="sectionTitle">상세 내용</h3>
            <ol className="detailList">
              {details.map((item, index) =>
                typeof item === 'string' ? (
                  <li key={index}>{item}</li>
                ) : (
                  <li key={index}>
                    <strong>{item.title}</strong>
                    <ul>
                      {item.subItems.map((sub, subIdx) => (
                        <li key={subIdx}>{sub}</li>
                      ))}
                    </ul>
                  </li>
                )
              )}
            </ol>
          </section>
      </div>
    </div>
  );
};

export default ProjectModal;