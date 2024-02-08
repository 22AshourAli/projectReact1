import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <>
        <div className="about-content bg-color vh-100 d-flex align-items-center justify-content-center">

<div className="container">
      <div className="info text-center text-white">
      <h1 className='text-white fw-bolder'>ABOUT COMPONENT</h1>
      <span className='lines line-1'></span> <i className=' fa-solid  mx-4 fa-star position-relative text-white fs-4 '></i><span className=' lines line-2'></span>

      </div>
      <div className="row  mx-auto py-5 g-2">
        <div className="col-md-5 mx-auto">
          <div className="item-about">
            <p className=' text-white'>Freelancer is a free bootstrap theme created by Ashour Ali. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>

          </div>
        </div>
        <div className="col-md-5 mx-auto">
          <div className="item-about">
            <p className=' text-white'>Freelancer is a free bootstrap theme created by Ashout. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>

          </div>
        </div>
        </div> 
      </div>
        </div>
        
      </>
    )
  }
}
