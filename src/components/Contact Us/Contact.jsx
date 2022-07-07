import { Form, Button } from 'react-bootstrap'
import React from 'react'
import { useState } from 'react';

export default function Contact() {

    const nameRegex = /^[a-zA-Z]{3,}$/gm;

    let [nameVal, setName] = useState("");
    let [mailVal, setMail] = useState("");
    let [phoneVal, setPhone] = useState("");
    let [commentVal, setComment] = useState("");
    let [validateName, setValidateName] = useState(false);
    let [validateMail, setValidateMail] = useState(false);
    let [validatephone, setValidatePhone] = useState(false);
    let [validateComment, setValidateComment] = useState(false);


    let handleChangeName = (e) => {
        let vName = e.target.value;
        if (vName.length >= 3 && !vName.search(nameRegex)) {
            setName(vName);
            setValidateName(true);
        }
        else {
            setValidateName(false);
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
    let handleChangePhone = (e) => {
        let vPhone = e.target.value;
        if (vPhone.length === 11) {
            setPhone(vPhone);
            setValidatePhone(true);
        }
        else {
            setValidatePhone(false);
        }
    }
    let handleChangeComment = (e) => {
        let vComment = e.target.value;
        if (vComment != "") {
            setComment(vComment);
            setValidateComment(true);
        }
        else {
            setValidateComment(false);
        }
    }

    let submit = (e) => {
        e.preventDefault();

        if (validateName && validateMail && validatephone && validateComment) {

            alert(`Done - ${nameVal}`)
        }
        else {
            alert("Error - Please Check your Data")
        }
    }

    return (
        <>
            <div className='d-md-flex flex-md-row m-2 p-2 m-lg-5 p-lg-5 d-flex flex-column align-items-center'>
                <div className='col-6 col-lg-4'></div>
                <div className='col-10 col-lg-4'>
                    <Form onSubmit={submit}>
                        <Form.Group className='mb-3' controlId="validationCustom01">
                            <h2 className='mb-3' >Write to <strong>US</strong></h2>

                            <Form.Label className='fs-4'>Name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Name"
                                className='p-3 fs-4'
                                onChange={handleChangeName}
                            />
                            {!validateName && <p className='text-danger'>The Name must be characters and not valid</p>}
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className='mb-3' controlId="formBasicEmail">
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
                            <Form.Label className='fs-4'>Phone Number</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Phone Number"
                                className='p-3 fs-4'
                                onChange={handleChangePhone}
                            />
                            {!validatephone && <p className='text-danger'>Phone Number is not valid</p>}
                        </Form.Group>
                        <div className="fields col-md-6 mb-5">
                            <div className="field comment required">
                                <label className="fs-5 mb-3"><span>What’s on your mind?</span></label>
                                <div className="control">
                                    <textarea onChange={handleChangeComment} name="comment" id="comment" title="What’s on your mind?" className="input-text fs-5 w-100" rows="5" data-validate="{required:true}"></textarea>
                                </div>
                            </div>
                            {!validateComment && <p className='text-danger'>Please Write a Comment</p>}
                        </div>

                        <Button type='submit' className='w-50 btn btn-danger ps-5 pe-5 pt-3 pb-3 fw-bold fs-4'>
                            Submit
                        </Button>
                    </Form>
                </div>
                <div className='col-6 col-lg-4 ms-lg-5 mt-md-0 mt-4'>
                    <h2 className='mb-3' >Contact Details</h2>
                    <div className='d-flex flex-row align-items-center mb-3'>
                        <span className='fa fa-phone fs-3 bg-danger text-light p-4 rounded-circle me-3'></span>
                        <div className='fs-5 mt-2'>
                            <p>0201 203 2032</p>
                            <p>0201 203 2032</p>
                        </div>
                    </div>
                    <div className='d-flex flex-row align-items-center mb-3'>
                        <span className='fa fa-mobile fs-2 bg-danger text-light p-4 rounded-circle me-4'></span>
                        <div className='fs-5 mt-2'>
                            <p>201-123-3922</p>
                            <p>302-123-3928 </p>
                        </div>
                    </div>
                    <div className='d-flex flex-row align-items-center mb-3'>
                        <span className='fa fa-mail-forward fs-4 bg-danger text-light p-4 rounded-circle me-3'></span>
                        <div className='fs-5 mt-2'>
                            <p>ali@gmail.com</p>
                        </div>
                    </div>
                    <div className='d-flex flex-row align-items-center mb-3'>
                        <span className='fa fa-skype fs-3 bg-danger text-light p-4 rounded-circle me-3'></span>
                        <div className='fs-5 mt-2'>
                            <p>Ali_skype</p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
