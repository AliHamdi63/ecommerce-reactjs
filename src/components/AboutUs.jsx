import React from 'react'
import { NavLink } from 'react-router-dom';
import Footer from './Footer'
import NavBar from './NavBar'

export default function AboutUs() {
  document.title = "About Us";


  return (
    <>
      <NavBar />

      <div className='d-flex flex-row m-5'>
        <div className='col-1'></div>

        <div className='col-10'>

          <div className='mb-4 fw-bold'>
            <NavLink to="/home" className="text-decoration-none text-black fs-5">Home</NavLink>
            <span className='fs-5 '> &gt; </span>
            <span className='fs-5 text-danger'>  ABOUT US</span>
          </div>

          <h2 className='text-danger fw-bold'>About us</h2>
          <p className='fs-5'>With more than 230 stores spanning 43 states and growing, Luma is a nationally recognized active wear manufacturer and retailer. We’re passionate about active lifestyles – and it goes way beyond apparel.</p>
          <p className='fs-5'>At Luma, wellness is a way of life. We don’t believe age, gender or past actions define you, only your ambition and desire for wholeness... today.</p>
          <p className='fs-5'>We differentiate ourselves through a combination of unique designs and styles merged with unequaled standards of quality and authenticity. Our founders have deep roots in yoga and health communities and our selections serve amateur practitioners and professional athletes alike.</p>

          <div className='mt-5 mb-5'>
            <NavLink to="/home" className="text-decoration-none text-black fs-5 fw-bold">Contact Luma</NavLink>
          </div>

        </div>

        <div className='col-1'></div>
      </div>

      <Footer />
    </>
  )
}
