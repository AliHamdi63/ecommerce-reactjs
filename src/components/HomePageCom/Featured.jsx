import { Button, Card } from 'react-bootstrap';
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { FeaturedActions } from "../../redux/Actions/FeaturedActions"
import { NavLink } from 'react-router-dom';

function Featured(props) {
    // console.log(props);
    let { featuredData, getFeatures, add, remove } = props;

    useEffect(() => {
        getFeatures();
    }, []);

    const refreshPage = () => {
        window.location.reload();
    }
    return (
        <>
            <h2 className='fw-bold mt-5 mb-md-5 mb-5  text-center'>FEATURED PRODUCTS</h2>
            <div className='d-flex flex-wrap justify-content-center mb-5'>
                {featuredData && featuredData.map((item, index) => {
                    // console.log(item.url);
                    function AddToCart() {
                        add(item);
                        refreshPage();
                    }
                    return (
                        <Card style={{ width: '30rem' }} className="text-center fs-3 border-white shadow-lg bg-body rounded me-md-3 m-5 mb-3" key={index}>
                            <NavLink to={`/info/${item.id}`}>
                                <Card.Img className='focus' variant="top" src={item.url} />
                            </NavLink>
                            <Card.Body>
                                <Card.Title>{item.name}</Card.Title>
                                <Card.Text>
                                    ${item.price}
                                </Card.Text>
                                <NavLink to={`/info/${item.id}`} className="me-sm-5 me-5">
                                    <Button className='btn view fs-4 pe-4 ps-4'>View</Button>
                                </NavLink>
                                <button className='btn addc fs-4 pe-2 ps-2' onClick={AddToCart}>
                                    <span className="fa fa-shopping-basket ms-2 me-2 fs-3"></span>
                                </button>
                            </Card.Body>
                        </Card>
                    )
                })}
            </div>
        </>
    )
}

let mapState = (state) => {
    // console.log(state.FeaturedReducer);
    return {
        featuredData: state.FeaturedReducer
    };
}

let mapDispatch = (dispatch) => {
    return {
        getFeatures: () => { dispatch(FeaturedActions()) },
        add: (data) => dispatch({ type: 'ADD', payload: data }),
        remove: (id) => dispatch({ type: 'REMOVE', payload: id })
    };
}

export default connect(mapState, mapDispatch)(Featured);