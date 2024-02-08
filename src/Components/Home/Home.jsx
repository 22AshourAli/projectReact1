import React, { Component } from 'react'


export default class Home extends Component {
  render() {
    return (
      <>
        <header className='bg-color vh-100 d-flex align-items-center justify-content-center'>
          <div className="header-content text-white text-center  ">
      <img src='images/avataaars.svg'  width='300' alt="avataaar" />
      <h1 className='text-white fw-bolder'>START FRAMEWORK</h1>
      <span className='lines line-1'></span> <i className=' fa-solid  mx-4 fa-star position-relative text-white fs-4 '></i><span className=' lines line-2'></span>

<p className=' mt-3'>Graphic Artist - Web Designer - Illustrator</p>
          </div>
        </header>

      </>
    )
  }
}
