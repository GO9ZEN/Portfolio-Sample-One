import React, { useEffect } from 'react';
import SkillsCard from '../Cards/SkillsCard/SkillsCard';
// import skillsData from "../Data/skillsData";
import Message from '../../components/Message';
import Loader from "../../components/Loader";

import "./Skills.css";
import { useDispatch, useSelector } from 'react-redux';
import { detailsSkills } from '../../actions/skillActions';

function Skills() {
  const dispacth = useDispatch()

    const skillsDetails = useSelector((state) => state.skillsDetails)
    const { loading, error, skillsData } = skillsDetails 

    useEffect(() => {
        dispacth(detailsSkills())
    }, [dispacth])

  return (
    <div>
        <div className="skills-section" id="skills">
          <div className="skills-section-size">
            <div className="skills-part-one">

              <div className="skills-header"> 
                <div className="hr-part"></div>
                <span>Skills</span>
                <div className="hr-part"></div>
              </div>

            </div>

            {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message> : 
            <div className="skills-part-two">
              {skillsData?.map((skillData) => (
                <div className="skillCard-part" key={skillData._id}>
                  <SkillsCard skillData={skillData} />
                </div>
              ))}
            </div>
            } 
          </div>
        </div>
    </div>
  );
}

export default Skills;