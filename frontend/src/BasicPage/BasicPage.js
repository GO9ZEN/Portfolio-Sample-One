import React from 'react';
import Header from './Header/Header';
import HeroSection from './HeroSection/HeroSection';
import Skills from './Skills/Skills';
import ScrollUpButton from "react-scroll-up-button";
import ScrollUpButtonCustom from './ScrollUpButtonCustom/ScrollUpButtonCustom';
import Services from './Services/Services';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

import "./BasicPage.css";

function BasicPage() {
  return (
    <div>
        <div>
            <ScrollUpButton
            ContainerClassName="AnyClassForContainer"
            TransitionClassName="AnyClassForTransition"
            AnimationDuration={1000}
            >
                <ScrollUpButtonCustom />
            </ScrollUpButton>
        </div>

        <Header />
        <HeroSection />
        <Skills />
        <Services />
        <Projects />
        <Contact />
        <Footer />
    </div>
  )
}

export default BasicPage;