import React from 'react'
import "./pastExperience.css"
import Devicon from "devicon-react-svg"
import { pastJobs } from '../../helpers/pastJobs'
import { GiMagnifyingGlass } from "react-icons/gi"

function PastExperince() {
  return (
    <div id="past_experinces" className="past_experinces_container">
      <div style={{textAlign: "center"}}> 
        <h1> My Past Work Experience </h1> 
    </div>
    <div className="experince_contianer">
            {pastJobs?.map((n, idx) => {
                return (
                    <div key={idx} className="experinces_card">
                        <Devicon className="icon" icon={n.iconName} />
                        <span style={{ margin: '5px', fontSize: "1.5rem" }}>{n?.name}</span>
                        <span style={{fontSize: "12px"}}> {n?.title} </span>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default PastExperince
