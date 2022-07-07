import { Button, Card, Form } from 'react-bootstrap';
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { SearchAction } from "../redux/Actions/SearchAction"
import { NavLink } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';

function Search(props) {
    document.title = "Search";

    // console.log(props);
    let { searchData, getSearch, add, remove } = props;
    useEffect(() => {
        getSearch();
    }, []);

    // console.log(searchData);

    let [data, setData] = useState("");
    let handleData = (e) => {
        let Val = e.target.value;
        Val = Val.toLowerCase();
        // console.log(Val);
        setData(Val);
    }

    let filteredData = searchData.filter((ele) => {
        // console.log(ele.name.split(""));
        let name = ele.name.toLowerCase();
        let splitName = name.split("");
        // console.log(splitName);

        let istrue = splitName.some((element) => element === data)
        // console.log(istrue);
        if (istrue || data === name) {
            return ele;
        }
        else {
            // console.log(data);
            return 0;
        }
    })

    const refreshPage = () => {
        window.location.reload();
    }

    return (
        <>
            <NavBar />
            <div className='d-flex flex-column justify-content-center align-items-center mt-5 mb-5'>
                <Form className='mt-5 mb-5 w-75'>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Control type="text"
                            className='fs-4 p-3 pe-5 w-100'
                            placeholder="Search by Product name  . . . . "
                            name='search'
                            // style={{width:"400px"}}
                            onChange={handleData}
                        />
                    </Form.Group>
                </Form>
                <div className='d-md-flex flex-md-row d-flex flex-wrap flex-column justify-content-md-center mb-5'>
                    {filteredData && filteredData.map((item, index) => {
                        // console.log(item.url);
                        function AddToCart() {
                            add(item);
                            refreshPage();
                        }
                        return (
                            <Card style={{ width: '20rem' }} className="me-md-5 mb-5 text-center fs-3 shadow-lg bg-body rounded" key={index}>
                                <NavLink to={`/info/${item.id}`}>
                                    <Card.Img className='focus' variant="top" src={item.url} />
                                </NavLink>
                                <Card.Body>
                                    <Card.Title>{item.name}</Card.Title>
                                    <Card.Text>
                                        ${item.price}
                                    </Card.Text>
                                    <NavLink to={`/info/${item.id}`}>
                                        <Button className='btn view fs-4 pe-4 ps-4 mt-3 me-3'>View</Button>
                                    </NavLink>
                                    <button className='btn addc fs-4 pe-4 ps-4 mt-3' onClick={AddToCart}>
                                        <span className="fa fa-shopping-basket ms-2 me-2 fs-3"></span>
                                    </button>
                                </Card.Body>
                                <Card.Body>

                                </Card.Body>
                            </Card>
                        )
                    })}
                </div>
            </div>

            <Footer />
        </>
    )
}

let mapState = (state) => {
    // console.log(state.CartReducer);
    // console.log(state);
    return {
        searchData: state.SearchReducer
    };
}

let mapDispatch = (dispatch) => {
    return {
        getSearch: () => { dispatch(SearchAction()) },
        add: (data) => dispatch({ type: 'ADD', payload: data }),
        remove: (id) => dispatch({ type: 'REMOVE', payload: id })

    };
}

export default connect(mapState, mapDispatch)(Search);