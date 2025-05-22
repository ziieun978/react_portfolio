import React from 'react';

const ProjectModal = ({ onClose }) => {
  return (
    <div className="modalOverlay">
      <div className="modalContent">
        <button className="modalClose" onClick={onClose}>
          &times;
        </button>

        <p className="projectDesc">
          나의 포트폴리오와 사이트 제작 프로젝트<br />
          데이터를 분리하여 관리하며 빌드 시점에 렌더링하는 SSG 웹 제작
        </p>

        <div className="techStacks">
          <span className="stack">Next.js</span>
          <span className="stack">TypeScript</span>
          <span className="stack">Tailwind CSS</span>
          <span className="stack">Vercel</span>
        </div>


        <div className="projectLinks">
          <div><strong>기간</strong> 2023.12 ~ </div>
          <div><strong>인원</strong> 1명</div>
          <a href="https://your-site.com" target="_blank" rel="noopener noreferrer">
            🔗 사이트 바로가기
          </a>
          <a href="https://github.com/your-repo" target="_blank" rel="noopener noreferrer">
            💻 GitHub 저장소
          </a>
        </div>
                <div className="detailSection">
          <h4>상세 내용</h4>
          <ol>
            <li>
              <strong>Next.js의 app router 활용한 SSG 웹 제작</strong>
              <ul>
                <li>Server Component로 SSG 방식의 웹 제작</li>
                <li>Intercept Routes 기능으로 공유형 주소를 갖는 Modal 페이지 구현</li>
              </ul>
              <div className="exampleImages">
                <img
                  src="/images/android.png"
                  alt="Vercel 배포 예시"
                  className="exampleImage"
                />
                <div className="responsiveImages">
                  <img
                    src="/images/responsive-light.png"
                    alt="반응형 라이트모드 예시"
                    className="exampleImage"
                  />
                  <img
                    src="/images/responsive-dark.png"
                    alt="반응형 다크모드 예시"
                    className="exampleImage"
                  />
                </div>
              </div>
            </li>
            <li>
              <strong>Vercel 이용하여 배포</strong>
              <ul>
                <li>Vercel PostgreSQL 연결, 데이터 분리하여 관리</li>
                <li>Prisma를 사용하여 DB 클라이언트 연동, 데이터 스키마 맞춰 타입 생성</li>
              </ul>
            </li>
            <li>
              <strong>Tailwind CSS 사용</strong>
              <ul>
                <li>다크모드 대응</li>
                <li>반응형 대응 (375 / 640 / 768px ~)</li>
              </ul>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
