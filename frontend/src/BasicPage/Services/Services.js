import React, { useEffect } from 'react';
import ServicesCard from '../Cards/ServicesCard/ServicesCard';
// import services from "../Data/services";
// import axios from 'axios';
import Message from '../../components/Message';
import Loader from "../../components/Loader";

import "./Services.css";
import { useDispatch, useSelector } from 'react-redux';
import { detailsServices } from '../../actions/serviceActions';

function Services() {
  const dispacth = useDispatch()

    const servicesDetails = useSelector((state) => state.servicesDetails)
    const { loading, error, services } = servicesDetails 

    useEffect(() => {
        dispacth(detailsServices())
    }, [dispacth])

  return (
    <div className="services-section" id="services">
      <div className="services-part">
        <div className="services-header">
          <div className="hr-part"></div>
          <span>Services</span>
          <div className="hr-part"></div>
        </div>

        {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message> : 
          <div className="services-part-two">
              {services?.map((serviceData) => (
                <div className="serviceCard-part" key={serviceData._id}>
                  <ServicesCard serviceData={serviceData} />
                </div>
              ))}
          </div>
        }

      </div>
    </div>
  );
}

export default Services;