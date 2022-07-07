import { Form, Button } from 'react-bootstrap'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function FormLogin() {

    let [mailVal, setMail] = useState("");
    let [passVal, setPass] = useState("");
    let [validateMail, setValidateMail] = useState(false);
    let [validatepass, setValidatePass] = useState(false);


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
    let handleChangePass = (e) => {
        let vPass = e.target.value;
        if (vPass.length >= 4) {
            setPass(vPass);
            setValidatePass(true);
        }
        else {
            setValidatePass(false);
        }
    }

    let submit = (e) => {
        e.preventDefault();

        if (validateMail && validatepass) {

            alert(`Hello! ${mailVal}`);
        }
        else {
            alert("Error - Please Check your Data")
        }
    }

    return (
        <div className='d-flex flex-row m-2 p-2 m-lg-5 p-lg-5'>
            <div className='col-1 col-lg-4'></div>
            <div className='col-10 col-lg-4'>
                <div className='mb-2'>
                    <h2 className='fw-bold'>Registered Customers</h2>
                    <p className='fs-5'>If you have an account, sign in with your email address.</p>
                </div>
                <Form onSubmit={submit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className='fs-4'>Email</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            className='p-3 fs-4'
                            onChange={handleChangeMail}
                        />
                        {!validateMail && <p className='text-danger'>Email is not valid</p>}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className='fs-4'>Password</Form.Label>
                        <Form.Control
                            required
                            type="password"
                            placeholder="Password"
                            className='p-3 fs-4'
                            onChange={handleChangePass}
                        />
                        {!validatepass && <p className='text-danger'>Password is not valid</p>}
                    </Form.Group>
                    <Button className='w-100 btn btn-dark mt-5 ps-5 pe-5 pt-3 pb-3 fw-bold fs-4' type="submit">
                        SIGN IN
                    </Button>
                    <br />
                    <br />
                    <br />
                    <NavLink to="/register" className="text-decoration-none text-light">
                        <Button className='w-100 btn btn-dark ps-5 pe-5 pt-3 pb-3 fw-bold fs-4'>
                            CREATE AN ACCOUNT
                        </Button>
                    </NavLink>
                </Form>
            </div>
            <div className='col-1 col-lg-4'></div>
        </div>
    )
}
