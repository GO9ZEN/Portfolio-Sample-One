import React, { useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import profileInformations from '../Data/profile';
// import axios from 'axios';
// import { useDispatch } from 'react-redux'
import { detailsProfile } from '../../actions/profileActions';
import Message from '../../components/Message';
import Loader from "../../components/Loader";

import "./Contact.css";
import { useDispatch, useSelector } from 'react-redux';

function Contact() {
  const dispacth = useDispatch()

    const profileDetails = useSelector((state) => state.profileDetails)
    const { loading, error, profileInformations } = profileDetails 

    useEffect(() => {
        dispacth(detailsProfile())
    }, [dispacth])

  const notify = () => toast.success("Message sent successfully", {
    className: 'toast-message'
  });

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_chij6nc', 'template_svbn3nj', form.current, '0g6jyMpxBoOx5ykn3')
      .then((result) => {
          console.log(result.text);

      }, (error) => {
          console.log(error.text);

      });

      e.target.reset();
  };

  return (
    <div className="contact-section" id="contact">
      <div className="contact-part">
        <div className="contact-header">
          <div className="hr-part"></div>
          <span>Contact Me</span>
          <div className="hr-part"></div>
        </div>

        {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message> : 
        <div>
          {profileInformations?.map((profileInformation) => (
              <div className="contact-details">
                  <div className="contact-email">
                      <i class="fa-solid fa-envelope"></i>
                      <span>{profileInformation.email}</span>
                  </div>

                  <div className="contact-number">
                      <i class="fa-solid fa-square-phone"></i>
                      <span>{profileInformation.mobileNumber}</span>
                  </div>
              </div>
          ))}
          </div>
          }

        <div className="contact-boxes">
          <form ref={form} onSubmit={sendEmail}>
            <div>
              <input type="text" name="Name" placeholder="Your Name" required />
            </div>

            <div>
              <input type="email" name="Email" placeholder="Your E-mail" required />
            </div>

            <div className="message-box">
              <textarea name="Message" placeholder="Your Message" required></textarea>
            </div>

            <button className="contact-boxes-button" onClick={notify}>Submit</button>
            <ToastContainer />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;