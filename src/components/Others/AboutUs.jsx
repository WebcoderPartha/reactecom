import React, {Component, Fragment} from 'react';
import {Col, Container, Row, Breadcrumb} from "react-bootstrap";
import {Link} from "react-router-dom";
import axios from "axios";
import AppUrl from "../../api/AppUrl";
import parse from 'html-react-parser';

class AboutUs extends Component {
    constructor() {
        super();
        this.state = {
            about_page: ''
        }
    }

    componentDidMount() {

        // if (!sessionStorage.getItem('about_page')){
        //
        //     axios.get(AppUrl.SiteInfo).then(res => {
        //         if (res.status === 200){
        //             this.setState({
        //                 about_page:res.data.about_page
        //             });
        //             sessionStorage.setItem('about_page', res.data.about_page);
        //         }
        //     }).catch(error => {
        //         console.log(error)
        //     })
        //
        // }else{
        //     this.setState({
        //         about_page:sessionStorage.getItem('about_page')
        //     });
        // }
        axios.get(AppUrl.SiteInfo).then(res => {
            if (res.status === 200){
                this.setState({
                    about_page:res.data.about_page
                });
                sessionStorage.setItem('about_page', res.data.about_page);
            }
        }).catch(error => {
            console.log(error)
        })

    }

    render() {
        return (
            <Fragment>
                <Container>
                    <div className="breadbody">
                        <Breadcrumb>
                            <Link className="breadcrumb-item" to="/"> Home </Link>
                            <Link className="breadcrumb-item" to="/about"> About </Link>
                        </Breadcrumb>
                    </div>
                    <Row className="p-2">
                        <Col className="shadow-sm bg-white mt-2" md={12} lg={12} sm={12} xs={12}>
                            <div className="section-title-contact">
                                {parse(this.state.about_page)}
                            </div>

                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default AboutUs;