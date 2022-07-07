import React from 'react'
import Footer from './Footer'
import NavBar from './NavBar'
import RegForm from './Register/RegForm';

export default function Register() {
  document.title = "Register";
  return (
    <>
      <NavBar />
      <div className='bg-light p-5 text-center mb-5'>
        <h1 className='fw-bold p-5'>Create New Customer Account</h1>
      </div>
      
      <RegForm />

      <Footer />
    </>
  )
}
