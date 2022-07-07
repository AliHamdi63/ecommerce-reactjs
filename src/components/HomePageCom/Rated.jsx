import { Button, Card } from 'react-bootstrap';
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { RatedAction } from "../../redux/Actions/RatedAction"
import { NavLink } from 'react-router-dom';

function Rated(props) {
    // console.log(props);
    let { ratedData, getRated, add, remove } = props;

    useEffect(() => {
        getRated();
    }, []);
    const refreshPage = () => {
        window.location.reload();
    }
    return (
        <div>
            {/* <h3 className='fw-bold mt-5 ms-5 mb-5 text-left'>LATEST PRODUCTS</h3> */}

            {ratedData && ratedData.map((item, index) => {
                function AddToCart() {
                    add(item);
                    refreshPage();
                }
                return (
                    <div className='d-md-flex flex-md-row d-flex flex-column mb-5 ms-5 mt-5 pb-md-0 pb-5 align-items-center text-center shadow-lg bg-body rounded' style={{ width: "100%" }} key={index}>
                        <img src={item.url} width="150px" className='focus m-5' />
                        <div className='ms-0 ms-md-2 '>
                            <h1 className=''>{item.name}</h1>
                            {/* <br/> */}
                            <h3 className=''>${item.price}</h3>
                            <NavLink to={`/info/${item.id}`} className="me-5">
                                <Button className='btn view fs-4 pe-4 ps-4 mt-5'>View</Button>
                            </NavLink>
                            {/* <br /> */}
                            <button className='btn addc fs-4 pe-2 ps-2 mt-5' onClick={AddToCart}>
                                <span className="fa fa-shopping-basket ms-2 me-2 fs-3"></span>
                            </button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

let mapState = (state) => {
    // console.log(state.RatedReducer);
    return {
        ratedData: state.RatedReducer
    };
}

let mapDispatch = (dispatch) => {
    return {
        getRated: () => { dispatch(RatedAction()) },
        add: (data) => dispatch({ type: 'ADD', payload: data }),
        remove: (id) => dispatch({ type: 'REMOVE', payload: id })
    };
}

export default connect(mapState, mapDispatch)(Rated);