import React from 'react'
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
  return (
    <div>
        <Header />
        <Main>
            <Inst />
            <Skill />
            <Edu />
            <Portfo />      
            <Contact />
        </Main>
        <Footer />
    </div>
  )
}
export default HomeView;