import React, {Component, Fragment} from 'react';
import {Col, Row, Container} from "react-bootstrap";
import {Link} from "react-router-dom";
import logo from "../../assets/images/logo.png"


class FooterDesktop extends Component {
    render() {
        return (
            <Fragment>
                <div className="footerback m-0 mt-5 pt-3 shadow-sm">
                    <Container>
                        <Row className="px-0 my-5">
                            <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
                                <h5 className="footer-menu-title">OFFICE ADDRESS</h5>
                                <p>Uttar Kalshi, Block-pa, Section-12</p>

                                <h5 className="footer-menu-title">SOCIAL LINK</h5>
                                <a href=" " target="_blank"><i className="fa m-1 h4 fa-facebook"></i></a>
                                <a href=" " target="_blank"><i className="fa m-1 h4 fa-instagram"></i></a>
                                <a href=" " target="_blank"><i className="fa m-1 h4 fa-twitter"></i></a>
                            </Col>


                            <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
                                <h5 className="footer-menu-title">THE COMPANY</h5>
                                <Link to="/" className="footer-link"> About Us</Link><br></br>
                                <Link to="/" className="footer-link"> Company Profile</Link><br></br>
                                <Link to="/contact" className="footer-link"> Contact Us</Link><br></br>
                            </Col>

                            <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
                                <h5 className="footer-menu-title">MORE INFO</h5>
                                <Link to="/" className="footer-link">How To Purchase</Link><br></br>
                                <Link to="/" className="footer-link"> Privacy Policy</Link><br></br>
                                <Link to="/" className="footer-link"> Refund Policy </Link><br></br>
                            </Col>
                            <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
                                <h5 className="footer-menu-title">DOWNLOAD APPS</h5>
                                <a href=" " target="_blank"><img src={logo} alt="" /></a><br></br>

                                <a href=" " target="_blank"><img className="mt-2" src={logo} alt="" /></a><br></br>
                                Change Your Language <br></br>
                            </Col>


                        </Row>
                    </Container>

                    <Container fluid={true} className="text-center m-0 pt-3 pb-1 bg-dark">
                        <Container>
                            <Row>
                                <h6 className="text-white"> Copyright Test  </h6>
                            </Row>
                        </Container>
                    </Container>

                </div>

            </Fragment>
        );
    }
}

export default FooterDesktop;