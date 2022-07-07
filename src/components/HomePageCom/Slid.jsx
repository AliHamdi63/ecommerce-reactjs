import { Carousel } from 'react-bootstrap';
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { ProductAction } from "../../redux/Actions/ProductAction"
import { NavLink } from 'react-router-dom';

function Slid(props) {
  // console.log(props);
  let { productData, getProducts } = props;
  useEffect(() => {
    getProducts();
  }, []);



  return (
    <div className='text-center'>
      <Carousel>
        {productData && productData.map((item, index) => {
          // console.log(item.url);
          return (
            <Carousel.Item key={index}>

              <NavLink to="/h">
                <img
                  style={{ width: "90%" }}
                  className="mb-5 slider"
                  src={String(item.url)}
                />
              </NavLink>

              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>
          )
        })}

      </Carousel>
    </div>
  )
}

let mapState = (state) => {
  // console.log(state.SliderProduct);
  return {
    productData: state.SliderProduct
  };
}

let mapDispatch = (dispatch) => {
  return {
    getProducts: () => { dispatch(ProductAction()) }
  };
}

export default connect(mapState, mapDispatch)(Slid);