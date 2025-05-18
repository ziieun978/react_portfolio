import React from "react";
import { educationTimeline } from "../data/EduTimelineData";
import { FaGraduationCap } from "react-icons/fa";


const EduTimeline = () => {
  return (
    <section className="education_section">
      <div className="timeline_container">
        {educationTimeline.map((item, index) => (
          <div
            key={item.id}
            className={`timeline_item ${index % 2 === 0 ? "left" : "right"}`}
          >
            <div className="timeline_icon" title="졸업 아이콘">
              <FaGraduationCap />
            </div>
            <div className="timeline_card" title={item.title}>
              <p className="period">{item.period}</p>
              <h3 className="title">{item.title}</h3>
              <h4 className="subtitle">{item.subtitle}</h4>

              {item.tags && (
                <div className="tags">
                  {item.tags.map((tag, idx) => (
                    <span key={idx} className="badge">
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              <hr className="divider" />

              {item.details && (
                <ul className="details">
                  {item.details.map((line, idx) => (
                    <li key={idx}>{line}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
        <div className="timeline_line" />
      </div>
    </section>
  );
};

export default EduTimeline;
