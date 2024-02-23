import React, { useEffect } from 'react';
// import profileInformations from '../../Data/profile';
// import axios from 'axios';
import Message from '../../../components/Message';
import Loader from "../../../components/Loader";

import "./FooterPart.css";
import { useDispatch, useSelector } from 'react-redux';
import { detailsProfile } from '../../../actions/profileActions';

function FooterPart() {
  const dispacth = useDispatch()

    const profileDetails = useSelector((state) => state.profileDetails)
    const { loading, error, profileInformations } = profileDetails 

    useEffect(() => {
        dispacth(detailsProfile())
    }, [dispacth])

  return (
    <div>

    {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message> : 
    <div>
    {profileInformations?.map((profileInformation) => (
    <div className="footer-second-part">
        <div>
            <span>{profileInformation.firstLastName} | © {new Date().getFullYear()} All right reserved.</span>
        </div>
    </div>
    ))}
    </div>
    }

    </div>
  );
}

export default FooterPart;