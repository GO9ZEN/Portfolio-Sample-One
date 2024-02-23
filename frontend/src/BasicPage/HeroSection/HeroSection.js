import React, { useCallback, useEffect, useState } from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Typical from 'react-typical';
import styled from "styled-components";
import { useDispatch, useSelector } from 'react-redux'
import { detailsProfile } from '../../actions/profileActions';
import Message from '../../components/Message';
import Loader from "../../components/Loader";

import "./HeroSection.css";

export const AboutParastyleCss = styled.nav`
  font-size: 20px;
  color: #a8a8a8;

  @media all and (max-width: 1200px) {
    font-size: 18px;
  }

  @media all and (max-width: 1024px) {
    font-size: 16px;
  }

  @media all and (max-width: 768px) {
    font-size: 14px;
  }

  @media all and (max-width: 480px) {
    font-size: 12px;
  }

  @media all and (max-width: 320px) {
    font-size: 10px;
  }
`

function HeroSection() {
    const dispacth = useDispatch()

    const profileDetails = useSelector((state) => state.profileDetails)
    const { loading, error, profileInformations } = profileDetails 

    useEffect(() => {
        dispacth(detailsProfile())
    }, [dispacth])

  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        await console.log(container);
    }, []);

    // const [responsiveShowMenu, setResponsiveShowMenu] = useState(false);
    // const showResponsiveShowMenu = () => setResponsiveShowMenu(!responsiveShowMenu);

    const [showMore, setShowMore] = useState(true);
    const showMoreButtonResponsive = () => {
        setShowMore(!showMore);
    }

    // function viewMoreAndButton() {
        // viewMoreButtonResponsiveFunction();
        // showResponsiveShowMenu();
    //   }

  return (
    <div>
        {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message> : 
            <div>
                {profileInformations?.map((profileInformation) => (
                    <div className="hero-section" id="home">
                        <Particles
                            className="particles"
                            id="tsparticles"
                            init={particlesInit}
                            loaded={particlesLoaded}
                            options={{
                                fullScreen: false,
                                fpsLimit: 120,
                                interactivity: {
                                    events: {
                                        onClick: {
                                            enable: true,
                                            // mode: "push",
                                        },
                                        onHover: {
                                            enable: true,
                                            // mode: "repulse",
                                        },
                                        resize: true,
                                    },
                                    modes: {
                                        push: {
                                            quantity: 4,
                                        },
                                        repulse: {
                                            distance: 200,
                                            duration: 0.4,
                                        },
                                    },
                                },
                                particles: {
                                    color: {
                                        value: "#ffffff",
                                    },
                                    links: {
                                        color: "#ffffff",
                                        distance: 150,
                                        enable: true,
                                        opacity: 0.5,
                                        width: 1,
                                    },
                                    collisions: {
                                        enable: true,
                                    },
                                    move: {
                                        directions: "none",
                                        enable: true,
                                        outModes: {
                                            default: "bounce",
                                        },
                                        random: false,
                                        speed: 2,
                                        straight: false,
                                    },
                                    number: {
                                        density: {
                                            enable: true,
                                            area: 800,
                                        },
                                        value: 80,
                                    },
                                    opacity: {
                                        value: 0.5,
                                    },
                                    shape: {
                                        type: "circle",
                                    },
                                    size: {
                                        value: { min: 1, max: 5 },
                                    },
                                },
                                detectRetina: true,
                            }}
                        />
        
                        <div className="my-data">
                            <div className="profile-picture">
                                <img src={profileInformation.profilePicture} alt="" />
                            </div>
        
                            <div className="data-header">
                                <span>Hi, I'm </span>
                                <span className="data-header-name">
                                    <Typical
                                        className="data-header-writer"
                                        steps={[profileInformation.firstName, 2000, profileInformation.firstLastName, 4000]}
                                        loop={Infinity}
                                        wrapper="b"
                                    />
                                </span>
                            </div>
        
                            <div className="data-carrier">
                                <span>{profileInformation.jobRole}</span>
                            </div>
        
                            <div className="data-description">
                                <AboutParastyleCss className={showMore ? 'about-para-p' : ''}>
                                    <span>{profileInformation.description}</span>
                                </AboutParastyleCss>
        
                                <span className="show-more-button" onClick={showMoreButtonResponsive}>{showMore ? 'Read More' : 'Read Less'}</span>
                            </div>
        
        
                            <div className="social-links">
                                <a href={profileInformation.linkLinkedIn} target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-linkedin"></i></a>
                                <a href={profileInformation.linkGithub} target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-square-github"></i></a>
                                <a href={profileInformation.linkYoutube} target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-square-youtube"></i></a>
                            </div>
        
                            <a href={profileInformation.resume} target="_blank" rel="noopener noreferrer"><button className="download-cv">Download CV</button></a>
                        </div>
                    </div>
                ))} 
            </div>
        }
    </div>
  );
}

export default HeroSection;