import React, {Component, Fragment} from 'react';
import {Col, Container, Row, Card} from "react-bootstrap";
import axios from "axios";
import AppUrl from "../../api/AppUrl";
import {Link} from "react-router-dom";
import CategoryLoader from "../../Placeholder/CategoryLoader";
class Categories extends Component {

    constructor() {
        super();
        this.state = {
            Categories: [],
            loadingDiv: '',
        }
    }
    componentDidMount() {
        axios.get(AppUrl.AllCategory).then(res => {
            this.setState({
                Categories:res.data,
                loadingDiv: 'd-none'
            })
        }).catch(error => {
            console.log(error);
        })
    }

    render() {

        const CatList = this.state.Categories;
        const MyView = CatList.map((category, idx) => {
            return (
                <Col key={idx.toString()} xl={2} lg={2} md={3} sm={4} xs={6} className={'text-center'}>
                    <Link to={'/category/'+category.slug} className="product-link">
                        <Card>
                            <Card.Img className={'center'} src={category.category_image}  alt=""/>
                            <Card.Body className={'text-center'}>
                                <h2 className={'category-name'}>{category.category_name}</h2>
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
                        <h2>CATEGORIES</h2>
                        <p>Some of our exclusive categories, You may like.</p>
                    </div>
                    <CategoryLoader loadingDiv={this.state.loadingDiv}  />
                    <Row>
                        {MyView}
                    </Row>

                </Container>
            </Fragment>
        );
    }
}

export default Categories;