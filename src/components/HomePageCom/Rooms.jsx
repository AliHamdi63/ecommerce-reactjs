import { Button, Card } from 'react-bootstrap';
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { RoomAction } from "../../redux/Actions/RoomAction"
import { NavLink } from 'react-router-dom';

function Rooms(props) {
    // console.log(props);
    let { add, getRooms, remove, roomData } = props;

    useEffect(() => {
        getRooms();
    }, []);
    // const [value, setValue] = useState();

    // const refresh = () => {
    //     // it re-renders the component
    //     setValue({});
    // }
    const refreshPage = () => {
        window.location.reload();
    }
    return (
        <div className='d-md-flex flex-md-row d-flex flex-column justify-content-md-evenly align-items-center  m-5 '>
            {roomData && roomData.map((item, index) => {
                // console.log(item.url);
                function AddToCart() {
                    add(item);
                    refreshPage();
                }
                return (
                    <Card style={{ width: '30%' }} className=" mb-5 mt-5 text-center fs-3 border-white shadow-lg bg-body less" key={index}>
                        <h2 className='fw-bold mt-5 mb-4 '>{item.head}</h2>
                        <NavLink to={`/info/${item.id}`}>
                            <Card.Img className='focus' variant="top" src={item.url} />
                        </NavLink>
                        <Card.Body>
                            <Card.Title>{item.name}</Card.Title>
                            <Card.Text>
                                ${item.price}
                            </Card.Text>
                            <NavLink to={`/info/${item.id}`} className="me-5">
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
    )
}

let mapState = (state) => {
    // console.log(state.RoomProduct);
    return {
        roomData: state.RoomProduct
    };
}

let mapDispatch = (dispatch) => {
    return {
        getRooms: () => { dispatch(RoomAction()) },
        add: (data) => dispatch({ type: 'ADD', payload: data }),
        remove: (id) => dispatch({ type: 'REMOVE', payload: id })
    };
}

export default connect(mapState, mapDispatch)(Rooms);