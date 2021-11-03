import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import axios from "axios";
import parse from "html-react-parser"
import AppUrl from "../../api/AppUrl";

class Privacy extends Component {
    constructor() {
        super();
        this.state = {
            privacy_page: ''
        }
    }
    componentDidMount() {

        if (sessionStorage.getItem('privacy_page') == null){
            axios.get(AppUrl.SiteInfo).then(res => {
                if (res.status === 200){
                    this.setState({
                        privacy_page:res.data.privacy_page
                    });
                    sessionStorage.setItem('privacy_page', res.data.privacy_page);
                }
            }).catch(error => {
                console.log(error)
            })
        }else{
            this.setState({
                privacy_page:sessionStorage.getItem('privacy_page')
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