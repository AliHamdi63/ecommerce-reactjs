import { Button, Card } from 'react-bootstrap';
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { LastestAction } from "../../redux/Actions/LastestAction"
import { NavLink } from 'react-router-dom';

function Lastest(props) {
    // console.log(props);
    let { lastestData, getLastest, add, remove } = props;

    useEffect(() => {
        getLastest();
    }, []);
    const refreshPage = () => {
        window.location.reload();
    }
    return (
        <div>
            {/* <h3 className='fw-bold mt-5 ms-5 mb-5 text-left'>TOP RATED PRODUCTS</h3> */}

            {lastestData && lastestData.map((item, index) => {
                function AddToCart() {
                    add(item);
                    refreshPage();
                }
                return (
                    <div className='d-md-flex flex-md-row d-flex flex-column mb-5 ms-5 mt-5 pb-md-0 pb-5 align-items-center text-center shadow-lg bg-body rounded' style={{ width: "100%" }} key={index}>
                        <img src={item.url} width="150px" className='m-5 focus' />
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
    // console.log(state.LastestReducer);lastest
    return {
        lastestData: state.LastestReducer
    };
}

let mapDispatch = (dispatch) => {
    return {
        getLastest: () => { dispatch(LastestAction()) },
        add: (data) => dispatch({ type: 'ADD', payload: data }),
        remove: (id) => dispatch({ type: 'REMOVE', payload: id })
    };
}

export default connect(mapState, mapDispatch)(Lastest);