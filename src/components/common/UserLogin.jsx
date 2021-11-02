import React, {Component, Fragment} from 'react';
import {Container, Row, Col, Button, Form} from "react-bootstrap";
import {Link} from "react-router-dom";
import logo from "../../assets/images/logo.png"
class UserLogin extends Component {
    render() {
        return (
            <Fragment>
                <Container>
                    <Row className="p-2">
                        <Col className="shadow-sm bg-white mt-2" md={12} lg={12} sm={12} xs={12}>

                            <Row className="text-center">
                                <Col className="d-flex justify-content-center" md={6} lg={6} sm={12} xs={12}>
                                    <Form className="onboardForm">
                                        <h4 className="section-title-login"> USER SIGN IN </h4>

                                        <input className="form-control m-2" type="email" placeholder="Enter Your Email"  />

                                        <input className="form-control m-2" type="password" placeholder="Enter Your Password"   />


                                        <Button type="submit" className="btn btn-block m-2 site-btn-login"> Login </Button>

                                        <br></br> <br></br>
                                        <hr />
                                        <p> <b> Forget My Password? </b><Link to="/"><b> Forget Password </b> </Link> </p>

                                        <p> <b> Don't Have An Account ? </b><Link to="/"><b> Register </b> </Link> </p>

                                    </Form>
                                </Col>

                                <Col className="p-0 Desktop m-0" md={6} lg={6} sm={6} xs={6}>
                                    <img className="onboardBanner" src={logo}  alt=" "/>
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