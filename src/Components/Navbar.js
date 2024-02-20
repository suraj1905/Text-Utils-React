import React from 'react'
import PropTypes from 'prop-types'
import {
    Link
  } from "react-router-dom";

export default function Navbar(props) {
return (
<nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
        <a className={`navbar-brand text-${props.mode=== 'light'?'dark':'light'}`} href='/'>{props.title}</a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/about">About</Link>
        </li>
      </ul>
    </div>

    <div className="form-check form-switch">
        <input type="checkbox" className="form-check-input" id="customSwitches" onClick={props.toggleMode}/>
        <label className={`form-check-label text-${props.mode=== 'light'?'dark':'light'}`} htmlFor="customSwitches">{`${props.mode=== 'light'?'Light':'Dark'}`} mode</label>       
    </div>
    </div>
</nav>
)}

Navbar.propTypes = {title: PropTypes.string}


