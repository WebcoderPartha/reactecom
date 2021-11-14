import React, {Component,Fragment} from 'react';
import {Col, Container, Row, Card, ListGroup, ListGroupItem} from "react-bootstrap";
import {Link} from "react-router-dom";

class Profile extends Component {

    render() {
        let name;
        let email
        if (this.props.user){
             name = this.props.user.name;
             email = this.props.user.email;
        }
        return (
            <Fragment>
                <Container>
                    <Row>
                        <Col lg={4} md={4} sm={12} >
                            <Card style={{ width: '18rem' }} className="text-center d-block">
                                <Card.Img variant="top" src="https://www.pngarts.com/files/10/Default-Profile-Picture-Download-PNG-Image.png" className="userprofiless" alt="" />

                                <ListGroup className="list-group-flush">

                                    <ListGroupItem> <Link className="text-link" to="/order/list"> <p className="product-name-on-card"> Order List </p></Link> </ListGroupItem>

                                    <ListGroupItem> <Link className="text-link" to={"/profile/edit/"+this.props.user.id+'/'+this.props.user.slug}> <p className="product-name-on-card">Edit Profile</p></Link> </ListGroupItem>

                                    <ListGroupItem> <Link className="text-link" to={"/profile/"+this.props.user.id+'/'+this.props.user.slug+'/update-password'}> <p className="product-name-on-card">Change Password</p></Link> </ListGroupItem>
                                </ListGroup>

                            </Card>


                        </Col>


                        <Col lg={8} md={8} sm={12} >
                            <Card.Header> <div className="section-title text-center m-0">
                                <h2>PROFILE PAGE</h2>
                            </div></Card.Header>
                            <ul className="list-group">
                                <li className="list-group-item">Name :  {name} </li>
                                <li className="list-group-item">Email :  {email} </li>
                            </ul>
                        </Col>


                    </Row>
                </Container>


            </Fragment>
        );
    }
}

export default Profile;