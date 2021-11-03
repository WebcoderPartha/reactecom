import React, {Component, Fragment} from 'react';
import {Col, Container, Row, Card, Modal, Button} from "react-bootstrap";

class Notification extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
    }
    handleClose = () =>{
        this.setState({ show:false})
    };

    handleShow = () => {
        this.setState({ show:true })
    };
    render() {
        return (
            <Fragment>
                <Container className="TopSection">
                    <Row>
                        <Col className=" p-1 " md={6} lg={6} sm={12} xs={12}>
                            <Card onClick={this.handleShow} className="notification-card">
                                <Card.Body>
                                    <h6> Lorem Ipsum is simply dummy text of the printing</h6>
                                    <p className="py-1  px-0 text-primary m-0"><i className="fa  fa-bell"></i>   Date: 22/12/2010 | Status: Unread</p>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col className=" p-1 " md={6} lg={6} sm={12} xs={12}>
                            <Card onClick={this.handleShow} className="notification-card">
                                <Card.Body>
                                    <h6> Lorem Ipsum is simply dummy text of the printing</h6>
                                    <p className="py-1   px-0 text-primary m-0"><i className="fa  fa-bell"></i>   Date: 22/12/2010 | Status: Unread</p>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col className="p-1" md={6} lg={6} sm={12} xs={12}>
                            <Card onClick={this.handleShow}  className="notification-card">
                                <Card.Body>
                                    <h6> Lorem Ipsum is simply dummy text of the printing</h6>
                                    <p className="py-1  px-0 text-success m-0"><i className="fa  fa-bell"></i>   Date: 22/12/2010 | Status: Read</p>
                                </Card.Body>
                            </Card>

                        </Col>

                        <Col className="p-1" md={6} lg={6} sm={12} xs={12}>

                            <Card onClick={this.handleShow} className="notification-card">
                                <Card.Body>
                                    <h5> Lorem Ipsum is simply dummy text of the printing</h5>
                                    <p className="py-1  px-0 text-success m-0"><i className="fa fa-bell"></i>   Date: 22/12/2010 | Status: Read</p>
                                </Card.Body>
                            </Card>

                        </Col>

                        <Col className="p-1" md={6} lg={6} sm={12} xs={12}>

                            <Card onClick={this.handleShow} className="notification-card">
                                <Card.Body>
                                    <h6> Lorem Ipsum is simply dummy text of the printing</h6>
                                    <p className="py-1  px-0 text-success m-0"><i className="fa  fa-bell"></i>   Date: 22/12/2010 | Status: Read</p>
                                </Card.Body>
                            </Card>

                        </Col>

                        <Col className="p-1" md={6} lg={6} sm={12} xs={12}>

                            <Card onClick={this.handleShow} className="notification-card">
                                <Card.Body>
                                    <h6> Lorem Ipsum is simply dummy text of the printing</h6>
                                    <p className="py-1 px-0 text-success m-0"><i className="fa  fa-bell"></i>   Date: 22/12/2010 | Status: Read</p>
                                </Card.Body>
                            </Card>

                        </Col>

                    </Row>
                </Container>

                <Modal
                    show={this.state.show}
                    onHide={this.handleClose}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Modal title</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        I will not close if you click outside me. Don't even try to press
                        escape key.
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.handleClose} variant="primary">Read</Button>
                    </Modal.Footer>
                </Modal>
            </Fragment>
        );
    }
}

export default Notification;