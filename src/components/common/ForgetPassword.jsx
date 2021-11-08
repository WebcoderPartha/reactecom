import React, {Component, Fragment} from 'react';
import { Container,Row,Col, Form,Button } from 'react-bootstrap'
import Forget from '../../assets/images/forget.jpg'
import Notify from "../../Noty/Notify";
import axios from "axios";
import AppUrl from "../../api/AppUrl";

class ForgetPassword extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            message: '',
            successMsg: 'd-none',
        }
        this.emailOnChange = this.emailOnChange.bind(this);
    }
    emailOnChange(e){
        this.setState({
            email:e.target.value
        })
    }
    resetSubmit = (e) =>{
        e.preventDefault();
        let email = this.state.email;
        if (email.length === 0){
            Notify.warning('Email is required!');
        }else{
            let myFormData = new FormData();
            myFormData.append('email', email.toLowerCase());
            let resetButton = document.getElementById('resetButton');
            resetButton.innerHTML = "Sending reset link...";
            axios.post(AppUrl.ForgetRequest, myFormData).then(response => {

                if (response.status === 200){
                    localStorage.setItem('reset', 1);
                    Notify.success(response.data.success);
                    this.setState({
                        successMsg: ''
                    });
                    resetButton.innerHTML = "Rest Password";
                    document.getElementById('clearData').reset();
                }

            }).catch(error => {
                if (error.response){
                    Notify.error(error.response.data.message);
                    resetButton.innerHTML = "Rest Password";
                }else{
                    console.log(error)
                }
            });

        }
    }
    render() {
        return (
            <Fragment>
                <Container>
                    <Row className="p-2">
                        <Col className="shadow-sm bg-white mt-2" md={12} lg={12} sm={12} xs={12}>
                            <Row className="text-center">
                                <Col className="d-flex justify-content-center" md={6} lg={6} sm={12} xs={12}>
                                    <Form onSubmit={this.resetSubmit} id="clearData" className="onboardForm">
                                        <h4 className="section-title-login"> FORGET PASSWORD ? </h4>
                                        <div className={"alert alert-success "+this.state.successMsg}>
                                            <h6 className="p-0 m-0">Forget password link sent to your email. Please check your inbox.</h6>
                                        </div>
                                        <input onChange={this.emailOnChange} className="form-control m-2" type="email" placeholder="Enter Your Email" />
                                        <Button type="submit" id="resetButton" className="btn btn-block m-2 site-btn-login"> Reset Password </Button>
                                    </Form>
                                </Col>

                                <Col className="p-0 Desktop m-0" md={6} lg={6} sm={6} xs={6}>
                                    <img alt="" className="onboardBanner" src={Forget} />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default ForgetPassword;