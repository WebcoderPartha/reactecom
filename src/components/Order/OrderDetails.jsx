import React, {Component, Fragment} from 'react';
import {Card, Col, Container, ListGroup, ListGroupItem, Modal, Row, Table, Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import axios from "axios";
import AppUrl from "../../api/AppUrl";
import ReactStars from "react-rating-stars-component";
import Notify from "../../Noty/Notify";
// import Rating from "react-rating";

class OrderDetails extends Component {
    constructor(props) {
        super();
        this.state = {
            order:'',
            orderDetails:[],
            rating:0,
            invoiceNo:props.invoiceNo,
            show:false,
            product_id:'',
            product_name: '',
            comment: '',
            user_id: props.user.id
        }
    }

    componentDidMount() {
        axios.get(AppUrl.getInvoiceByOrderList(this.state.invoiceNo)).then(response => {
            if (response.status === 200){
                this.setState({
                    order: response.data[0],
                    orderDetails: response.data[0].order_detail,
                })
            }
        }).catch(error => {
            if (error.response){
                console.log(error.response);
            }
        })

    }
    colorShow = (color) => {
        if (color !== null){
            return color
        }else{
            return 'N/A'
        }
    }
    sizeShow = (size) => {
        if (size !== null){
            return size
        }else{
            return 'N/A'
        }
    }
    show = (e) => {
        let product_id = e.target.getAttribute('data-product-id');
        let product_name = e.target.getAttribute('data-product-name');
        this.setState({
            show:true,
            product_id: product_id,
            product_name: product_name,
        });
    }
    handleClose = () => {
        this.setState({
            show:false,
            rating: 0
        })
    }

    rating = (e) => {
        this.setState({
            rating:e
        })
    }
    commentOnChange =(e) =>{
        this.setState({
            comment:e.target.value
        })
    }

    ReviewSubmit = (e) => {
        e.preventDefault();
        let userid = this.state.user_id;
        let productid = this.state.product_id;
        let comment = this.state.comment;
        let rating = this.state.rating

        if (rating  < 0.5){
            Notify.warning("Rating is required!")
        }else if(comment.length === 0){
            Notify.warning("Write a review required!")
        }else{

            let ReviewData = new FormData();
            ReviewData.append('user_id', userid);
            ReviewData.append('product_id', productid);
            ReviewData.append('comment', comment);
            ReviewData.append('star', rating);

            axios.post(AppUrl.ReviewStore, ReviewData).then(response => {
                if (response.status === 200){
                    Notify.success(response.data.success);
                    this.setState({
                        show:false,
                        rating:0
                    })
                }
            }).catch(error => {
                if (error.response){
                    console.log(error.response)
                }
            })

        }
    }

    render() {
        const products = this.state.orderDetails
        const myView = products.map((product, idx)=>{
            return (
                <tr key={idx.toString()}>
                    <td>{idx+1}</td>
                    <td><img src={product.product_image} className="cartpageimage" alt=""/></td>
                    <td>{product.product_name}</td>
                    <td>{this.colorShow(product.color)}</td>
                    <td>{this.sizeShow(product.size)}</td>
                    <td>{product.qty}</td>
                    <td>${product.unit_price}</td>
                    <td>${product.sub_total}</td>
                    <td><div onClick={this.show} data-product-name={product.product_name} data-product-id={product.product_id} className="btn btn-success">Review</div></td>
                </tr>
            )
        })
        return (
            <Fragment>
                <Container className="pt-5">
                    <Row>
                        <Col lg={2} md={2} sm={12} >

                            <Card style={{ width: '18rem' }} className="text-center d-block">
                                <Card.Img variant="top" src="https://www.pngarts.com/files/10/Default-Profile-Picture-Download-PNG-Image.png" className="userprofiless" alt="" />

                                <ListGroup className="list-group-flush">

                                    <ListGroupItem> <Link className="text-link" to="/order/list"> <p className="product-name-on-card"> Order List </p></Link> </ListGroupItem>

                                    <ListGroupItem> <Link className="text-link" to="/"> <p className="product-name-on-card">Edit Profile</p></Link> </ListGroupItem>

                                    <ListGroupItem> <Link className="text-link" to="/"> <p className="product-name-on-card">Change Password</p></Link> </ListGroupItem>
                                </ListGroup>

                            </Card>


                        </Col>


                        <Col lg={10} md={10} sm={12} >
                            <div className="section-title text-center m-0">
                                <h2>ORDER DETAILS ( Invoice No - {this.props.invoiceNo} )</h2>
                            </div>
                            <div className="row mt-3">
                                <div className="col-lg-6 col-md-6">
                                    <Card style={{ width: '18rem' }} className="text-center d-block">
                                        <Card.Header>
                                            <h5>Payment Information</h5>
                                        </Card.Header>
                                        <Card.Body>
                                            <ListGroup>
                                                <ListGroup.Item>Transaction Date: <b>{this.state.order.date}</b></ListGroup.Item>
                                                <ListGroup.Item>Payment Method: <b>{this.state.order.payment_method}</b></ListGroup.Item>
                                                <ListGroup.Item>Total: <b>${this.state.order.total_price}</b></ListGroup.Item>
                                            </ListGroup>
                                        </Card.Body>
                                    </Card>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <Card style={{ width: '18rem' }} className="text-center d-block">
                                        <Card.Header>
                                            <h5>Shipping Information</h5>
                                        </Card.Header>
                                        <Card.Body>
                                            <ListGroup>
                                                <ListGroup.Item>Name: <b>{this.state.order.customer_name}</b></ListGroup.Item>
                                                <ListGroup.Item>Email: <b>{this.state.order.customer_email}</b></ListGroup.Item>
                                                <ListGroup.Item>City: <b>{this.state.order.customer_city}</b></ListGroup.Item>
                                                <ListGroup.Item>Address: <b>{this.state.order.customer_address}</b></ListGroup.Item>
                                            </ListGroup>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-lg-12 col-md-12">
                                    <Card.Header className="text-center">
                                        <h5>Item List</h5>
                                    </Card.Header>
                                    <Table striped bordered hover>
                                        <thead>
                                            <tr>
                                                <th>SL</th>
                                                <th>Image</th>
                                                <th>Item Name</th>
                                                <th>Color</th>
                                                <th>Size</th>
                                                <th>Qty</th>
                                                <th>Unit Price</th>
                                                <th>Sub Total</th>
                                                <th>Review</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        {myView}
                                            <tr>
                                                <td colSpan={6}></td>
                                                <td><b>Total Price</b>:</td>
                                                <td><b>${this.state.order.total_price}</b></td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Modal show={this.state.show} centered onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.state.product_name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <ReactStars value={this.state.rating} onChange={this.rating} count={5} size={40} activeColor="orange" isHalf={true}
                                    emptyIcon={<i className="far fa-star"></i>}
                                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                                    fullIcon={<i className="fa fa-star"></i>} />
                        <label htmlFor="review">Write a review:</label>
                        <textarea onChange={this.commentOnChange} className="form-control" id="review" rows="4"></textarea>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={this.ReviewSubmit}>
                            Save
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Fragment>
        );
    }
}

export default OrderDetails;