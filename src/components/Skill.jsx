import React, { forwardRef, useState } from 'react';
import { skillCategories, skillIcons } from '../data/SkillData';

const allSkills = Object.values(skillIcons).flat();

const skill = forwardRef((props, ref) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [selectedCategory, setSelectedCategory] = useState("all");

  // 버튼 클릭 시 카테고리 토글
  const toggleCategory = (categoryId) => {
    setSelectedCategory(selectedCategory === categoryId ? "all" : categoryId);
  };

  // 모든 기술 렌더링 + 보여줄 카테고리 설정
  const isVisible = (skillId) => {
    if (selectedCategory === "all") return true;
    return skillIcons[selectedCategory].some(skill => skill.id === skillId);
  };

  return (
    <section className='skillSection' ref={ref} id='skill'>
      <h2 className='section_title'>기술스킬</h2>
      <p className='section_subtitle'>사용할 수 있는 기술목록입니다.</p>

      <div className='category_tabs'>
        {skillCategories.map((category) => (
          <button
            key={category.id}
            className={`tab ${selectedCategory === category.id ? "active" : ""}`}
            onClick={() => toggleCategory(category.id)}
            >
              {category.name}
          </button>
        ))}
      </div>

      <div className='skill_grid'>
        {allSkills.map((skill) => (
          <div 
            key={skill.id} 
            className={`skill_card ${isVisible(skill.id) ? 'visible' : 'hidden'}`}
          > 
            <img 
              src={skill.src} 
              alt={skill.title || skill.alt} 
              title={skill.title || skill.alt} 
            />
          </div>
        ))}
      </div>
    </section>
  );
});

export default skill;