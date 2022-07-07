import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { connect } from 'react-redux'
// import { Button, Card, Form } from 'react-bootstrap';
import Footer from './Footer'
import NavBar from './NavBar'
import data from "../ProductData/Products.json"



function DataInfo(props) {
  document.title = "Info";
  let { searchData, getSearch, add, remove } = props;


  let navigate = useNavigate();
  let goToHome = () => {
    navigate("/home")
  }

  let { id } = useParams();
  let [room, setRoom] = useState([]);

  let getRoom = () => {
    let info = data.filter(ele => ele.id == id)
    // console.log(info[0]);
    setRoom(info[0]);
  }

  useEffect(() => {

    getRoom();
    // console.log(1);

  }, [])

  function AddToCart() {
    add(room);
  }

  return (
    <>
      <NavBar />
      <br />
      <div className='d-md-flex flex-md-row d-flex flex-column mb-5 ms-5 mt-5 pb-md-0 pb-5 align-items-center text-center shadow-lg bg-body rounded col-md-6 col-10'>
        <img src={room.url} width="300px" className='m-5 focus' />
        <div className='ms-0 ms-md-5'>
          <h1 className=''>{room.name}</h1>
          {/* <br/> */}
          <h3 className=''>{room.price}</h3>

          <button className='btn addc fs-4 pe-5 ps-5 mt-5' onClick={AddToCart}>
            <span className="fa fa-shopping-basket ms-2 me-2 fs-3"></span>
          </button>
          <br />
          {/* <button className='btn btn-success me-5 fs-4 pe-5 ps-5 mt-5' onClick={goToHome}>Add to Cart</button> */}
          <button className='btn view pe-5 fs-4 ps-5 mt-5' onClick={goToHome}>
            <span className="fa fa-home ms-2 me-2 fs-3"></span>
          </button>
        </div>
      </div>
      <br />
      <br />
      <br />
      <Footer />
    </>
  )
}

let mapState = (state) => {
  // console.log(state.CartReducer);
  // console.log(state);
  return {
    searchData: state
  };
}

let mapDispatch = (dispatch) => {
  return {
    add: (data) => dispatch({ type: 'ADD', payload: data }),
    remove: (id) => dispatch({ type: 'REMOVE', payload: id })

  };
}

export default connect(mapState, mapDispatch)(DataInfo);