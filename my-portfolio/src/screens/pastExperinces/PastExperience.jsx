import React from 'react'
import { useState } from 'react'
import "./pastExperience.css"
import Devicon from "devicon-react-svg"
import { pastJobs } from '../../helpers/pastJobs'
import CustomPopup from '../../reusable/CustomPopup';


function PastExperince() {
  const [openPop, setOpenPop] = useState(false);
  const [data, setData] = useState()
  const opening = (e) => {
    setData(e)
    setOpenPop(true)
  }
  const closing = () => {
    console.log("closing")
    setOpenPop(false)
  }
  return (
    <div id="past_experinces" className="past_experinces_container">
      <div style={{textAlign: "center"}}> 
        <h1> My Past Work Experience </h1> 
    </div>
    <div className="experince_contianer">
            {pastJobs?.map((n, idx) => {
                return (
                    <div key={idx} className="experinces_card" onClick={() => opening(n)}>
                      <img src={n.iconName} style={{maxWidth: '100px', maxHeight: '140px'}}/>
                        <span style={{ margin: '5px', fontSize: "1.5rem" }}>{n?.name}</span>
                        <span style={{fontSize: "12px"}}> {n?.title} </span>
                    </div>
                )
            })}
        </div>
        {openPop ? <CustomPopup closeTab={closing} data={data}/>: ""}
    </div>
  )
}

export default PastExperince
