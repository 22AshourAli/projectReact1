import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
  render() {
    return (
      <>

<nav className="navbar  navbar-expand-lg bg-footer py-3 " >
  <div className="container">
    <Link className="navbar-brand text-white fw-bolder fs-2" to="/">START FRAMEWORK</Link>
    <button className="navbar-toggler text-white bg-white " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      {/* <span className="navbar-toggler-icon" /> */}
      <i class="fa-solid fa-bars-staggered fs-3 p-2 text-dark"></i>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2  mb-lg-0 text-uppercase fw-bold">
        <li className="nav-item active">
          <Link className="nav-link text-white fw-seimbold" to="/"> HOME</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white fw-seimbold" to="about"> ABOUT</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link  text-white fw-seimbold" to="portfolio"> PORTFOLIO</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link  text-white fw-seimbold" to="contact"> CONTACT</Link>
        </li>

      </ul>

    </div>
  </div>
</nav>


      </>
    )
  }
}
