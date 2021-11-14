import React, {Component, Fragment} from 'react';
import {Col, Container, Row, Card, Table} from "react-bootstrap";
import axios from "axios";
import AppUrl from "../../api/AppUrl";
import Notify from "../../Noty/Notify";
import {Link, Redirect} from "react-router-dom";
import CartPageLoader from "../../Placeholder/CartPageLoader";

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cartItems: [],
            userID: props.user.id,
            loaderDiv: '',
            mainDiv: 'd-none',
            pageRefresh: false
        }
    }

    componentDidMount() {
        axios.get(AppUrl.getCartItems(this.state.userID)).then(response => {
            if (response.status === 200){
                this.setState({
                    cartItems: response.data,
                    loaderDiv: 'd-none',
                    mainDiv: ''
                });
            }
        }).catch(error => {
            if (error.response){
                console.log(error)
            }
        });

    }



    removeCartItem = (e) => {
        e.preventDefault();
        let userID = e.target.getAttribute('data-user-id');
        let productID = e.target.getAttribute('data-product-id');
        axios.delete(AppUrl.removeCartItem(userID, productID)).then(response => {
            if (response.status === 200){
                Notify.success(response.data.success);
                this.setState({
                    pageRefresh:true
                })
            }
        }).catch(error => {
            if (error.response){
                console.log(error)
            }
        })
    }

    increment = (e) => {

        e.preventDefault();
        let cartID = e.target.getAttribute('data-cart-id');
        let userID = e.target.getAttribute('data-user-id');
        axios.get(AppUrl.increment(userID, cartID)).then(response => {
            if (response.status === 200){
                Notify.success(response.data.success);
                this.setState({
                    pageRefresh:true
                })
            }
        })
    }

    decrement = (e) => {

        e.preventDefault();
        let cartID = e.target.getAttribute('data-cart-id');
        let userID = e.target.getAttribute('data-user-id');
        axios.get(AppUrl.decrement(userID, cartID)).then(response => {
            if (response.status === 200){
                Notify.success(response.data.success);
                this.setState({
                    pageRefresh:true
                })
            }
        })
    }
    pageRefresh = () => {
        let URL = window.location
        if (this.state.pageRefresh === true){
            return <Redirect to={URL} />
        }
    }
    render() {

        const cartItems = this.state.cartItems;
        let MyView;

        let total = 0;
        let totalQty = 0;
        if (cartItems.length > 0){
            MyView = cartItems.map((cart, idx) => {
                total = total+parseInt(cart.sub_total);
                totalQty = totalQty+parseInt(cart.qty)
                return (

                    <tr key={idx.toString()}>
                        <td>{idx+1}</td>
                        <td>
                            <img className="cartpageimage m-0" alt=""  src={cart.product_image} />
                        </td>
                        <td>{cart.product_name}</td>
                        <td width="290">
                            <div className="cartQuantity">
                                <div className="cartElement">
                                    {cart.qty === '1' ? (
                                        <button disabled className="btn btn-danger">-</button>
                                    ) : (
                                        <div data-cart-id={cart.id} data-user-id={cart.user_id} onClick={this.decrement} className="btn btn-danger">-</div>
                                    )}
                                </div>
                                <div className="cartElement cartqtyfield">

                                    <input id="quantityField" data-qty={cart.qty} readOnly value={cart.qty} className="form-control" type="text"/>
                                </div>
                                <div className="cartElement">
                                    <div data-cart-id={cart.id} data-user-id={cart.user_id} onClick={this.increment} className="btn-primary btn">+</div>
                                </div>
                            </div>
                        </td>
                        <td>$ {cart.unit_price}</td>
                        <td>$ {cart.sub_total}</td>
                        <td><span data-product-id={cart.product_id} data-user-id={cart.user_id} onClick={this.removeCartItem} className="btn btn-danger"><i className="fa fa-times"></i></span></td>
                    </tr>
                )
            })


            return (
                <Fragment>

                    <Container className="pt-1">

                        <div className="section-title text-center mb-55"><h2>Product Cart List</h2>
                        </div>
                        <div className={this.state.loaderDiv}>
                            <CartPageLoader />
                        </div>
                        <Row className={this.state.mainDiv}>
                            <Col className="p-1" lg={12} md={12} sm={12} xs={12} >
                                <Table hover>
                                    <thead>
                                    <tr>
                                        <th>SL</th>
                                        <th>Image</th>
                                        <th>Name</th>
                                        <th>Quantity</th>
                                        <th>Unit Price</th>
                                        <th>Subtotal</th>
                                        <th>Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                        {MyView}
                                    </tbody>
                                </Table>
                            </Col>


                            {this.state.cartItems.length > 0 ? (
                                <Col className="p-1" lg={12} md={12} sm={12} xs={12} >
                                    <Card >
                                        <Card.Body>
                                            <Row>
                                                <Col md={4} lg={4} sm={6} xs={6}></Col>
                                                <Col md={4} lg={4} sm={6} xs={6}></Col>
                                                <Col md={4} lg={4} sm={6} xs={6}>
                                                    <h5> Total Item = {totalQty} </h5>
                                                    <h5>Total Price = ${total}</h5>
                                                    <Link to="/checkout" className="btn btn-block w-100 mt-3  site-btn"><i className="fa fa-shopping-cart"></i> CheckOut </Link>
                                                </Col>
                                            </Row>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ) : ''}
                        </Row>
                    </Container>
                    {this.pageRefresh()}
                </Fragment>
            );
        }else{
            return (
                <Fragment>

                    <Container className="pt-1">

                        <div className="section-title text-center mb-55"><h2>Product Cart List</h2>
                        </div>
                        <div className={this.state.loaderDiv}>
                            <CartPageLoader />
                        </div>
                        <h2 className="text-center">Cart is empty!</h2>
                    </Container>
                    {this.pageRefresh()}
                </Fragment>
            );
        }
    }
}

export default Cart;