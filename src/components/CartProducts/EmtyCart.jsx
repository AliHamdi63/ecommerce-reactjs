import { Button } from 'react-bootstrap'
import React from 'react'
import { NavLink } from 'react-router-dom'

export default function EmtyCart() {
    return (
        <>
            <div className='d-flex flex-row'>
                <div className='col-1'></div>
                <div className='col-10 '>
                    <h2 className='text-danger fw-bold mb-5'>Shopping Cart</h2>
                    <div className='text-center'>
                        <p className='fa fa-shopping-basket' style={{ color: "lightgray", fontSize: "10rem" }}></p>
                        <p className='fs-5 mb-5' style={{ color: "lightgray" }}>You have no items in your shopping cart.</p>
                        <NavLink to="/" className="text-decoration-none text-light">
                            <Button className=' btn btn-dark ps-5 pe-5 pt-3 pb-3 fw-bold fs-4' style={{width:"270px", marginBottom:"150px"}}>
                                CONTINUE SHOPPING
                            </Button>
                        </NavLink>
                    </div>
                </div>
                <div className='col-1'></div>
            </div>
        </>
    )
}
