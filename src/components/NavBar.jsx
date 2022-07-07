import React from 'react'
import { Navbar, NavDropdown, Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

export default function NavBar() {

    let data = localStorage.getItem("data");
    let myProducts = JSON.parse(data);

    function num() {
        if (myProducts == null || myProducts == 0) {

            return 0;
        }
        else {

            return myProducts.length
        }
    }
    return (
        <>
            <Container className='mt-1'>
                <Navbar className='d-none d-md-block d-sm-none fw-bold' variant="light">
                    <Container>
                        <Navbar.Text>
                            <NavLink to="/home" className='me-3 lnk text-decoration-none rounded text-black text-opacity-75  fs-4'>Home</NavLink>
                        </Navbar.Text>
                        <Navbar.Text><NavLink className="me-3 lnk text-decoration-none rounded text-black text-opacity-75  fs-4" to="/login">Sign In</NavLink></Navbar.Text>
                        <Navbar.Text><NavLink className="me-3 lnk text-decoration-none rounded text-black text-opacity-75  fs-4" to="/register">Create an Account</NavLink></Navbar.Text>
                        <Navbar.Text><NavLink className="me-3 lnk text-decoration-none rounded text-black text-opacity-75  fs-4" to="/contactus">Contact Us</NavLink></Navbar.Text>
                        <Navbar.Text><NavLink className="me-3 lnk text-decoration-none rounded text-black text-opacity-75  fs-4" to="/aboutus">About Us</NavLink></Navbar.Text>
                        <Navbar.Text><span className="me-5 fs-4 text-opacity-25">|</span></Navbar.Text>
                        <Navbar.Text><NavLink to="/" className=" lnk fa fa-facebook-f me-3 text-decoration-none text-black text-opacity-75 rounded mt-1 fs-4"></NavLink></Navbar.Text>
                        <Navbar.Text><NavLink to="/" className=" lnk fa fa-twitter me-3 text-decoration-none text-black text-opacity-75 rounded mt-1 fs-4"></NavLink></Navbar.Text>
                        <Navbar.Text><NavLink to="/" className=" lnk fa fa-instagram me-3 text-decoration-none text-black text-opacity-75 rounded mt-1 fs-4"></NavLink></Navbar.Text>
                    </Container>
                </Navbar>
                <Navbar className=' d-md-none d-sm-block text-black fw-bold' variant="light">
                    <Container>
                        <NavDropdown title="Links" id="basic-nav-dropdown" className='text-black fs-4'>
                            <NavDropdown.Item>
                                <NavLink to="/home" className='text-decoration-none rounded text-black text-opacity-75 fs-4'>Home</NavLink>
                            </NavDropdown.Item>

                            <NavDropdown.Item>
                                <NavLink className="text-decoration-none rounded text-black text-opacity-75 fs-4" to="/login">Sign In</NavLink>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <NavLink className="text-decoration-none rounded text-black text-opacity-75 fs-4" to="/contactus">Contact Us</NavLink>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <NavLink className="text-decoration-none rounded text-black text-opacity-75 fs-4" to="/register">Create an Account</NavLink>
                            </NavDropdown.Item>
                        </NavDropdown>

                        <Navbar.Text><span className="me-3 fs-4 text-opacity-25">|</span></Navbar.Text>
                        <Navbar.Text><NavLink to="/" className="fa fa-facebook-f lnk rounded text-decoration-none rounded text-black text-opacity-75 fs-4"></NavLink></Navbar.Text>
                        <Navbar.Text><NavLink to="/" className="fa fa-twitter lnk rounded text-decoration-none rounded text-black text-opacity-75 fs-4"></NavLink></Navbar.Text>
                        <Navbar.Text><NavLink to="/" className="fa fa-instagram lnk rounded text-decoration-none rounded text-black text-opacity-75 fs-4"></NavLink></Navbar.Text>
                    </Container>
                </Navbar>
            </Container>

            <hr />

            <Navbar variant="light" bg="light" className='mt-5 mb-5 stick'>
                <Container className='d-flex flex-row justify-content-center'>
                    <Navbar.Text>
                        <NavLink to="/home">
                            <div className="me-5 col-lg-6 col-md-6 col-sm-6 text-lg-center text-md-start text-sm-start">
                                <img src="https://www.portotheme.com/magento2/porto/pub/media/logo/stores/45/logo_red.png" className="" />
                            </div>
                        </NavLink>
                    </Navbar.Text>
                    <Navbar.Text>
                        <NavLink to="/cart">
                            <span className="fa fa-shopping-basket ms-2 me-2 fs-3">
                                <sup className='bg-danger text-light fs-5' style={{ borderRadius: "50%", padding: "3px 6px" }}>
                                    {num()}
                                </sup>
                            </span>
                        </NavLink>
                        <NavLink to="/search">
                            <span className="ms-5 fa fa-search fs-3">
                            </span>
                        </NavLink>
                    </Navbar.Text>
                </Container>
            </Navbar>
        </>
    )
}
