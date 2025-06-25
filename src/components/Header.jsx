import React, { useEffect, useState } from 'react'

const Header = ({onInstClick, }) => {
  const [activeTab,setActiveTab] = useState('inst');
  const handleClick = (section, callback) => {
    setActiveTab(section);
    callback();
  }

  useEffect(() => {
    const sectionIds = ['inst', 'contact', 'project', 'skill'];

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const offsets = sectionIds.map(id => {
        const el = document.getElementById(id);
        return {
          id,
          offset: el ? el.offsetTop - window.innerHeight / 3 : 0,
        };
      });

      const current = offsets
        .filter(({ offset }) => scrollY >= offset)
        .pop();

      if (current && current.id !== activeTab) {
        setActiveTab(current.id);
      }
    };


    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeTab]);

  const scrollToId = (id) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
};

  return (
    <header id='header'>
      <div className='header_wrapper'>
        <div className='header_logo'>
          <a href='/'>PortFolio</a>
        </div>
        <nav className='header_nav'>
          <ul>
            <li><button onClick={() => handleClick('inst', () => scrollToId('inst'))}>inst</button></li>
            <li><button onClick={() => scrollToId('skill')}>skill</button></li>
            <li><button onClick={() => scrollToId('project')}>project</button></li>
            <li><button onClick={() => scrollToId('contact')}>contact</button></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header