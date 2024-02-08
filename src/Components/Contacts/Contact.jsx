import React, { Component } from 'react'

export default class Contact extends Component {
  render() {
    return (
      <>
      <div className="contact w-75 mx-auto my-4">
        <div className="container">
        <div className="info text-center text-dark mt-5">
      <h1 className='text-dark fw-bolder '>CONTACT SECTION</h1>
      <span className='lines line-1  bg-dark'></span> <i className=' fa-solid  mx-4 fa-star position-relative text-dark fs-4 '></i><span className=' lines line-2 bg-dark'></span>

      </div>
          <div className="row">
      <div className="col-md-12">
      <div class="form-floating mb-3">
  <input type="text" className="form-control border-top-0 border-end-0 border-start-0 border-bottom-3" id="floatingInput" placeholder="userName..."/>
  <label for="floatingInput">User Name:</label>
</div>
      <div class="form-floating mb-3">
  <input type="text" className="form-control border-top-0 border-end-0 border-start-0 border-bottom-3" id="floatingInput" placeholder="userAge... "/>
  <label for="floatingInput">User Age :</label>
</div>
      <div class="form-floating mb-3">
  <input type="email" className="form-control border-top-0 border-end-0 border-start-0 border-bottom-3" id="floatingInput" placeholder="userEmail..."/>
  <label for="floatingInput">User Email</label>
</div>
      <div class="form-floating mb-3">
  <input type="password" className="form-control border-top-0 border-end-0 border-start-0 border-bottom-3" id="floatingInput" placeholder="userPassword..."/>
  <label for="floatingInput">User Password</label>
</div>
      </div>
      
          </div>
          <button type='submit' className='btn-submit '>Send Message</button>
        </div>
      </div>
      </>
    )
  }
}
