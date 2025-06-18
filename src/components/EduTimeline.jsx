import React from "react";
import { educationTimeline } from "../data/EduTimelineData";


const EduTimeline = () => {
  return (
    <section className="education_section">
      <h2>학력 및 교육</h2>
      <div className="edu_list">
        {educationTimeline.map((item) => (
          <div key={item.id} className="edu_item">
            <div className="edu_period">{item.year}</div>
            <div className="edu_info">
              <h3>{item.title}</h3>
              {item.subtitle && <h4>{item.subtitle}</h4>}

              {item.stacks && (
                <div className="edu_tags">
                  {item.stacks.map((tag, i) => (
                    <span className="edu_badge" key={i}>{tag}</span>
                  ))}
                </div>
              )}

              {item.details && (
                <ul className="edu_details">
                  {item.details.map((line, i) => (
                    <li key={i}>{line}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EduTimeline;
