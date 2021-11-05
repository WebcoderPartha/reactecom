import React, {Component, Fragment} from 'react';
import {Col, Row} from "react-bootstrap";

class CategoryLoader extends Component {
    render() {
        return (
            <Fragment>
                <Row className={this.props.loadingDiv}>
                    <Col xl={2} lg={2} md={3} sm={4} xs={6} >
                        <div className="ph-item d-block">
                            <div className="ph-col-2">
                                <div className="ph-avatar"></div>
                                <div className="ph-row">
                                    <div className="ph-col-12"></div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xl={2} lg={2} md={3} sm={4} xs={6} >
                        <div className="ph-item d-block">
                            <div className="ph-col-2">
                                <div className="ph-avatar"></div>
                                <div className="ph-row">
                                    <div className="ph-col-12"></div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xl={2} lg={2} md={3} sm={4} xs={6} >
                        <div className="ph-item d-block">
                            <div className="ph-col-2">
                                <div className="ph-avatar"></div>
                                <div className="ph-row">
                                    <div className="ph-col-12"></div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xl={2} lg={2} md={3} sm={4} xs={6} >
                        <div className="ph-item d-block">
                            <div className="ph-col-2">
                                <div className="ph-avatar"></div>
                                <div className="ph-row">
                                    <div className="ph-col-12"></div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xl={2} lg={2} md={3} sm={4} xs={6} >
                        <div className="ph-item d-block">
                            <div className="ph-col-2">
                                <div className="ph-avatar"></div>
                                <div className="ph-row">
                                    <div className="ph-col-12"></div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xl={2} lg={2} md={3} sm={4} xs={6} >
                        <div className="ph-item d-block">
                            <div className="ph-col-2">
                                <div className="ph-avatar"></div>
                                <div className="ph-row">
                                    <div className="ph-col-12"></div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Fragment>
        );
    }
}

export default CategoryLoader;