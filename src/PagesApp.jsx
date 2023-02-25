import React from 'react'
import Footer from './components/Footer'
import AboutUs from './pages/aboutUs/AboutUs'
import Blog from './pages/blog/Blog'
import Contact from './pages/contact/Contact'
import Cost from './pages/cost/Cost'
import MainTitle from './pages/mainTitle/MainTitle'
import Services from './pages/services/Services'
import Team from './pages/team/Team';
import './css/Main.css'

function PagesApp() {
  return (
    <div className='main'>
        <MainTitle />
        <AboutUs />
        <Services />
        <Blog />
        <Team />
        <Cost />
        <Contact />
        <Footer />
    </div>
  )
}

export default PagesApp