import React, {Component, Fragment} from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import axios from "axios";
import AppUrl from "../../api/AppUrl";

class Collection extends Component {
    constructor() {
        super();
        this.state = {
            collections: [],
            loadingDiv: '',
            mainDiv: 'd-none'
        }
    }
    componentDidMount() {
        axios.get(AppUrl.getRemarkProudcts('COLLECTION')).then(res => {
            if (res.status === 200){
                this.setState({
                    collections:res.data,
                    loadingDiv:'d-none',
                    mainDiv: ''
                });
            }
        }).catch(error => {
            console.log(error)
        })
    }
    render() {
        const collections = this.state.collections;
        const myView = collections.map((collection, idx) => {
            if (collection.discount_price === null){
                return (
                    <Col key={idx.toString()} xl={2} lg={2} md={2} sm={4} xs={6}>
                        <Link className="product-link" to={'/products/'+collection.slug}>
                            <Card className={'image-box'}>
                                <Card.Img className={'center'} src={collection.product_image} alt="" />
                                <Card.Body className={'text-center'}>
                                    <Card.Text className={'product-name-on-card'}>
                                        {collection.product_name}
                                    </Card.Text>
                                    <Card.Text className={'product-price-on-card'}>
                                        ${collection.regular_price}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Link>
                    </Col>
                )
            }else{
                return (
                    <Col key={idx.toString()} xl={2} lg={2} md={2} sm={4} xs={6}>
                        <Link className="product-link" to={'/products/'+collection.slug}>
                            <Card className={'image-box'}>
                                <Card.Img className={'center'} src={collection.product_image} alt="" />
                                <Card.Body className={'text-center'}>
                                    <Card.Text className={'product-name-on-card'}>
                                        {collection.product_name}
                                    </Card.Text>
                                    <Card.Text className={'product-price-on-card'}>
                                        <span className="text-primary"><del><small>$ {collection.regular_price}</small></del></span> <br/>
                                        ${collection.discount_price}
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
                        <h2>PRODUCT COLLECTION</h2>
                        <p>Some of our exclusive collection, You may like.</p>
                    </div>
                    <Row>
                        {myView}
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Collection;