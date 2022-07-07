import React from 'react'
import Footer from './Footer'
import NavBar from './NavBar'
import Slid from '../components/HomePageCom/Slid'
import Rooms from './HomePageCom/Rooms';
import Featured from './HomePageCom/Featured';
import Brands from './HomePageCom/Brands';
import Rated from './HomePageCom/Rated';
import Selling from './HomePageCom/Selling';
import Lastest from './HomePageCom/Lastest';
import { Tab, Tabs } from 'react-bootstrap';

export default function Home() {
  document.title = "HomePage";

  return (
    <>
      <NavBar />
      <Slid />
      <hr />
      <Rooms />
      <hr />

      <Featured />
      <hr />

      <div className='text-center theWidth' >
        <Tabs defaultActiveKey="TOP RATED PRODUCTS" className="mb-3 fs-4 ">

          <Tab eventKey="TOP RATED PRODUCTS" title="TOP RATED PRODUCTS" style={{ width: "80%" }}>
            <Rated />
          </Tab>

          <Tab eventKey="BEST SELLING PRODUCTS" title="BEST SELLING PRODUCTS" style={{ width: "80%" }}>
            <Selling />
          </Tab>

          <Tab eventKey="LATEST PRODUCTS" title="LATEST PRODUCTS" style={{ width: "80%" }}>
            <Lastest />
          </Tab>

        </Tabs>
      </div>
      <br />
      <Brands />

      <Footer />
    </>
  )
}
