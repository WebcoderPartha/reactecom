import React, {Component, Fragment} from 'react';
import {Button, Card, Col, Container, Form, ListGroup, ListGroupItem, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import Notify from "../../Noty/Notify";
import axios from "axios";
import AppUrl from "../../api/AppUrl";

class ChangePassword extends Component {
    constructor() {
        super();
        this.state = {
            old_password: '',
            password: '',
            confirm_password: ''
        }
        this.oldpassOnChange = this.oldpassOnChange.bind(this);
        this.newPassOnChange = this.newPassOnChange.bind(this);
        this.confPassOnChange = this.confPassOnChange.bind(this);
    }

    oldpassOnChange(e){
        this.setState({
            old_password:e.target.value
        });
    }
    newPassOnChange(e){
        this.setState({
            password:e.target.value
        });
    }
    confPassOnChange(e){
        this.setState({
            confirm_password:e.target.value
        });
    }

    updatePassword = (e) => {

        e.preventDefault();

        let old_password = this.state.old_password;
        let password = this.state.password;
        let confirm_password = this.state.confirm_password;

        if (old_password.length === 0){
            Notify.warning('Old Password must not be empty!');
        }else if(password.length === 0){
            Notify.warning('New Password must not be empty!');
        }else if(confirm_password.length === 0){
            Notify.warning('Confirm Password must not be empty!');
        }else{

            let updateBtn = document.getElementById('updateBtn');
            updateBtn.innerHTML = 'Updating...'

            let data = new FormData();
            data.append('user_id', this.props.user.id);
            data.append('old_password', old_password);
            data.append('password', password);
            data.append('confirm_password', confirm_password);

            axios.post(AppUrl.UpdatePassword(this.props.user.id), data).then(response => {
                if (response.status === 200){
                    Notify.success(response.data.success);
                    updateBtn.innerHTML = 'Update';
                    document.getElementById('formData').reset();
                }
            }).catch(error => {
                if (error.response){
                    Notify.error(error.response.data.message);
                    updateBtn.innerHTML = 'Update';
                }
            });

        }

    }

    render() {
        return (
            <Fragment>
                <Container className="pt-5">
                    <Row>
                        <Col lg={4} md={4} sm={12} >

                            <Card style={{ width: '18rem' }} className="text-center d-block">
                                <Card.Img variant="top" src="https://www.pngarts.com/files/10/Default-Profile-Picture-Download-PNG-Image.png" className="userprofiless" alt="" />

                                <ListGroup className="list-group-flush">

                                    <ListGroupItem> <Link className="text-link" to="/order/list"> <p className="product-name-on-card"> Order List </p></Link> </ListGroupItem>

                                    <ListGroupItem> <Link className="text-link" to={"/profile/edit/"+this.props.user.id+'/'+this.props.user.slug}> <p className="product-name-on-card">Edit Profile</p></Link> </ListGroupItem>

                                    <ListGroupItem> <Link className="text-link" to={"/profile/"+this.props.user.id+'/'+this.props.user.slug+'/update-password'}> <p className="product-name-on-card">Change Password</p></Link> </ListGroupItem>
                                </ListGroup>
                            </Card>
                        </Col>

                        <Col lg={8} md={8} sm={12}>
                            <Card style={{ width: '18rem' }}>
                                <Card.Header> <div className="section-title text-center m-0">
                                    <h2>UPDATE PASSWORD</h2>
                                </div></Card.Header>
                                <Card.Body>
                                    <div className="row">
                                        <div className="col-12 mx-auto">
                                            <Form onSubmit={this.updatePassword} id="formData" className="p-4">
                                                <Form.Group className="mb-3">
                                                    <Form.Label htmlFor="old">Old Password</Form.Label>
                                                    <Form.Control onChange={this.oldpassOnChange} type="password" id="old" placeholder="Enter your old password" />
                                                </Form.Group>

                                                <Form.Group className="mb-3">
                                                    <Form.Label htmlFor="new">New Password</Form.Label>
                                                    <Form.Control onChange={this.newPassOnChange} type="password" id="new" placeholder="Enter your new password" />
                                                </Form.Group>
                                                <Form.Group className="mb-3">
                                                    <Form.Label htmlFor="confirm">Conform Password</Form.Label>
                                                    <Form.Control onChange={this.confPassOnChange} type="password" id="confirm" placeholder="Enter your confirm password" />
                                                </Form.Group>
                                                <Button id="updateBtn" variant="primary" type="Update">
                                                    Update
                                                </Button>
                                            </Form>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default ChangePassword;