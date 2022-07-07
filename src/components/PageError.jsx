import React from 'react'
import { NavLink } from 'react-router-dom';
import Footer from './Footer'
import NavBar from './NavBar'

export default function PageError() {
  document.title = "page not found";


  return (
    <>
      <NavBar />

      <div className='alert alert-danger p-5 mt-5 mb-5 text-light text-center'>
        <h1 className='text-black'>404 : Error </h1>
        <h2 className='text-black'>Page Not Found</h2>
        <br />
        <h3 className='text-black'>Go To <NavLink className="text-danger" to="/home">HomePage</NavLink></h3>
      </div>

      <Footer />
    </>
  )
}
