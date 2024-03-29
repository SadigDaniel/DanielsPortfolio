import React from 'react'
import Navbar from "react-bootstrap/Navbar"
import Nav from 'react-bootstrap/Nav'
import { navigationLinks } from '../../helpers/navigationLinks'
import './Navigation.css'



function createLinks() {
    return navigationLinks.map((n, idx) => (
      <Nav.Link key={idx} href={n.ref}>{n.name}</Nav.Link>
    ))
  }


function NavigationBar() {
  return (
    <div>
        <Navbar className="navigation_container" 
          style={{position: "fixed"}}
          collapseOnSelect
          expand="md"> 
            <Navbar.Brand style={{marginLeft: "1rem"}} href="#home"> Daniel Sadig </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse style={{justifyContent: "flex-end", marginRight: "1rem", borderColor: "none"}}> 
                <Nav className="links" style={{ margin: '0 1rem'}}>
                {createLinks()}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </div>
  )
}

export default NavigationBar
