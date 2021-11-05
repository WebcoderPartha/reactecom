import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";

class NewArrivalLoader extends Component {
    render() {
        return (
            <Fragment>
                <Container className={this.props.loadingDiv}>
                    <Row>
                        <Col xl={3} lg={3} md={3} sm={4} xs={6}>
                            <div className="ph-item">
                                <div className="ph-col-12">
                                    <div className="ph-picture"></div>
                                    <div className="ph-row">
                                        <div className="ph-col-12"></div>
                                        <div className="ph-col-2 empty"></div>
                                        <div className="ph-col-8"></div>
                                        <div className="ph-col-2 empty"></div>
                                        <div className="ph-col-4 empty"></div>
                                        <div className="ph-col-4"></div>
                                        <div className="ph-col-4 empty"></div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xl={3} lg={3} md={3} sm={4} xs={6}>
                            <div className="ph-item">
                                <div className="ph-col-12">
                                    <div className="ph-picture"></div>
                                    <div className="ph-row">
                                        <div className="ph-col-12"></div>
                                        <div className="ph-col-2 empty"></div>
                                        <div className="ph-col-8"></div>
                                        <div className="ph-col-2 empty"></div>
                                        <div className="ph-col-4 empty"></div>
                                        <div className="ph-col-4"></div>
                                        <div className="ph-col-4 empty"></div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xl={3} lg={3} md={3} sm={4} xs={6}>
                            <div className="ph-item">
                                <div className="ph-col-12">
                                    <div className="ph-picture"></div>
                                    <div className="ph-row">
                                        <div className="ph-col-12"></div>
                                        <div className="ph-col-2 empty"></div>
                                        <div className="ph-col-8"></div>
                                        <div className="ph-col-2 empty"></div>
                                        <div className="ph-col-4 empty"></div>
                                        <div className="ph-col-4"></div>
                                        <div className="ph-col-4 empty"></div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xl={3} lg={3} md={3} sm={4} xs={6}>
                            <div className="ph-item">
                                <div className="ph-col-12">
                                    <div className="ph-picture"></div>
                                    <div className="ph-row">
                                        <div className="ph-col-12"></div>
                                        <div className="ph-col-2 empty"></div>
                                        <div className="ph-col-8"></div>
                                        <div className="ph-col-2 empty"></div>
                                        <div className="ph-col-4 empty"></div>
                                        <div className="ph-col-4"></div>
                                        <div className="ph-col-4 empty"></div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default NewArrivalLoader;