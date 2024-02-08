import React, { Component } from 'react'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'


export default class Layout extends Component {
  render() {
    return (
      <>

       <Navbar/>
        <Outlet/>
       <Footer/>

      </>
    )
  }
}
