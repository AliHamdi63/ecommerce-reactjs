import { Button, Card } from 'react-bootstrap';
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { BrandsAction } from "../../redux/Actions/BrandsAction"
import { NavLink } from 'react-router-dom';

function Brands(props) {
    // console.log(props);
    let { brandData, getBrands } = props;
    useEffect(() => {
        getBrands();
    }, []);



    return (
        <>
            <hr className='mt-5' />
            <div className='d-flex flex-wrap justify-content-center'>
                {brandData && brandData.map((item, index) => {
                    // console.log(item.url);
                    return (
                        <Card style={{ width: '18rem' }} className="p-5 text-center fs-3 border-white " key={index}>
                            <Card.Img variant="top" src={item.url} />
                        </Card>
                    )
                })}
            </div>
            <hr className='mb-5 ' />

        </>
    )
}

let mapState = (state) => {
    // console.log(state.BrandReducer);
    return {
        brandData: state.BrandReducer
    };
}

let mapDispatch = (dispatch) => {
    return {
        getBrands: () => { dispatch(BrandsAction()) }
    };
}

export default connect(mapState, mapDispatch)(Brands);