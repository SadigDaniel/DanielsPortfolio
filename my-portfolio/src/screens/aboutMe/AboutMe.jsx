import React from 'react'
import "./aboutMe.css"
import personIcon from "../../Images/personIcon.png"
import AppLabels from '../../helpers/AppLabels';
function AboutMe() {
  const labels = AppLabels();

  return (
    <div className="about_container" id="about-me">
        <div>
          <img src={personIcon} alt="person icon"/>
        </div>
        <div className="about_text">
            <h1> About Me </h1>
            <p> {labels?.ABOUT_ME_INFO} </p>
        </div>
    </div>
  )
}

export default AboutMe
