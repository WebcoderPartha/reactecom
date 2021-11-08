import React, {Component, Fragment} from 'react';
import { Container,Row,Col, Form,Button } from 'react-bootstrap'
import Forget from '../../assets/images/forget.jpg'
import {Redirect} from "react-router-dom";
import Notify from "../../Noty/Notify";
import axios from "axios";
import AppUrl from "../../api/AppUrl";

class ResetPassword extends Component {
    constructor() {
        super();
        this.state = {
            token: '',
            email: '',
            password:'',
            password_confirmation: '',
            isReset: false
        }
        this.tokenOnChange = this.tokenOnChange.bind(this);
        this.emailOnChange = this.emailOnChange.bind(this);
        this.passwordOnChange = this.passwordOnChange.bind(this);
        this.conPassOnChange = this.conPassOnChange.bind(this);
    }
    tokenOnChange(e){
        this.setState({
            token:e.target.value
        })
    }
    emailOnChange(e){
        this.setState({
            email:e.target.value
        })
    }
    passwordOnChange(e){
        this.setState({
            password:e.target.value
        })
    }
    conPassOnChange(e){
        this.setState({
            password_confirmation:e.target.value
        })
    }

    resetSubmit = (e) => {

        e.preventDefault();

        let token = this.state.token;
        let email = this.state.email;
        let password = this.state.password;
        let password_confirmation = this.state.password_confirmation;

        if (token.length === 0){
            Notify.warning("Token is required!");
        }else if(email.length === 0){
            Notify.warning("Email is required!");
        }else if(password.length === 0){
            Notify.warning("Password is required!");
        }else if(password.length < 6){
            Notify.warning("Password should be minimum 6 characters!");
        }else if(password_confirmation.length === 0){
            Notify.warning("Confirm password is required!")
        }else if(password_confirmation.length < 6){
            Notify.warning("Password should be minimum 6 characters!");
        }else{
            let resetButton = document.getElementById('resetButton');
            resetButton.innerHTML = "Resetting";

            let resetData = new FormData();
            resetData.append('token', token);
            resetData.append('email', email.toLowerCase());
            resetData.append('password', password);
            resetData.append('password_confirmation', password_confirmation);

            axios.post(AppUrl.ResetPassword, resetData).then(response => {

                if (response.status === 200){

                    localStorage.setItem('token', response.data.token);
                    this.setState({
                        isReset:true
                    });
                    this.props.setUser(response.data.user);
                    localStorage.removeItem('reset');
                    Notify.success(response.data.success);

                }

            }).catch(error => {
                if (error.response){
                    Notify.warning(error.response.data.message);
                    resetButton.innerHTML = "Reset Password";
                }
            });

        }

    }

    render() {
        if (!localStorage.getItem('reset')){
            return <Redirect to={"/"} />
        }
        if (this.state.isReset === true){
            return <Redirect to={'/profile'} />
        }
        return (
            <Fragment>
                <Container>
                    <Row className="p-2">
                        <Col className="shadow-sm bg-white mt-2" md={12} lg={12} sm={12} xs={12}>

                            <Row className="text-center">
                                <Col className="d-flex justify-content-center" md={6} lg={6} sm={12} xs={12}>
                                    <Form onSubmit={this.resetSubmit} id="clearData" className="onboardForm">
                                        <h4 className="section-title-login"> RESET PASSWORD </h4>

                                        <input onChange={this.tokenOnChange} className="form-control m-2" type="text" placeholder="Enter Your Pin Code" />

                                        <input onChange={this.emailOnChange} className="form-control m-2" type="email" placeholder="Enter Your Email" />

                                        <input onChange={this.passwordOnChange} className="form-control m-2" type="password" placeholder="Your New Password" />

                                        <input onChange={this.conPassOnChange} className="form-control m-2" type="password" placeholder="Confirm Your Password" />
                                        <Button type="submit" id="resetButton" className="btn btn-block m-2 site-btn-login"> Reset Password </Button>

                                    </Form>
                                </Col>

                                <Col className="p-0 Desktop m-0" md={6} lg={6} sm={6} xs={6}>
                                    <img className="onboardBanner" src={Forget} alt="d" />
                                </Col>
                            </Row>


                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default ResetPassword;