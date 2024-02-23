import React, { useEffect } from 'react';
// import profileInformations from '../Data/profile';
import { Link } from "react-scroll";
import FooterPart from "./FooterPart/FooterPart";
import { Link as Routerlink } from 'react-router-dom';
// import axios from 'axios';
import Message from '../../components/Message';
import Loader from "../../components/Loader";

import "./Footer.css";
import { useDispatch, useSelector } from 'react-redux';
import { detailsProfile } from '../../actions/profileActions';

function Footer() {
    const dispacth = useDispatch()

    const profileDetails = useSelector((state) => state.profileDetails)
    const { loading, error, profileInformations } = profileDetails 

    useEffect(() => {
        dispacth(detailsProfile())
    }, [dispacth])

  return (
    <footer>
        {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message> : 
        <div className="footer">
            {profileInformations?.map((profileInformation) => (
                <div className="footer-part">
                    <div className="sign-and-info">
                        <div className="sign-and-info-name">
                            <h4>{profileInformation.firstLastName}</h4>
                            <h5>{profileInformation.jobRole}</h5>
                        </div>

                        <div className="sign-and-info-anchor">
                            <a href={profileInformation.linkLinkedIn} target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-linkedin"></i></a>
                            <a href={profileInformation.linkGithub} target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-square-github"></i></a>
                            <a href={profileInformation.linkYoutube} target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-square-youtube"></i></a>
                        </div>

                        <Routerlink to='/sign-in' style={{"textDecoration": "none"}}>
                            <button type="submit">Sign in</button>
                        </Routerlink>
                    </div>

                    <div className="quick-links">
                        <h4>Quick links</h4>

                        <div className="quick-links-part">
                            <div>
                                <Link to="home" spy={true} smooth={true} offset={-100} duration={500}>Home</Link>
                            </div>

                            <div>
                                <Link to="skills" spy={true} smooth={true} offset={0} durLinktion={500}>Skills</Link>
                            </div>

                            <div>
                                <Link to="services" spy={true} smooth={true} offset={-50} durLinktion={500}>Services</Link>
                            </div>

                            <div>
                                <Link to="projects" spy={true} smooth={true} offset={-50} duration={500}>Projects</Link>
                            </div>

                            <div>
                                <Link to="contact" spy={true} smooth={true} offset={-50} durLinktion={500}>Contact</Link>
                            </div>
                        </div>
                    </div>

                    <div className="contact-footer">
                        <h4>Contact</h4>

                        <div className="contact-footer-part">
                            <div className="contact-footer-address icon-and-span">
                                <span><i class="fa-solid fa-location-dot"></i>{profileInformation.address}</span>
                            </div>

                            <div className="contact-footer-email icon-and-span">
                                <span><i class="fa-solid fa-envelope"></i>{profileInformation.email}</span>
                            </div>

                            <div className="contact-footer-number icon-and-span">
                                <span><i class="fa-solid fa-square-phone"></i>{profileInformation.mobileNumber}</span>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        }
        
        <FooterPart />
    </footer>
  )
}

export default Footer;