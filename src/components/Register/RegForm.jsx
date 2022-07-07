import { Form, Button } from 'react-bootstrap'
import React from 'react'
import { useState } from 'react';

export default function RegForm() {

    const nameRegex = /^[a-zA-Z]{3,}$/gm;

    let [fNameVal, setFname] = useState("");
    let [lNameVal, setLname] = useState("");
    let [mailVal, setMail] = useState("");
    let [passVal, setPass] = useState("");
    let [validateFname, setValidateFname] = useState(false);
    let [validateLname, setValidateLname] = useState(false);
    let [validateMail, setValidateMail] = useState(false);
    let [validatepass, setValidatePass] = useState(false);



    let handleChangeFname = (e) => {
        let vName = e.target.value;
        if (vName.length >= 3 && !vName.search(nameRegex)) {
            setFname(vName);
            setValidateFname(true);
        }
        else {
            setValidateFname(false);
        }
    }
    let handleChangeLname = (e) => {
        let vName = e.target.value;
        if (vName.length >= 3 && !vName.search(nameRegex)) {
            setLname(vName);
            setValidateLname(true);
        }
        else {
            setValidateLname(false);
        }
    }
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

        if (validateFname && validateLname && validateMail && validatepass) {

            alert(`Welcome! ${fNameVal} ${lNameVal}`);
        }
        else {
            alert("Error - Please Check your Data")
        }
    }

    return (
        <div className='d-flex flex-row m-5 p-5 '>
            <div className='col col-lg-4'></div>
            <div className='col-12 col-lg-4'>
                <Form onSubmit={submit}>
                    <Form.Group className='mb-3' controlId="validationCustom01">
                        <h2 className='mb-3' >Personal Information</h2>

                        <Form.Label className='fs-4'>First name</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="First name"
                            className='p-3 fs-4'
                            onChange={handleChangeFname}
                        />
                        {!validateFname && <p className='text-danger'>The First Name must be characters and not valid</p>}
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className='mb-5' controlId="validationCustom02">
                        <Form.Label className='fs-4'>Last name</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Last name"
                            className='p-3 fs-4'
                            onChange={handleChangeLname}
                        />
                        {!validateLname && <p className='text-danger'>The Last Name must be characters and not valid</p>}
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className='mb-3' controlId="formBasicEmail">
                        <h2 className='mb-3 mt-4' >Sign-in Information</h2>

                        <Form.Label className='fs-4'>Email</Form.Label>
                        <Form.Control
                            // required
                            type="email"
                            placeholder="Enter email"
                            className='p-3 fs-4'
                            onChange={handleChangeMail}
                        />
                        {!validateMail && <p className='text-danger'>Email is not valid</p>}
                    </Form.Group>

                    <Form.Group className='mb-5' controlId="formBasicPassword">
                        <Form.Label className='fs-4'>Password</Form.Label>
                        <Form.Control required
                            type="password"
                            placeholder="Password"
                            className='p-3 fs-4'
                            onChange={handleChangePass}
                        />
                        {!validatepass && <p className='text-danger'>Password is not valid</p>}
                    </Form.Group>
                    <Button type="submit" className='w-100 btn btn-dark ps-5 pe-5 pt-3 pb-3 fw-bold fs-4'>
                        CREATE AN ACCOUNT
                    </Button>
                </Form>
            </div>
            <div className='col col-lg-4'></div>
        </div>
    )
}
