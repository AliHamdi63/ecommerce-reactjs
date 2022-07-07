import React from 'react'
import Data from './CartProducts/Data';
import EmtyCart from './CartProducts/EmtyCart';
import Footer from './Footer'
import NavBar from './NavBar'

export default function Cart() {
  document.title = "Cart";
  let data = localStorage.getItem("data");
  let myProducts = JSON.parse(data);
  // console.log(myProducts.length);
  let isThereData = () => {
    if (myProducts === null || myProducts.length === 0) {
      return (
        <EmtyCart />
      )

    }
    else {
      return (
        <Data />
      )
    }
  }
  return (
    <>
      <NavBar />

      {isThereData()}

      <Footer />
    </>
  )
}
