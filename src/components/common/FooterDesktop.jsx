import React, {Component, Fragment} from 'react';
import {Col, Row, Container} from "react-bootstrap";
import {Link} from "react-router-dom";
import apple from "../../assets/images/apple.png"
import google from "../../assets/images/google.png"
import parse from "html-react-parser"
import axios from "axios";
import AppUrl from "../../api/AppUrl";

class FooterDesktop extends Component {
    constructor() {
        super();
        this.state = {
            facebook: '',
            twitter: '',
            linkedin: '',
            address: '',
            android_link: '',
            ios_link: '',
            copyright_text: ''
        }
    }
    componentDidMount() {
        axios.get(AppUrl.SiteInfo).then(res => {
            if (res.status === 200){
                this.setState({
                    facebook: res.data.facebook_link,
                    twitter: res.data.twitter_link,
                    linkedin: res.data.linkedin_link,
                    address: res.data.address,
                    android_link: res.data.adnroid_app_link,
                    ios_link: res.data.ios_app_link,
                    copyright_text: res.data.copyright_text
                })
            }
        }).catch(error => {
            console.log(error)
        });

    }

    render() {
        return (
            <Fragment>
                <div className="footerback m-0 mt-5 pt-3 shadow-sm">
                    <Container>
                        <Row className="px-0 my-5">
                            <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
                                <h5 className="footer-menu-title">OFFICE ADDRESS</h5>
                                <p>{this.state.address}</p>

                                <h5 className="footer-menu-title">SOCIAL LINK</h5>
                                <a href={this.state.facebook} rel="noopener"><i className="fa m-1 h4 fa-facebook"></i></a>
                                <a href={this.state.linkedin} rel="noopener"><i className="fa m-1 h4 fa-linkedin"></i></a>
                                <a href={this.state.twitter} rel="noopener"><i className="fa m-1 h4 fa-twitter"></i></a>
                            </Col>


                            <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
                                <h5 className="footer-menu-title">THE COMPANY</h5>
                                <Link to="/about" className="footer-link"> About Us</Link><br></br>
                                <Link to="/company" className="footer-link"> Company Profile</Link><br></br>
                                <Link to="/contact" className="footer-link"> Contact Us</Link><br></br>
                            </Col>

                            <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
                                <h5 className="footer-menu-title">MORE INFO</h5>
                                <Link to="/purchase" className="footer-link">How To Purchase</Link><br></br>
                                <Link to="/privacy" className="footer-link"> Privacy Policy</Link><br></br>
                                <Link to="/refund" className="footer-link"> Refund Policy </Link><br></br>
                            </Col>
                            <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
                                <h5 className="footer-menu-title">DOWNLOAD APPS</h5>
                                <a href={this.state.ios_link} rel="opener"><img src={apple} alt="" /></a><br></br>
                                <a href={this.state.android_link} rel="opener" ><img className="mt-2" src={google} alt="" /></a><br></br>
                                Change Your Language <br></br>
                                <div id="google_translate_element"></div>
                            </Col>


                        </Row>
                    </Container>

                    <Container fluid={true} className="text-center m-0 pt-3 pb-1 bg-dark">
                        <Container>
                            <Row>
                                <h6 className="text-white"> {parse(this.state.copyright_text)} </h6>
                            </Row>
                        </Container>
                    </Container>

                </div>

            </Fragment>
        );
    }
}

export default FooterDesktop;