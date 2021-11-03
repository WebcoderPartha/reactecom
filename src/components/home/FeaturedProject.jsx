import React, {Component, Fragment} from 'react';
import {Col, Container, Row, Card} from "react-bootstrap";
import {Link} from "react-router-dom";

class FeaturedProject extends Component {
    render() {
        return (
            <Fragment>
                <Container>
                    <div className="section-title text-center">
                        <h2>FEATURED PRODUCT</h2>
                        <p>Some of our exclusive collection, You may like.</p>
                    </div>
                    <Row>
                        <Col xl={2} lg={2} md={2} sm={4} xs={6}>
                            <Link className="product-link" to="/product-details">
                                <Card className={'image-box'}>
                                    <Card.Img className={'center'} src="https://rukminim1.flixcart.com/image/416/416/ku04o7k0/mobile/p/8/u/9i-sport-mzb0a5iin-redmi-original-imag785qegs5ghyy.jpeg?q=70" />
                                    <Card.Body className={'text-center'}>
                                        <Card.Text className={'product-name-on-card'}>
                                            REDMI 9i Sport (Carbon Black, 64 GB)  (4 GB RAM)
                                        </Card.Text>
                                        <Card.Text className={'product-price-on-card'}>
                                            $55
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Col>
                        <Col xl={2} lg={2} md={2} sm={4} xs={6}>
                            <Link className="product-link" to="/product-details">
                                <Card className={'image-box'}>
                                    <Card.Img className={'center'} src="https://rukminim1.flixcart.com/image/416/416/ku04o7k0/mobile/p/8/u/9i-sport-mzb0a5iin-redmi-original-imag785qegs5ghyy.jpeg?q=70" />
                                    <Card.Body className={'text-center'}>
                                        <Card.Text className={'product-name-on-card'}>
                                            REDMI 9i Sport (Carbon Black, 64 GB)  (4 GB RAM)
                                        </Card.Text>
                                        <Card.Text className={'product-price-on-card'}>
                                            $55
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Col>
                        <Col xl={2} lg={2} md={2} sm={4} xs={6}>
                            <Link className="product-link" to="/product-details">
                                <Card className={'image-box'}>
                                    <Card.Img className={'center'} src="https://rukminim1.flixcart.com/image/416/416/ku04o7k0/mobile/p/8/u/9i-sport-mzb0a5iin-redmi-original-imag785qegs5ghyy.jpeg?q=70" />
                                    <Card.Body className={'text-center'}>
                                        <Card.Text className={'product-name-on-card'}>
                                            REDMI 9i Sport (Carbon Black, 64 GB)  (4 GB RAM)
                                        </Card.Text>
                                        <Card.Text className={'product-price-on-card'}>
                                            $55
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Col>
                        <Col xl={2} lg={2} md={2} sm={4} xs={6}>
                            <Link className="product-link" to="/product-details">
                                <Card className={'image-box'}>
                                    <Card.Img className={'center'} src="https://rukminim1.flixcart.com/image/416/416/ku04o7k0/mobile/p/8/u/9i-sport-mzb0a5iin-redmi-original-imag785qegs5ghyy.jpeg?q=70" />
                                    <Card.Body className={'text-center'}>
                                        <Card.Text className={'product-name-on-card'}>
                                            REDMI 9i Sport (Carbon Black, 64 GB)  (4 GB RAM)
                                        </Card.Text>
                                        <Card.Text className={'product-price-on-card'}>
                                            $55
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Col>
                        <Col xl={2} lg={2} md={2} sm={4} xs={6}>
                            <Link className="product-link" to="/product-details">
                                <Card className={'image-box'}>
                                    <Card.Img className={'center'} src="https://rukminim1.flixcart.com/image/416/416/ku04o7k0/mobile/p/8/u/9i-sport-mzb0a5iin-redmi-original-imag785qegs5ghyy.jpeg?q=70" />
                                    <Card.Body className={'text-center'}>
                                        <Card.Text className={'product-name-on-card'}>
                                            REDMI 9i Sport (Carbon Black, 64 GB)  (4 GB RAM)
                                        </Card.Text>
                                        <Card.Text className={'product-price-on-card'}>
                                            $55
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Col>
                        <Col xl={2} lg={2} md={2} sm={4} xs={6}>
                            <Link className="product-link" to="/product-details">
                                <Card className={'image-box'}>
                                    <Card.Img className={'center'} src="https://rukminim1.flixcart.com/image/416/416/ku04o7k0/mobile/p/8/u/9i-sport-mzb0a5iin-redmi-original-imag785qegs5ghyy.jpeg?q=70" />
                                    <Card.Body className={'text-center'}>
                                        <Card.Text className={'product-name-on-card'}>
                                            REDMI 9i Sport (Carbon Black, 64 GB)  (4 GB RAM)
                                        </Card.Text>
                                        <Card.Text className={'product-price-on-card'}>
                                            $55
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Col>

                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default FeaturedProject;