import React, {Component, Fragment} from 'react';
import {Container, Row, Col, Button, Form} from "react-bootstrap";
import {Link, Redirect} from "react-router-dom";
import LoginBanner from "../../assets/images/login.png"
import Notify from "../../Noty/Notify";
import axios from "axios";
import AppUrl from "../../api/AppUrl";
class UserLogin extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            loggedIn: false,
            errorMessage: ''
        }
        this.emailOnchange = this.emailOnchange.bind(this);
        this.passwordOnChange = this.passwordOnChange.bind(this);
    }

    emailOnchange(e){
        this.setState({email:e.target.value});
    }
    passwordOnChange(e){
        this.setState({password:e.target.value})
    }

    // validateData(){
    //     if (!this.state.email > 0 && !this.state.password){
    //         this.setState({
    //             errEmail: 'Email is required!',
    //             errPass: 'Password is required!'
    //         })
    //     }else if (!this.state.email > 0){
    //         this.setState({
    //             errEmail: 'Email is required!',
    //             errPass: ''
    //         })
    //     }else if (!this.state.password > 0){
    //         this.setState({
    //             errEmail: '',
    //             errPass: 'Password is required!'
    //         })
    //     }else{
    //         return true;
    //     }
    // }

    onSubmitLogin = (e) => {
        e.preventDefault();
        let email = this.state.email;
        let password = this.state.password;
        if (email.length === 0){
            Notify.warning("Email is required!")
        }else if(password.length === 0){
            Notify.warning("Password is required!")
        }else{
            const data = {
                 email    : this.state.email.toLowerCase(),
                 password : this.state.password
            }
            axios.post(AppUrl.Login, data).then(response => {
                if (response.status === 200){
                    // console.log(response.data.token)

                    localStorage.setItem('token', response.data.token);
                    this.setState({loggedIn:true});
                    this.props.setUser(response.data.user)
                    Notify.success(response.data.success);
                }
            }).catch(error => {
                if (error.response){
                    // const message = error.response.data ? error.response.data.message : error
                    // console.log(error.response.data.message)
                    Notify.error(error.response.data.message);
                }else{
                    console.log(error)
                }

            })

        }
    }

    render() {
        if (this.state.loggedIn === true){
            return <Redirect to="/profile" />
        }
        if (localStorage.getItem('token')){
            return <Redirect to="/profile" />
        }
        return (
            <Fragment>
                <Container>
                    <Row className="p-2">
                        <Col className="shadow-sm bg-white mt-2" md={12} lg={12} sm={12} xs={12}>

                            <Row>
                                <Col className="d-flex justify-content-center" md={6} lg={6} sm={12} xs={12}>
                                    <Form onSubmit={this.onSubmitLogin} className="onboardForm">
                                        <h4 className="section-title-login text-center"> USER SIGN IN </h4>

                                        <input onChange={this.emailOnchange} className="form-control m-2" type="email" placeholder="Enter Your Email"  />
                                        {/*<div className="text-danger p-3"><small><b>{this.state.errEmail}</b></small></div>*/}
                                        <input onChange={this.passwordOnChange} className="form-control m-2" type="password" placeholder="Enter Your Password"   />
                                        {/*<div className="text-danger p-3"><small><b>{this.state.errPass}</b></small></div>*/}
                                        <Button type="submit" className="btn btn-block m-2 site-btn-login"> Login </Button>

                                        <br></br> <br></br>
                                        <hr />
                                        <p className="text-center"> <b> Forget My Password? </b><Link to="/forget"><b> Forget Password </b> </Link> </p>

                                        <p className="text-center"> <b> Don't Have An Account ? </b><Link to="/register"><b> Register </b> </Link> </p>

                                    </Form>
                                </Col>

                                <Col className="p-0 Desktop m-0" md={6} lg={6} sm={6} xs={6}>
                                    <img className="onboardBanner" src={LoginBanner}  alt=" "/>
                                </Col>
                            </Row>

                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default UserLogin;