import React, {Component, Fragment} from 'react';
import {Breadcrumb, Col, Container, Row} from "react-bootstrap";
import axios from "axios";
import parse from "html-react-parser"
import AppUrl from "../../api/AppUrl";
import {Link} from "react-router-dom";

class Privacy extends Component {
    constructor() {
        super();
        this.state = {
            privacy_page: '',
            loaderDiv: '',
            mainDiv: 'd-none'
        }
    }
    componentDidMount() {

        axios.get(AppUrl.SiteInfo).then(res => {
            if (res.status === 200){
                this.setState({
                    privacy_page:res.data.privacy_page,
                    loaderDiv: 'd-none',
                    mainDiv: ''
                });
            }
        }).catch(error => {
            console.log(error)
        })


    }
    render() {
        return (
            <Fragment>
                <Container>
                    <Row className="p-2">
                        <div className="breadbody">
                            <Breadcrumb>
                                <Link className="breadcrumb-item" to="/"> Home </Link>
                                <Link className="breadcrumb-item" to="/privacy"> Privacy </Link>
                            </Breadcrumb>
                        </div>
                        <Col className="shadow-sm bg-white mt-2" md={12} lg={12} sm={12} xs={12}>
                            <div className={this.state.loaderDiv+" ph-item"}>
                                <div className="ph-col-12">
                                    <div className="ph-row">
                                        <div className="ph-col-4 big"></div>
                                        <div className="ph-col-12"></div>
                                        <div className="ph-col-12"></div>
                                        <div className="ph-col-12"></div>
                                        <div className="ph-col-12"></div>
                                        <div className="ph-col-12"></div>
                                        <div className="ph-col-12"></div>
                                        <div className="ph-col-12"></div>
                                        <div className="ph-col-12"></div>
                                    </div>
                                </div>
                            </div>
                            <div className={this.state.mainDiv+" section-title-contact"}>
                                {parse(this.state.privacy_page)}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Privacy;