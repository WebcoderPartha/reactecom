import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import axios from "axios";
import parse from "html-react-parser"
import AppUrl from "../../api/AppUrl";

class CompanyProfile extends Component {
    constructor() {
        super();
        this.state = {
            company_page: ''
        }
    }
    componentDidMount() {

        if (sessionStorage.getItem('company_page') == null){
            axios.get(AppUrl.SiteInfo).then(res => {
                if (res.status === 200){
                    this.setState({
                        company_page:res.data.company_page
                    })
                    sessionStorage.setItem('company_page', res.data.company_page);
                }
            }).catch(error => {
                console.log(error)
            })
        }else{
            this.setState({
                company_page:sessionStorage.getItem('company_page')
            })
        }

    }

    render() {
        return (
            <Fragment>
                <Container>
                    <Row className="p-2">
                        <Col className="shadow-sm bg-white mt-2" md={12} lg={12} sm={12} xs={12}>
                            <div className="section-title-contact">
                                {parse(this.state.company_page)}
                            </div>

                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default CompanyProfile;