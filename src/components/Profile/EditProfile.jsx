import React, {Component, Fragment} from 'react';
import {Card, Col, Container, ListGroup, ListGroupItem, Row, Form, Button} from "react-bootstrap";
import {Link, Redirect} from "react-router-dom";
import Notify from "../../Noty/Notify";
import axios from "axios";
import AppUrl from "../../api/AppUrl";

class EditProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name    : props.user.name,
            email   : props.user.email,
            image   : props.user.image,
            newimage: '',
            pageRefresh: false
        }
        this.nameOnChange   = this.nameOnChange.bind(this);
        this.emailOnChange  = this.emailOnChange.bind(this);
        this.imageOnChange  = this.imageOnChange.bind(this);
    }
    nameOnChange(e){
        let name = e.target.value;
        this.setState({
            name:name
        });
    }
    emailOnChange(e){
        let email = e.target.value;
        this.setState({
            email:email
        });
    }
    imageOnChange(e){
        let file = e.target.files[0];
        if (file.size > 1048576){
            Notify.error('Upload image must be less then 1MB');
        }else{
            let reader = new FileReader();
            reader.onload = e => {
                this.setState({
                    newimage: e.target.result
                });
                document.getElementById('preview').src = e.target.result;
            }
            reader.readAsDataURL(file);
        }
    }
    updateProfile = (e) => {
        e.preventDefault();
        let name = this.state.name;
        let email = this.state.email;
        let newimage = this.state.newimage
        if (name.length === 0){
            Notify.warning('Name is required!');
        }else if(email.length === 0){
            Notify.warning('Email is required');
        }else{
            let updateBtn = document.getElementById('updateBtn');
            updateBtn.innerHTML = 'Updating...';
            let data = new FormData();
            data.append('user_id',this.props.user.id);
            data.append('name', name);
            data.append('email', email);
            data.append('newimage', newimage);
            axios.post(AppUrl.UpdateProfile(this.props.user.id), data).then(response => {
                if (response.status === 200){
                    this.setState({
                        pageRefresh:true
                    })
                    Notify.success(response.data.success);
                    updateBtn.innerHTML = 'Update';
                    this.props.setUser(response.data.user);
                }
            }).catch(error => {
                if (error.response){
                    console.log(error.response);
                    updateBtn.innerHTML = 'Update';
                }
            })
        }
    }
    pageRefresh = () => {
        let url = window.location;
        if (this.state.pageRefresh === true){
            return <Redirect to={url} />
        }
    }
    render() {
        // if (this.state.pageRefresh === true){
        //     return <Redirect to={'/'} />
        // }
        return (
            <Fragment>
                <Container className="pt-5">
                    <Row>
                        <Col lg={4} md={4} sm={12} >

                            <Card style={{ width: '18rem' }} className="text-center d-block">
                                <Card.Img variant="top" src={AppUrl.imagePath(this.state.image)} className="userprofiless" alt="" />

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
                                    <h2>UPDATE PROFILE</h2>
                                </div></Card.Header>
                                <Card.Body>
                                    <div className="row">
                                        <div className="col-12 mx-auto">
                                            <Form onSubmit={this.updateProfile} className="p-4">
                                                <Form.Group className="mb-3">
                                                    <Form.Label htmlFor="name">Name</Form.Label>
                                                    <Form.Control onChange={this.nameOnChange} type="text" value={this.state.name} id="name" placeholder="Enter your name" />
                                                </Form.Group>

                                                <Form.Group className="mb-3">
                                                    <Form.Label htmlFor="email">Email</Form.Label>
                                                    <Form.Control onChange={this.emailOnChange} value={this.state.email} type="email" id="email" placeholder="Enter your email" />
                                                </Form.Group>
                                                <div className="row">
                                                    <div className="col-6">
                                                        <Form.Group className="mb-3">
                                                            <Form.Label htmlFor="image">Profile Image</Form.Label>
                                                            <Form.Control onChange={this.imageOnChange} type="file" id="image" />
                                                        </Form.Group>
                                                    </div>
                                                    <div className="col-6">
                                                        <img id="preview" src={AppUrl.imagePath(this.state.image)} width={80} alt=""/>
                                                    </div>
                                                </div>
                                                <Button id="updateBtn" variant="primary" type="submit">
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
                {this.pageRefresh()}
            </Fragment>
        );
    }
}

export default EditProfile;