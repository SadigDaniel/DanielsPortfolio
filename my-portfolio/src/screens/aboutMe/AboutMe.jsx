import React from 'react'
import "./aboutMe.css"
import { BsPersonCircle } from "react-icons/bs"
import personIcon from "../../Images/personIcon.png"
function AboutMe() {
  var dummystr = "";
  dummystr += "Hi ! My name is Daniel Sadig,"
  dummystr += " I am currently working towards a Software Engineering degree at Ryerson University."
  dummystr +=  " As a part of my journey I have worked as a full stack developer at Rogers,"
  dummystr +=  " and as a Technical Systems Analyst / Robotic Process Automation engineer at RBC."
  dummystr += " I am passionate about learning new technologies and further enhancing my skills as a software engineer. "

  return (
    <div className="about_container" id="about-me">
        <div>
          <img src={personIcon} alt="person icon"/>
        </div>
        <div className="about_text">
            <h1> About Me </h1>
            <p> {dummystr} </p>
        </div>
    </div>
  )
}

export default AboutMe
