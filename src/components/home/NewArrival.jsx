import React, {Component, Fragment} from 'react';
import {Card, Container, Row} from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Link} from "react-router-dom";

class NewArrival extends Component {
    constructor(props) {
        super(props);
        this.previous = this.previous.bind(this);
        this.next = this.next.bind(this);
    }

    previous = () => {
        this.slider.slickPrev();
    }
    next = () => {
        this.slider.slickNext();
    }

    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
            autoplay: true,
            autoplaySpeed: 3000,
            initialSlide: 1,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };

        return (
            <Fragment>
                <Container>
                    <div className="section-title text-center">
                        <h2>NEW ARRIVAL &nbsp;
                            <button onClick={this.previous} className="btn btn-sm site-btn"><i className="fa fa-angle-left"></i></button>
                            &nbsp;
                            <button onClick={this.next} className="btn btn-sm site-btn"><i className="fa fa-angle-right"></i></button>
                        </h2>
                        <p>Some of our exclusive collection, You may like.</p>
                    </div>
                    <Row className={'text-center'}>
                        <Slider ref={c => {this.slider = c}} {...settings}>
                            <div>
                                <Link to="/product-details">
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
                            </div>
                            <div>
                                <Link to="/product-details">
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
                            </div>
                            <div>
                                <Link to="/product-details">
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
                            </div>
                            <div>
                                <Link to="/product-details">
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
                            </div>
                            <div>
                                <Link to="/product-details">
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
                            </div>
                            <div>
                                <Link to="/product-details">
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
                            </div>

                        </Slider>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default NewArrival;