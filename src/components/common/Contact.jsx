import React, {Component, Fragment} from 'react';
import {Breadcrumb, Button, Col, Container, Form, Row} from "react-bootstrap";
import Validation from "../../Validation/Validation";
import axios from "axios";
import AppUrl from "../../api/AppUrl";
import Notify from "../../Noty/Notify";
import {Link} from "react-router-dom";
// import {toast, ToastContainer} from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';


class Contact extends Component {

    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            message: '',
            errName: '',
            errMessage: '',
            errEmail: '',
            address: '',
        }
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeMessage = this.onChangeMessage.bind(this);
    }
    componentDidMount() {
        axios.get(AppUrl.SiteInfo).then(res => {
            if (res.status === 200){
                this.setState({
                    address:res.data.address
                })
            }
        }).catch(error => {
            console.log(error)
        })
    }

    onChangeName(event){
        this.setState({name:event.target.value});
        // alert(name)
    }
    onChangeEmail(event){
        this.setState({email:event.target.value})
        // alert(email)
    }
    onChangeMessage(event){
        this.setState({message:event.target.value})
    }
    sendMessage = (e) => {

        e.preventDefault();
        let name = this.state.name;
        let email = this.state.email;
        let message = this.state.message;

        if (name.length === 0){

            Notify.warning("Name must not be empty!");

        }else if (email.length === 0){

            Notify.warning("Email must not be empty!");

        }else if (message.length === 0){

            Notify.warning("Message must not be empty!");

        }else if(!(Validation.validateName).test(name)){

            Notify.warning("Invalid name!");

        }else{

            let MyFormData = new FormData();
            MyFormData.append('name', name);
            MyFormData.append('email', email);
            MyFormData.append('message', message);

            let sendBtn = document.getElementById('sendBtn');
            sendBtn.innerHTML = "Sending";

            axios.post(AppUrl.ContactSend, MyFormData).then(res => {
                if (res.status === 200){
                    document.getElementById('contactForm').reset();
                    Notify.success("Message sent successfully")
                    sendBtn.innerHTML = "Send";
                }
            }).catch(error => {
                console.log(error)
            })


        }

    }

    render() {
        return (
            <Fragment>
                <Container>
                    <div className="breadbody">
                        <Breadcrumb>
                            <Link className="breadcrumb-item" to="/"> Home </Link>
                        <Link className="breadcrumb-item" to="/contact"> Contact Us </Link>
                        </Breadcrumb>
                    </div>
                    <Row className="p-2">
                        <Col className="shadow-sm bg-white mt-2" md={12} lg={12} sm={12} xs={12}>

                            <Row className="text-center">
                                <Col className="d-flex justify-content-center" md={6} lg={6} sm={12} xs={12}>
                                    <Form id="contactForm" onSubmit={this.sendMessage} className="onboardForm">
                                        <h4 className="section-title-login">CONTACT WITH US </h4>
                                        <h6 className="section-sub-title">Please Contact With Us </h6>

                                        <input onChange={this.onChangeName} className="form-control m-2" type="text" placeholder="Enter Your Name" />

                                        <input onChange={this.onChangeEmail} className="form-control m-2" type="email" placeholder="Enter Email" />

                                        <Form.Control onChange={this.onChangeMessage} className="form-control m-2" as="textarea" rows={3} placeholder="Message" />

                                        <Button id="sendBtn" type="submit" className="btn btn-block m-2 site-btn-login"> Send </Button>

                                    </Form>


                                </Col>

                                <Col className="p-0 Desktop m-0" md={6} lg={6} sm={6} xs={6}>
                                    <br></br><br></br>
                                    <p className="section-title-contact">
                                        {this.state.address}
                                    </p>

                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d162771.1102477064!2d-74.10054944459704!3d40.70681480276415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1627241390779!5m2!1sen!2sbd" width="550" height="450" styles="border:0;" allowFullScreen="0" title="ok" loading="lazy"></iframe>

                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
                {/*<ToastContainer />*/}
            </Fragment>
        );
    }
}

export default Contact;