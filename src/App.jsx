import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import React, { Component } from 'react'
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Portfolio from './Components/Portfolio/Portfolio';
import Contact from './Components/Contacts/Contact';
import Notfound from './Components/Notfound/Notfound';

export default class App extends Component {
  

  
  render() {
   let routers = createBrowserRouter([
    {path:'', element:<Layout/>, children:[
      {index:true,element:<Home/>},
      {path:'about',element:<About/>},
      {path:'portfolio',element:<Portfolio/>},
      {path:'contact',element:<Contact/>},
      {path:'*', element:<Notfound/>},
    ]}
    ])
    return <RouterProvider router={routers}/>
  }
}
