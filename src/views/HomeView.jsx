import React, { useRef } from 'react'
import Header from "../components/Header"
import Main from "../components/Main"
import Inst from "../components/Inst"
import Skill from "../components/Skill"
import Edu from "../components/EduTimeline"
import Portfo from "../components/ProjectCard"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

// rafce
const HomeView = () => {
  const handleInstScroll = () => {
    const el = document.getElementById('inst');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
        <Header
        onInstClick={handleInstScroll}
        />
        <Main>
            <Inst/>
            <Skill/>
            <Portfo/>      
            <Edu />
            <Contact/>
        </Main>
        <Footer />
    </div>
  )
}
export default HomeView;