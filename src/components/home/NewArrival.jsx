import React, {Component, Fragment} from 'react';
import {Card, Container, Row} from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Link} from "react-router-dom";
import axios from "axios";
import AppUrl from "../../api/AppUrl";
import NewArrivalLoader from "../../Placeholder/NewArrivalLoader";

class NewArrival extends Component {
    constructor(props) {
        super(props);
        this.previous = this.previous.bind(this);
        this.next = this.next.bind(this);
        this.state = {
            newarrival: [],
            loadingDiv: '',
            mainDiv: 'd-none'
        }
    }

    componentDidMount() {
        axios.get(AppUrl.getRemarkProudcts('NEW')).then(res => {
            if (res.status === 200){
                this.setState({
                    newarrival:res.data,
                    loadingDiv: 'd-none'
                });
            }
        }).catch(error => {
            console.log(error)
        })
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

        const newarrival = this.state.newarrival;
        const MyView = newarrival.map((newarrival, idx) => {
            if (newarrival.discount_price === null){
                return (
                    <div key={idx.toString()}>
                        <Link className="product-link" to={'/products/'+newarrival.slug}>
                            <Card className={'image-box'}>
                                <Card.Img className={'center'} src={newarrival.product_image} alt="" />
                                <Card.Body className={'text-center'}>
                                    <Card.Text className={'product-name-on-card'}>
                                        {newarrival.product_name}
                                    </Card.Text>
                                    <Card.Text className={'product-price-on-card'}>
                                        ${newarrival.regular_price}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Link>
                    </div>
                )
            }else{
                return (
                    <div key={idx.toString()}>
                        <Link className="product-link" to={'/products/'+newarrival.slug}>
                            <Card className={'image-box'}>
                                <Card.Img className={'center'} src={newarrival.product_image} alt="" />
                                <Card.Body className={'text-center'}>
                                    <Card.Text className={'product-name-on-card'}>
                                        {newarrival.product_name}
                                    </Card.Text>
                                    <Card.Text className={'product-price-on-card'}>
                                        <span className="text-primary"><del><small>$ {newarrival.regular_price}</small></del></span> <br/>
                                        ${newarrival.discount_price}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Link>
                    </div>
                )
            }
        })

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
                    <NewArrivalLoader loadingDiv={this.state.loadingDiv} />
                    <Row className={'text-center'}>
                        <Slider ref={c => {this.slider = c}} {...settings}>
                            {MyView}
                        </Slider>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default NewArrival;