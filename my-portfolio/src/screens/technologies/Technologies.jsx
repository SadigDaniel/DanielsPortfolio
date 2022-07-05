import React from 'react'
import "./Technologies.css"
import Devicon from "devicon-react-svg"
import { tech } from '../../helpers/techs'
function Technologies() {
  return (
    <div className="technologies_container" id ="technologies">
        <div style={{textAlign: "center"}}>
            <h1>Technologies I Have Worked With</h1>
        </div>
        <div className="tech_cards_container">
            {tech?.map((n, idx) => {
                return (
                    <div key={idx} className="techcard">
                        <Devicon className="tech_icon" icon={n.iconName} />
                        <span style={{ margin: '5px', fontSize: "1.5rem" }}>{n?.name}</span>
                    </div>
                )
            })}
        </div>
      
    </div>
  )
}

export default Technologies
