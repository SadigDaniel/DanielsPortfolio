import React from 'react'
import Typed from "react-typed";
import "./header.css"
function Header() {
  return (
    <div id="home" className="main-header">
      <h1> Who Am I ?</h1>
      <Typed
        strings={[
            "A Software Engineer",
            "Full Stack Developer",
            "3rd Year University Student",
            "",]}
            typeSpeed={40}
            backSpeed={50}
            loop
      />
    </div>
  )
}

export default Header
