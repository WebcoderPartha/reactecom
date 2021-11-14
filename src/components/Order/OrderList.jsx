import React, {Component, Fragment} from 'react';
import {Badge, Card, Col, Container, ListGroup, ListGroupItem, Row, Table} from "react-bootstrap";
import {Link} from "react-router-dom";
import axios from "axios";
import AppUrl from "../../api/AppUrl";
import CartPageLoader from "../../Placeholder/CartPageLoader";

class OrderList extends Component {
    constructor() {
        super();
        this.state = {
            orderList: [],
            loaderDiv: '',
            mainDiv: 'd-none'
        }
    }
    componentDidMount() {
        window.scroll(0, 0);
        axios.get(AppUrl.getOrderList(this.props.user.email)).then(response => {
            if (response.status === 200){
                this.setState({
                    orderList:response.data,
                    loaderDiv: 'd-none',
                    mainDiv: ''
                })
            }
        }).catch(error => {
            if (error.response){
                console.log(error.response)
            }
        });
    }
    orderStatus = (status) => {
        if (status === '0'){
            return (
                <Badge bg="warning">Pending</Badge>
            )
        }else if(status === '1'){
            return (
                <Badge bg="primary">Confirmed</Badge>
            )
        }else if(status === '2'){
            return (
                <Badge bg="info">Picked</Badge>
            )
        }else if(status === '3'){
            return (
                <Badge bg="success">Delivered</Badge>
            )
        }else{
            return (
                <Badge bg="danger">Cancelled</Badge>
            )
        }
    }
    render() {

        let orderList = this.state.orderList;
        let myView;
        if (orderList.length > 0){
            myView = orderList.map((order, idx)=> {
               return (
                   <tr key={idx.toString()}>
                       <td>{order.date}</td>
                       <td>{order.invoice_no}</td>
                       <td>{order.payment_method}</td>
                       <td>${order.total_price}</td>
                       <td>
                           {this.orderStatus(order.status)}
                       </td>
                       <td><Link className="btn btn-success" to={"/order/"+order.invoice_no}><i className="fa fa-eye"></i></Link></td>
                   </tr>
               )
            });


        return (
            <Fragment>
                <Container className="pt-5">
                    <Row>
                        <Col lg={4} md={4} sm={12} >

                            <Card style={{ width: '18rem' }} className="text-center d-block">
                                <Card.Img variant="top" src="https://www.pngarts.com/files/10/Default-Profile-Picture-Download-PNG-Image.png" className="userprofiless" alt="" />

                                <ListGroup className="list-group-flush">

                                    <ListGroupItem> <Link className="text-link" to="/order/list"> <p className="product-name-on-card"> Order List </p></Link> </ListGroupItem>

                                    <ListGroupItem> <Link className="text-link" to="/"> <p className="product-name-on-card">Edit Profile</p></Link> </ListGroupItem>

                                    <ListGroupItem> <Link className="text-link" to="/"> <p className="product-name-on-card">Change Password</p></Link> </ListGroupItem>
                                </ListGroup>

                            </Card>


                        </Col>
                        <Col lg={8} md={8} sm={12} className={this.state.loaderDiv}>
                            <CartPageLoader />
                        </Col>
                        <Col lg={8} md={8} sm={12} className={this.state.mainDiv}>
                            <Card style={{ width: '18rem' }} className="text-center d-block">
                                <Card.Header> <div className="section-title text-center m-0">
                                    <h2>ORDER LIST</h2>
                                </div></Card.Header>
                                <Card.Body>
                                    <Table striped bordered hover>
                                        <thead>
                                        <tr>
                                            <th>Date</th>
                                            <th>Invoice No</th>
                                            <th>Payment Method</th>
                                            <th>Total</th>
                                            <th>Status</th>
                                            <th>Action</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {myView}
                                        </tbody>
                                    </Table>
                                </Card.Body>
                            </Card>
                        </Col>


                    </Row>
                </Container>
            </Fragment>
        );
        }else{
            return (
                <Fragment>
                    <Container className="pt-5">
                        <Row>
                            <Col lg={4} md={4} sm={12} >

                                <Card style={{ width: '18rem' }} className="text-center d-block">
                                    <Card.Img variant="top" src="https://www.pngarts.com/files/10/Default-Profile-Picture-Download-PNG-Image.png" className="userprofiless" alt="" />

                                    <ListGroup className="list-group-flush">

                                        <ListGroupItem> <Link className="text-link" to="/order/list"> <p className="product-name-on-card"> Order List </p></Link> </ListGroupItem>

                                        <ListGroupItem> <Link className="text-link" to="/"> <p className="product-name-on-card">Edit Profile</p></Link> </ListGroupItem>

                                        <ListGroupItem> <Link className="text-link" to="/"> <p className="product-name-on-card">Change Password</p></Link> </ListGroupItem>
                                    </ListGroup>

                                </Card>


                            </Col>
                            <Col lg={8} md={8} sm={12} className={this.state.loaderDiv}>
                                <CartPageLoader />
                            </Col>
                            <Col lg={8} md={8} sm={12}  className={this.state.mainDiv}>
                                <Card style={{ width: '18rem' }} className="text-center d-block">
                                    <Card.Header> <div className="section-title text-center m-0">
                                        <h2>ORDER LIST</h2>
                                    </div></Card.Header>
                                    <Card.Body>
                                        <h4>No Order Found</h4>
                                    </Card.Body>
                                </Card>
                            </Col>


                        </Row>
                    </Container>
                </Fragment>
            );
        }
    }
}

export default OrderList;