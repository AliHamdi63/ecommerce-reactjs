import React from 'react'
import Contact from './Contact Us/Contact'
import Footer from './Footer'
import NavBar from './NavBar'
export default function ContactUs() {
  document.title = "Contact Us";


  return (
    <>
      <NavBar />

      <Contact />

      <Footer />
    </>
  )
}
