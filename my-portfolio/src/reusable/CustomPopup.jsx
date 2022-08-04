import React from 'react'
import { useEffect } from 'react'
import './CustomPopup.css'
import Devicon from "devicon-react-svg"
function CustomPopup(props) {
    useEffect(() => {
        console.log(props.data)
    })
  return (
    <div className='popup-box'>
        <div className="header-bar" style={{ backgroundColor: props?.data?.name === "Rogers" ? 'red' : 'rgb(4, 213, 245)' }}>
            <h3> My experince at {props?.data?.name}</h3>
            <button className="btn-close" onClick={props.closeTab} style={{alignSelf: 'center'}}> </button>
        </div>
        <div cassName="box">
            <h4 style={{padding: '0.5rem', paddingBottom: '0rem'}}>Technologies Used</h4>
            {props?.data?.technologyUsed?.map((n, idx) => {
                return(
                    <li style={{paddingLeft: '1.2rem', fontFamily: "merriweather", fontSize: '18px'}}> {n} </li>
            )
            })}
        </div>

        <div cassName="my-role">
            <h4 style={{padding: '0.5rem', paddingTop: '1rem'}}>My Role</h4>
            {props?.data?.role?.map((n, idx) => {
                return(
                    <li style={{paddingLeft: '1.2rem', paddingBottom: '0.5rem', fontFamily: "merriweather", fontSize: '18px'}}> {n} </li>
            )
            })}
        </div>
        {props?.data?.extra !== undefined ?
        <div cassName="extra">
            <h4 style={{padding: '0.5rem', paddingBottom: '0rem'}}>Other Activities</h4>
            {props?.data?.extra?.map((n, idx) => {
                return(
                    <li style={{paddingLeft: '1.2rem'}}> {n} </li>
            )
            })}
        </div>
        : null
        }
    </div>
  )
}

export default CustomPopup
