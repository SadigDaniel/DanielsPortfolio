import React from 'react'
import './aboutMe.css'
import person from '../../images/person.png'
import AppLabels from '../../AppLabels'
function AboutMe() {
  const labels = AppLabels();
  return (
    <div className="about__container" id="about-me">
     <div>
      <img src={person} alt="person icon"/>
     </div>
     <div className="about__text">
       <h1>{labels.ABOUT_ME}</h1>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quia placeat eos atque veniam voluptatum sapiente ipsum tempore iste, omnis cumque velit autem consectetur. Veritatis molestias ullam voluptas nostrum? Dolorum.</p>
     </div>
    </div>
  )
}

export default AboutMe
