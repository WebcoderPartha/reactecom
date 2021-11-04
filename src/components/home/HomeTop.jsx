import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import MegaMenu from "./MegaMenu";
import HomeSlider from "./HomeSlider";
import axios from "axios";
import AppUrl from "../../api/AppUrl";

class HomeTop extends Component {
    constructor() {
        super();
        this.state = {
            MenuData: []
        }
    }
    componentDidMount() {
        axios.get(AppUrl.AllCategory).then(res => {
            this.setState({
                MenuData:res.data
            })
        }).catch(error => {
            console.log(error);
        })
    }

    render() {
        return (
            <Fragment>
                <Container>
                    <Row>
                        <Col lg={3} md={3} sm={12}>
                            <MegaMenu data={this.state.MenuData} />
                        </Col>
                        <Col lg={9} md={9} sm={12}>
                            <HomeSlider />
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default HomeTop;