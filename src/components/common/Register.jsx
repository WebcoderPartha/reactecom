import React, {Component, Fragment} from 'react';
import {Col, Container, Row, Button, Form} from "react-bootstrap";
import {Link, Redirect} from "react-router-dom";
import RegisterBanner from '../../assets/images/login.png'
import Notify from "../../Noty/Notify";
import axios from "axios";
import AppUrl from "../../api/AppUrl";
import Validation from "../../Validation/Validation";

class Register extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            password: '',
            password_confirmation: '',
            message: '',
            isRegister: false
        }
    }

    nameOnChange = (e) => {
        this.setState({name:e.target.value});
    }
    emailOnChange = (e) => {
        this.setState({email:e.target.value});
    }
    passwordOnChange = (e) => {
        this.setState({password:e.target.value});
    }
    conpassOnChange = (e) => {
        this.setState({password_confirmation:e.target.value});
    }
    registerSubmit = (e) => {
        e.preventDefault();
        let name = this.state.name;
        let email= this.state.email;
        let password = this.state.password;
        let password_confirmation = this.state.password_confirmation

        if (name.length === 0){
            Notify.warning("Name is required");
        }else if (!(Validation.validateName).test(name)){
            Notify.warning("Invalid name");
        }else if (email.length === 0){
            Notify.warning("Email is required");
        }else if (password.length === 0){
            Notify.warning("Password is required");
        }else if (password.length < 6){
            Notify.warning("Password need at least 6 character");
        }else if (password_confirmation.length === 0){
            Notify.warning("Confirm password is required");
        }else{

            let myFormData = new FormData();
            myFormData.append('name', name);
            myFormData.append('email', email.toLowerCase());
            myFormData.append('password', password);
            myFormData.append('password_confirmation', password_confirmation);
            let registerButton = document.getElementById('registerButton');
            registerButton.innerHTML = 'Registering';

            axios.post(AppUrl.RegisterUser, myFormData).then(response => {
                if (response.status === 200){
                    localStorage.setItem('token', response.data.token);
                    this.props.setUser(response.data.user);
                    Notify.success(response.data.success);
                    registerButton.innerHTML = 'Register';
                    this.setState({
                        isRegister: true
                    })
                }
            }).catch(error => {
                if (error.response){
                    registerButton.innerHTML = 'Register';
                    Notify.error(error.response.data.message);
                }else{
                    console.log(error)
                }
            })
        }

    }

    render() {
        if (this.state.isRegister === true){
            return <Redirect to={'/profile'} />
        }
        return (
            <Fragment>
                <Container>
                    <Row className="p-2">
                        <Col className="shadow-sm bg-white mt-2" md={12} lg={12} sm={12} xs={12}>

                            <Row className="text-center">
                                <Col className="d-flex justify-content-center" md={6} lg={6} sm={12} xs={12}>
                                    <Form onSubmit={this.registerSubmit} id="clearData" className="onboardForm">
                                        <h4 className="section-title-login"> USER REGISTER </h4>

                                        <input onChange={this.nameOnChange} className="form-control m-2" type="text" placeholder="Enter Your Name" />

                                        <input onChange={this.emailOnChange} className="form-control m-2" type="email" placeholder="Enter Your Email" />

                                        <input onChange={this.passwordOnChange} className="form-control m-2" type="password" placeholder="Enter Your Password" />

                                        <input onChange={this.conpassOnChange} className="form-control m-2" type="password" placeholder="Confirm Your Password" />

                                        <Button type="submit" id="registerButton" className="btn btn-block m-2 site-btn-login"> Sing Up </Button>
                                        <br></br> <br></br>
                                        <hr />
                                        <p> <b> Forget My Password? </b><Link to="/forget"><b> Forget Password </b> </Link> </p>

                                        <p> <b> Already Have An Account ? </b><Link to="/login"><b> Login </b> </Link> </p>
                                    </Form>

                                </Col>
                                <Col className="p-0 Desktop m-0" md={6} lg={6} sm={6} xs={6}>
                                    <img className="onboardBanner" alt="" src={RegisterBanner} />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Register;