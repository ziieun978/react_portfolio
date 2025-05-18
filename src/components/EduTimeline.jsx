import { educationTimeline } from "../data/EduTimelineData";

const EduTimeline = () => {
  return (
    <section id="education" className="timeline_section">
      <div className="section_wrapper">
        <h2 className="section_title">📚 학력 및 교육</h2>
        <ul className="timeline_list">
          {educationTimeline.map(item => (
            <li className="timeline_item" key={item.id}>
              <div className="timeline_year">{item.year}</div>
              <div className="timeline_content">
                <h3>{item.title}</h3>
                <p className="timeline_subtitle">{item.subtitle}</p>
                <div className="timeline_stacks">
                  {item.stacks.map((stack, index) => (
                    <span key={index} className={`stack_icon ${stack}`}>{stack}</span>
                  ))}
                </div>
                <ul className="timeline_details">
                  {item.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
export default EduTimeline;
