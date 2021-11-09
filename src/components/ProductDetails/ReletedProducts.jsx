import React, {Component, Fragment} from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

class ReletedProducts extends Component {

    render() {

        // const products = this.props.suggestProducts[0].products;
        const myView = this.props.suggestProducts.map((product,idx) => {
            return (
                <Col key={idx.toString()} xl={2} lg={2} md={2} sm={4} xs={6}>
                    <Link className="product-link" to="/product-details">
                        <Card className={'image-box'}>
                            <Card.Img className={'center'} src={product.product_image} />
                            <Card.Body className={'text-center'}>
                                <Card.Text className={'product-name-on-card'}>
                                    {product.product_name}
                                </Card.Text>
                                <Card.Text className={'product-price-on-card'}>
                                    $55
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Link>
                </Col>
            )
        })

        return (
            <Fragment>
                <Container>

                    <div className="section-title text-center">
                        <h2>RELETED PRODUCTS</h2>
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

export default ReletedProducts;