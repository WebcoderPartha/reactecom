import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import parse from "html-react-parser"
import axios from "axios";
import AppUrl from "../../api/AppUrl";

class Purchase extends Component {
    constructor() {
        super();
        this.state = {
            purchase_page: '',
            loaderDiv: '',
            mainDiv: 'd-done'
        }
    }
    componentDidMount() {

        axios.get(AppUrl.SiteInfo).then(res => {
            if (res.status === 200){
                this.setState({
                    purchase_page:res.data.purchase_page,
                    loaderDiv: 'd-none',
                    mainDiv: '',
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
                                {parse(this.state.purchase_page)}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Purchase;