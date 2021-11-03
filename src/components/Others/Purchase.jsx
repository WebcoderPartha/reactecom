import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import parse from "html-react-parser"
import axios from "axios";
import AppUrl from "../../api/AppUrl";

class Purchase extends Component {
    constructor() {
        super();
        this.state = {
            purchase_page: ''
        }
    }
    componentDidMount() {

        if (sessionStorage.getItem('purchase_page') == null){
            axios.get(AppUrl.SiteInfo).then(res => {
                if (res.status === 200){
                    this.setState({
                        purchase_page:res.data.purchase_page
                    });
                    sessionStorage.setItem('purchase_page', res.data.purchase_page);
                }
            }).catch(error => {
                console.log(error)
            })
        }else{
            this.setState({
                purchase_page:sessionStorage.getItem('purchase_page')
            });
        }

    }

    render() {
        return (
            <Fragment>
                <Container>
                    <Row className="p-2">
                        <Col className="shadow-sm bg-white mt-2" md={12} lg={12} sm={12} xs={12}>
                            <div className="section-title-contact">
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