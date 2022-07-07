import React from 'react'
import { Button, Card } from 'react-bootstrap';
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom';


function Data(props) {
  // console.log(props)
  let { countData, remove, plus, minus } = props;

  // let data = localStorage.getItem("data");
  // console.log(JSON.parse(data));
  // let myProducts = JSON.parse(data);

  function clear() {
    localStorage.clear();
    refreshPage();
  }

  const refreshPage = () => {
    window.location.reload();
  }


  return (
    <>
      <div className='d-md-flex flex-md-row d-flex flex-wrap flex-column justify-content-md-center mt-5 mb-5'>
        {/* {myProducts && myProducts.map((item, index) => { */}
        {countData && countData.map((item, index) => {

          function removeToCart() {
            remove(item.id);
            refreshPage();

          }

          function eleMinus() {
            minus(item.id);
            refreshPage();

          }
          function elePlus() {
            plus(item.id);
            refreshPage();

          }
          return (
            <Card style={{ width: '25rem' }} className="me-md-5 mb-5 text-center fs-3 shadow-lg bg-body rounded " key={index}>
              <NavLink to={`/info/${item.id}`}>
                <Card.Img className='focus' variant="top" src={item.url} />
              </NavLink>

              <Card.Body>
                {/* <hr /> */}
                <Card.Title>{item.name}</Card.Title>
                {/* <hr /> */}
                <Card.Text>
                  ${item.price}
                </Card.Text>
                {/* <hr /> */}

                {/* <hr /> */}
                <Card.Text>
                  Total: ${item.price * item.quantity}
                </Card.Text>
                {/* <hr /> */}
                <Card.Body>
                  <button className='plus me-4' onClick={elePlus}>
                    <span className='fa fa-plus' ></span>
                  </button>
                  {/* <Card.Text> */}
                  <strong>{item.quantity}</strong>
                  {/* </Card.Text> */}
                  <button className='minus ms-4' onClick={eleMinus}>
                    <span className='fa fa-minus' ></span>
                  </button>
                </Card.Body>
              </Card.Body>
              <Card.Body>
                <NavLink to={`/info/${item.id}`}>
                  <Button className='btn view fs-4 pe-4 ps-4 me-5'>View</Button>
                </NavLink>
                <button className='btn btn-danger fs-4 pe-4 ps-4' onClick={removeToCart}>
                  <span className="fa fa-trash ms-2 me-2 fs-3"></span>
                </button>
              </Card.Body>

            </Card>
          )
        })}
      </div>
      <div className='text-center mt-5 mb-5'>
        <Button className='btn btn-danger fs-4 pt-2 pb-2 pe-4 ps-4' onClick={clear} >Clear Cart</Button>
      </div>
    </>
  )
}

let mapState = (state) => {
  // console.log(state);
  // console.log(state.CountReducer);
  return {
    countData: state.CountReducer
  };
}

let mapDispatch = (dispatch) => {
  return {
    // add: (data) => dispatch({ type: 'ADD', payload: data }),
    remove: (id) => dispatch({ type: 'REMOVE', payload: id }),
    plus: (id) => dispatch({ type: 'PLUS', payload: id }),
    minus: (id) => dispatch({ type: 'MINUS', payload: id })

  };
}

export default connect(mapState, mapDispatch)(Data);