import React from 'react'
import './contactme.css'
import { navigationLinks } from "../helpers/navigationLinks"

const createLinks = () => {
    return navigationLinks.map((n, idx) => (
        <p key={idx}><a href={n.ref}>{n.name}</a></p>
    ))
}


function ContactMe() {
  return (
    <div className='contactMe_container' id="contact">
      <div className="contact_me_links">
        <div>
            <p>Daniel Sadig</p>
            <p>linked in</p>
        </div>
        <div>
            {createLinks()}
        </div>
      </div>
      <div className="closing_div">Copyright&copy; {new Date().getFullYear()} All rights reserved</div>
    </div>
  )
}

export default ContactMe
