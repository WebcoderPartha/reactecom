import React, {Component, Fragment} from 'react';
import {Container, Row, Col} from "react-bootstrap";
import axios from "axios";
import AppUrl from "../../api/AppUrl";
import Notify from "../../Noty/Notify";
import {Redirect} from "react-router-dom";

class Checkout extends Component {
    constructor() {
        super();
        this.state = {
            total_qty:'',
            total_price:'',
            customer_name: '',
            customer_city: '',
            payment_method: '',
            customer_address: '',
            confirmButton: 'Confirm Order',
            pageRedirect: false
        }
    }
    nameOnChange = (e) => {
        this.setState({
            customer_name: e.target.value
        })
    }
    cityOnChange = (e) => {
        this.setState({
            customer_city: e.target.value
        })
    }
    paymentOnChange = (e) => {
        this.setState({
            payment_method: e.target.value
        })
    }
    addressOnChange = (e) => {
        this.setState({
            customer_address: e.target.value
        })
    }
    componentDidMount() {
        axios.get(AppUrl.checkout(this.props.user.id)).then(response => {
            if (response.status === 200){
                this.setState({
                    total_qty:response.data.total_qty,
                    total_price:response.data.total_price
                })
            }
        })
    }
    confirmOrder = (e) => {
        e.preventDefault();
        let user_id = this.props.user.id;
        let customer_name = this.state.customer_name;
        let customer_email = this.props.user.email;
        let customer_city = this.state.customer_city;
        let payment_method = this.state.payment_method;
        let customer_address = this.state.customer_address;
        let total_qty = this.state.total_qty;
        let total_price = this.state.total_price;

        if (customer_name.length === 0){
            Notify.warning("Customer name is required!");
        }else if(customer_city.length === 0){
            Notify.warning("Customer city is required!");
        }else if(payment_method.length === 0){
            Notify.warning("Payment Method is required!");
        }else if(customer_address.length === 0){
            Notify.warning("Customer Address is required!");
        }else{

            this.setState({
                confirmButton: 'Ordering..'
            });

            let MyFormData = new FormData();

            MyFormData.append('user_id',user_id);
            MyFormData.append('customer_name',customer_name);
            MyFormData.append('customer_email', customer_email);
            MyFormData.append('customer_city',customer_city);
            MyFormData.append('customer_address',customer_address);
            MyFormData.append('payment_method',payment_method);
            MyFormData.append('total_qty',total_qty);
            MyFormData.append('total_price',total_price);

            axios.post(AppUrl.ConfirmOrder, MyFormData).then(response => {
                if (response.status === 200){
                    Notify.success(response.data.success);
                    this.setState({
                        confirmButton: "Confirm Order",
                        pageRedirect: true
                    });
                }
            }).catch(error => {
                if (error.response){
                    console.log(error);
                }
            })

        }

    }

    pageRedirect = () => {
        if (this.state.pageRedirect === true){
            return <Redirect to={'/order/list'} />
        }
    }
    render() {
        return (
            <Fragment>

                <Container>

                    <div className="section-title text-center mb-55">
                        <h2>Checkout</h2></div>
                    <Row>
                        <Col className="p-1" lg={6} md={6} sm={12} xs={12} >
                            <div className="card">
                                <div className="card-header">
                                    Products Details
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-6">Total Qty</div>
                                        <div className="col-6">Total Amount</div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6"><b>{this.state.total_qty}</b></div>
                                        <div className="col-6"><b>${this.state.total_price}</b></div>
                                    </div>
                                </div>
                            </div>
                        </Col>

                        <Col className="p-1" lg={5} md={6} sm={12} xs={12} >
                            <div className="card">
                                <div className="card-header">
                                    Payment Information
                                </div>
                                <div className="card-body">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-md-12 p-1 col-lg-12 col-sm-12 col-12">
                                                <label className="form-label">Your Name</label>
                                                <input className="form-control" type="text" onChange={this.nameOnChange} placeholder="Customer name"/>
                                            </div>
                                            <div className="col-md-12 p-1 col-lg-12 col-sm-12 col-12">
                                                <label className="form-label">Choose City</label>
                                                <select onChange={this.cityOnChange} className="form-control">
                                                    <option value="">Choose</option>
                                                    <option value="Dhaka">Dhaka</option>
                                                    <option value="Gopalgonj">Gopalgonj</option>
                                                    <option value="Sylhet">Sylhet </option>
                                                    <option value="Khulna">Khulna </option>
                                                    <option value="Magura">Magura </option>
                                                    <option value="Faridpur">Faridpur  </option>
                                                </select>
                                            </div>
                                            <div className="col-md-12 p-1 col-lg-12 col-sm-12 col-12">
                                                <label className="form-label">Choose Payment Method</label>
                                                <select onChange={this.paymentOnChange} className="form-control">
                                                    <option value="">Choose</option>
                                                    <option value="Cash On Delivery">Cash On Delivery</option>
                                                    <option value="Cash On Delivery">Stripe</option>
                                                </select>
                                            </div>
                                            <div className="col-md-12 p-1 col-lg-12 col-sm-12 col-12">
                                                <label className="form-label">Delivery Address</label>
                                                <textarea rows={2} onChange={this.addressOnChange} className="form-control" placeholder="Customer Address"/>
                                            </div>
                                            <div className="col-md-12 p-1 col-lg-12 col-sm-12 col-12">
                                                <button onClick={this.confirmOrder} className="btn  site-btn"> {this.state.confirmButton}</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
                {this.pageRedirect()}
            </Fragment>
        );
    }
}

export default Checkout;