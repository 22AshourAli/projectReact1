import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <>

<footer className='  bg-footer text-white text-center '>
<div className="container py-5">
  <div className="info py-5">
<div className="row g-4">
  <div className="col-md-4">
    <div className="item my-4">
      <h4 className='h2 '>LOCATION</h4>
      <p className='my-3'>2215 John Daniel Drive  </p>
        <h6 >Clark, MO 65243</h6>
    
    </div>
  </div>
  <div className="col-md-4">
    <div className="item my-4">
      <h4 className='h2 '>AROUND THE WEB</h4>
      <div className="socila-media d-flex  justify-content-center align-items-center">
        <div className="icon"><i className='fa-brands fa-facebook  '></i></div>
        <div className="icon"><i className='fa-brands fa-twitter   '></i></div>
        <div className="icon"><i className='fa-brands fa-linkedin-in   '></i></div>
        <div className="icon"><i className='fa-solid fa-globe   '></i></div>
      </div>
    
    </div>
  </div>
  <div className="col-md-4">
    <div className="item my-4">
      <h4 className='h2 '>ABOUT FREELANCER</h4>
      <p className='my-3 px-4'>Freelance is a free to use, licensed Bootstrap theme created by Ashour  </p>
        
    
    </div>
  </div>
  
</div>

  </div>
  </div>
<div className="footer  bg-dark text-white text-center p-2">
  <p>Copyright © Your Website 2021</p>
</div>
</footer>

      </>
    )
  }
}
