import React, {Component, Fragment} from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import axios from "axios";
import AppUrl from "../../api/AppUrl";

class Category extends Component {
    constructor(props) {
        super();
        this.state = {
            categoryProducts: [],
            products: [],
            categorySlug: props.slug        }
    }
    componentDidMount() {
        window.scroll(0,0);

        axios.get(AppUrl.getCategoryByAllProduct(this.state.categorySlug)).then(res => {
            if (res.status === 200){
                this.setState({
                    categoryProducts:res.data[0],
                    products: res.data[0].products
                });
            }
        }).catch(error => {
            console.log(error)
        })
    }

    render() {
        const products = this.state.products;
        const MyView = products.map((product, idx) => {
            if (product.discount_price === null){
                return (
                    <Col key={idx.toString()} xl={2} lg={2} md={2} sm={4} xs={6}>
                        <Link className="product-link" to={'/products/'+product.slug}>
                            <Card className={'image-box'}>
                                <Card.Img className={'center'} src={product.product_image} alt="" />
                                <Card.Body className={'text-center'}>
                                    <Card.Text className={'product-name-on-card'}>
                                        {product.product_name}
                                    </Card.Text>
                                    <Card.Text className={'product-price-on-card'}>
                                        ${product.regular_price}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Link>
                    </Col>
                )
            }else{
                return (
                    <Col key={idx.toString()} xl={2} lg={2} md={2} sm={4} xs={6}>
                        <Link className="product-link" to={'/products/'+product.slug}>
                            <Card className={'image-box'}>
                                <Card.Img className={'center'} src={product.product_image} alt="" />
                                <Card.Body className={'text-center'}>
                                    <Card.Text className={'product-name-on-card'}>
                                        {product.product_name}
                                    </Card.Text>
                                    <Card.Text className={'product-price-on-card'}>
                                        <span className="text-primary"><del><small>$ {product.regular_price}</small></del></span> <br/>
                                        ${product.discount_price}
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
                        <h2>{this.state.categoryProducts.category_name}</h2>
                        <p>Some of our exclusive collection, You may like.</p>
                    </div>
                    <Row>
                        {MyView}
                    </Row>
                </Container>
            </Fragment>
        );

    }
}

export default Category;