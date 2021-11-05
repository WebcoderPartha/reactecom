import React, {Component, Fragment} from 'react';
import {Col, Container, Row, Card} from "react-bootstrap";
import {Link} from "react-router-dom";
import axios from "axios";
import AppUrl from "../../api/AppUrl";
import FeaturedProductLoader from "../../Placeholder/FeaturedProductLoader";

class FeaturedProject extends Component {
    constructor() {
        super();
        this.state = {
            featured: [],
            loadingDiv: '',
            mainDiv: 'd-none'
        }
    }
    componentDidMount() {
        axios.get(AppUrl.getRemarkProudcts('FEATURED')).then(res => {
            if (res.status === 200){
                this.setState({
                    featured:res.data,
                    loadingDiv: 'd-none',
                    mainDiv: ''
                });
            }
        }).catch(error => {
            console.log(error)
        })
    }

    render() {
        const featured = this.state.featured;
        const MyView = featured.map((featured, idx) => {
            if (featured.discount_price === null){
                return (
                    <Col key={idx.toString()} xl={2} lg={2} md={2} sm={4} xs={6}>
                        <Link className="product-link" to={'/products/'+featured.slug}>
                            <Card className={'image-box'}>
                                <Card.Img className={'center'} src={featured.product_image} alt="" />
                                <Card.Body className={'text-center'}>
                                    <Card.Text className={'product-name-on-card'}>
                                        {featured.product_name}
                                    </Card.Text>
                                    <Card.Text className={'product-price-on-card'}>
                                        ${featured.regular_price}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Link>
                    </Col>
                )
            }else{
                return (
                    <Col key={idx.toString()} xl={2} lg={2} md={2} sm={4} xs={6}>
                        <Link className="product-link" to={'/products/'+featured.slug}>
                            <Card className={'image-box'}>
                                <Card.Img className={'center'} src={featured.product_image} alt="" />
                                <Card.Body className={'text-center'}>
                                    <Card.Text className={'product-name-on-card'}>
                                        {featured.product_name}
                                    </Card.Text>
                                    <Card.Text className={'product-price-on-card'}>
                                        <span className="text-primary"><del><small>$ {featured.regular_price}</small></del></span> <br/>
                                        ${featured.discount_price}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Link>
                    </Col>
                )
            }

        })
        return (
            <Fragment>
                <Container>
                    <div className="section-title text-center">
                        <h2>FEATURED PRODUCT</h2>
                        <p>Some of our exclusive collection, You may like.</p>
                    </div>
                    <Row>
                        <FeaturedProductLoader loadingDiv={this.state.loadingDiv} />
                        {MyView}
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default FeaturedProject;