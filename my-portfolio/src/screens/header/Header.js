import React from 'react'
import Typed from "react-typed";
import "./header.css"
function Header() {
  return (
    <div id="home" className="main-header">
      <h1 className="who_am_i"> Who Am I</h1>
      <Typed
        className ="typed_text" 
        strings={[
            "A Software Engineer",
            "Full Stack Developer",
            "Graduated with distinction",
            "",]}
            typeSpeed={40}
            backSpeed={50}
            loop
      />
    </div>
  )
}

export default Header
