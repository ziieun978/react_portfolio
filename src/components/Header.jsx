import React from 'react'

const HeaderNav = [
  {
    title: "inst",
    url: "#inst"
  },
  {
    title: "skill",
    url: "#skill"
  },
  {
    title: "project",
    url: "#project"
  },
  {
    title: "contact",
    url: "contact"
  
  }
];

const Header = () => {
  return (
    <header id='header'>
      <div className='header_wrapper'>
        <div className='header_logo'>
          <a href='/'>PortFolio</a>
        </div>
        <nav className='header_nav'>
          <ul>
            <li><a href='#inst'>inst</a></li>
            <li><a href='#skill'>skill</a></li>
            <li><a href='#project'>project</a></li>
            <li><a href='#contact'>contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header