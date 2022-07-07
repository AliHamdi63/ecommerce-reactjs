import React from 'react'
import Footer from './Footer'
import FormLogin from './FormLogin/FormLogin'
import NavBar from './NavBar'

export default function Login() {
  document.title = "Login"

  return (
    <>
      <NavBar />
      <div className='bg-light p-5 text-center mb-5'>
        <h1 className='fw-bold p-5'>Customer Login</h1>
      </div>

      <FormLogin />

      <Footer />
    </>
  )
}
