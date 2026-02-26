import React from 'react'
import { Helmet } from 'react-helmet'
// 1. IMPORT REACT-REVEAL DI SINI
import Fade from 'react-reveal/Fade'; 

import { Navbar, Footer, Landing, About, Skills, Experience, Contacts, Projects} from '../../components'
import { headerData } from '../../data/headerData'

function Main() {
    return (
        <div>
            <Helmet>
                <title>{headerData.name} - Porfolio</title>
            </Helmet>

            <Navbar />        
            
            {/* Landing page biarkan tampil langsung tanpa delay */}
            <Landing />

            {/* 2. BUNGKUS SETIAP SECTION DENGAN FADE BOTTOM */}
            <Fade bottom distance="10%" duration={1000}>
                <About />
            </Fade>

            <Fade bottom distance="10%" duration={1000}>
                <Skills />
            </Fade>

            <Fade bottom distance="10%" duration={1000}>
                <Experience />
            </Fade>

            <Fade bottom distance="10%" duration={1000}>
                <Projects />
            </Fade>

            <Fade bottom distance="10%" duration={1000}>
                <Contacts />
            </Fade>

            <Footer />
        </div>
    )
}

export default Main