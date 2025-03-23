import React from 'react'
import Header from "../components/Header"
import Main from "../components/Main"
import Inst from "../components/Inst"
import Skill from "../components/Skill"
import Nav from "../components/Nav"
import Portfo from "../components/Portfo"
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
            <Nav />
            <Portfo />      
            <Contact />
        </Main>
        <Footer />
    </div>
  )
}
export default HomeView;