import React, {Component, Fragment} from 'react';
import {Col, Container, Row, Card, Modal, Button} from "react-bootstrap";
import parse from 'html-react-parser'

class Notification extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            title:'',
            date:'',
            description: '',
        }
    }


    handleClose = () =>{
        this.setState({ show:false})
    };

    handleShow = (e) => {
        this.setState({ show:true })
        let title = e.target.getAttribute('data-title');
        let description = e.target.getAttribute('data-description');
        let date = e.target.getAttribute('data-date');
        this.setState({
            title:title,
            description:description,
            date:date
        })
    };
    render() {
        const notices = this.props.notification;
        const myView = notices.map((notice, idx) => {
            return (
                <Col key={idx.toString()} className=" p-1 " md={6} lg={6} sm={12} xs={12}>
                    <Card className="notification-card">
                        <Card.Body>
                            <h6>{notice.title}</h6>
                            <p className="py-1  px-0 text-primary m-0"><i className="fa  fa-bell"></i>   Date: {notice.date} | Status: Unread</p>
                            <Button data-date={notice.date} data-title={notice.title} data-description={notice.description} onClick={this.handleShow}>Details</Button>
                        </Card.Body>
                    </Card>
                </Col>
            )
        });
        return (
            <Fragment>
                <Container className="TopSection">
                    <Row>
                        {myView}


                    </Row>
                </Container>

                <Modal
                    show={this.state.show}
                    onHide={this.handleClose}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>{this.state.date} | {this.state.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {this.state.description ? parse(this.state.description) : ''}
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