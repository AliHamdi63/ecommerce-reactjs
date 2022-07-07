import React from 'react'
import { useState } from 'react';
import { NavLink } from 'react-router-dom'

export default function () {

    let [mailVal, setMail] = useState("");
    let [validateMail, setValidateMail] = useState(false);

    let handleChangeMail = (e) => {
        const emailRegex = /([a-z]|[0-9]|[A-Z])+@+([0-9]|[a-z]|[A-Z])+.com/g;
        let vMail = e.target.value;
        if (!vMail.search(emailRegex)) {
            setMail(vMail);
            setValidateMail(true);
        }
        else {
            setValidateMail(false);
        }
    }
    let submit = (e) => {
        e.preventDefault();

        if (validateMail) {

            alert(`Done - ${mailVal}`)
        }
        else {
            alert("error")
        }
    }

    return (
        <footer className="page-footer pt-5 pb-5" style={{ backgroundColor: "rgb(34, 34, 40)", color: "white" }}>
            <div className="footer">
                <div className="footer-middle">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="widget contact-info">
                                    <h3 className="fw-bold">Contact Info</h3>
                                    <div className="contact-info contact-info-block">
                                        <ul className="contact-details list-unstyled">
                                            <li><i className="fa fa-phone fs-4"> </i> <strong className="fs-4"> Phone:</strong><br /> <span className=" txt fs-5">Toll Free (123) 456-7890</span></li>
                                            <li>
                                                <i className="fa fa-mail-forward fs-4 mt-4"> </i> <strong className="fs-4"> Email:</strong><br /> <span> <a className="fs-5 text-decoration-none txt" href="mailto:mail@example.com">mail@example.com</a></span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="widget follow-us">
                                    <div className="share-links">
                                        <a href="#Facebook" rel="nofollow" target="_blank" title="Facebook" className="fa fa-facebook-f text-decoration-none text-light me-4 mb-4 bord"></a>
                                        <a href="#Twitter" rel="nofollow" target="_blank" title="Twitter" className="fa fa-twitter text-decoration-none text-light me-4 mb-4 bord"></a>
                                        <a href="#Linkedin" rel="nofollow" target="_blank" title="Linkedin" className="fa fa-linkedin text-decoration-none text-light me-4 mb-4 bord"></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="widget widget_text">
                                    <h3 className="widget-title">Customer Service</h3>
                                    <div className="textwidget">
                                        <ul className="links list-unstyled">
                                            <li><NavLink className="text-decoration-none txt fs-5" to="/aboutus">About Us</NavLink></li>
                                            <li><NavLink className="text-decoration-none txt fs-5" to="/contactus">Contact Us</NavLink></li>
                                            <li><NavLink className="text-decoration-none txt fs-5" to="/login">My account</NavLink></li>
                                            <li><NavLink className="text-decoration-none txt fs-5" to="/">Orders history</NavLink></li>
                                            <li><NavLink className="text-decoration-none txt fs-5" to="/">Advanced search</NavLink></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="widget widget_text">
                                    <h3 className="widget-title">&nbsp;</h3>
                                    <div className="textwidget">
                                        <ul className="features list-unstyled">
                                            <li><NavLink className="text-decoration-none txt fs-5" to="/">Super Fast Magento Theme</NavLink></li>
                                            <li><NavLink className="text-decoration-none txt fs-5" to="/" target="_blank" rel="noopener">Top Rated Theme in Themeforest</NavLink></li>
                                            <li><NavLink className="text-decoration-none txt fs-5" to="/">33 Unique Shop Demos</NavLink></li>
                                            <li><NavLink className="text-decoration-none txt fs-5" to="/">Powerful Admin Panel</NavLink></li>
                                            <li><NavLink className="text-decoration-none txt fs-5" to="/">Mobile &amp; Retina Optimized</NavLink></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="widget widget_text">
                                    <h3 className="widget-title">Subscribe Newsletter</h3>
                                    <div className="textwidget">
                                        <p className="txt">Get all the latest information on events, sales and offers. Sign up for newsletter:</p>
                                        <div className="input-group mb-3">
                                            <input type="email" className="form-control sub" placeholder="Email Address" onChange={handleChangeMail} aria-label="Recipient's username" aria-describedby="button-addon2" />
                                            <button className="btn btn-outline-secondary text-light" type="submit" onClick={submit} id="button-addon2">SUBSCRIBE</button>
                                        </div>
                                        {!validateMail && <p className='text-danger'>Email is not valid</p>}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <div className="custom-block f-right">
                            <img className="bottom-payment-icons" src="https://www.portotheme.com/magento2/porto/pub/media/wysiwyg/smartwave/porto/footer/shop2_payment_logo.png" alt="" />
                        </div>
                        {/* <!-- <address>© Porto Magento 2021. All Rights Reserved</address> --> */}
                    </div>
                </div>
            </div>
            {/* <!-- <a href="javascript:void(0)" id="totop"><em class="">∧</em></a> --> */}
        </footer>
    )
}
