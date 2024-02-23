import React, { useEffect } from 'react';
// import projects from "../Data/projects";
import ProjectCard from '../Cards/ProjectCard/ProjectCard';
import Message from '../../components/Message';
import Loader from "../../components/Loader";

import "./Projects.css";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper";
import { useDispatch, useSelector } from 'react-redux';
import { detailsProject } from '../../actions/projectActions';

function Projects() {
  const dispacth = useDispatch()

    const projectDetails = useSelector((state) => state.projectDetails)
    const { loading, error, projects } = projectDetails 

    useEffect(() => {
        dispacth(detailsProject())
    }, [dispacth])

  return (
    <div className="projects-section" id="projects">
      <div className="projects-part">
        <div className="projects-header">
          <div className="hr-part"></div>
          <span>Projects</span>
          <div className="hr-part"></div>
        </div>

        <div className="swiper-projects">
            <Swiper 
              // slidesPerView={6}
              // spaceBetween={30}
              loop={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}

              breakpoints={{
                0: {
                  slidesPerView: 2,
                  spaceBetween: 12
                },

                320: {
                  slidesPerView: 2,
                  spaceBetween: 15
                },

                480: {
                  slidesPerView: 2,
                  spaceBetween: 18
                },

                768: {
                  slidesPerView: 2,
                  spaceBetween: 21
                },

                1024: {
                  slidesPerView: 2,
                  spaceBetween: 24
                },

                1200: {
                  slidesPerView: 2,
                  spaceBetween: 27
                },

                1700: {
                  slidesPerView: 3,
                  spaceBetween: 30
                }
              }}

              modules={[Autoplay, Pagination]}
              className="mySwiper"
            >
            {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message> : 
            <div className="projects-part-two">
            {projects?.map((projectData) => (
              <SwiperSlide className="projectCard-part" key={projectData._id}>
                <ProjectCard projectData={projectData} />
              </SwiperSlide>
            ))}
            </div>
            }
          </Swiper>
        </div>

      </div>
    </div>
  )
}

export default Projects;