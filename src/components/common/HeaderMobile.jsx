import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Navbar, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import MegaMenuMobile from "../home/MegaMenuMobile";

class HeaderMobile extends Component {
    constructor() {
        super();
        this.state = {
            sideNavState: 'sideNavClose',
            contentOverState: 'ContentOverlayClose'
        }
    }

    menuClickHandler = () => {
        this.sideMenuHandler()
    }

    contentOverHandler = () => {
        this.sideMenuHandler()
    }

    sideMenuHandler = () => {

        let sideNav = this.state.sideNavState;

        if (sideNav === 'sideNavOpen'){
            this.setState({
                sideNavState: 'sideNavClose',
                contentOverState: 'ContentOverlayClose'
            })
        }else{
            this.setState({
                sideNavState: 'sideNavOpen',
                contentOverState: 'ContentOverlayOpen'
            })
        }

    }

    render() {
        return (
            <Fragment>
                <div className="TopSectionDown">
                    <Navbar fixed={"top"} className="navbar" bg="light">

                        <Container fluid={"true"} className="fixed-top shadow-sm p-2 mb-0 bg-white">
                            <Row>
                                <Col lg={4} md={4} sm={12} xs={12}>
                                    <Button onClick={this.menuClickHandler} className="btn">
                                        <i className="fa fa-bars"></i>
                                    </Button>
                                    &nbsp;&nbsp;&nbsp;
                                    <Link to={'/'}> <img className="nav-logo" src={Logo} /> </Link>
                                    &nbsp;&nbsp;&nbsp;
                                    <Button className="cart-btn">
                                        <i className="fa fa-shopping-cart"></i> 3 Items
                                    </Button>
                                </Col>


                            </Row>

                        </Container>
                        <div className={this.state.sideNavState}>
                            <MegaMenuMobile />
                        </div>
                        <div onClick={this.contentOverHandler} className={this.state.contentOverState}>

                        </div>
                    </Navbar>
                </div>
            </Fragment>
        );
    }
}

export default HeaderMobile;