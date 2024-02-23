import React from 'react';

import "./SkillsCard.css";

function SkillsCard({ skillData }) {
  return (
    <div className="skill-card">
      <img src={skillData.skillImage} alt={skillData.sklillName} />
      <h5>{skillData.sklillName}</h5>
    </div>
  )
}

export default SkillsCard;