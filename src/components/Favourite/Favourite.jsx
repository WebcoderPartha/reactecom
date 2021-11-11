import React, {Component, Fragment} from 'react';
import {Container, Row, Col, Card, Button} from "react-bootstrap";
import axios from "axios";
import AppUrl from "../../api/AppUrl";
import NewArrivalLoader from "../../Placeholder/NewArrivalLoader";
import Notify from "../../Noty/Notify";

class Favourite extends Component {
    constructor() {
        super();
        this.state = {
            favourites: [],
            loaderDiv: '',
            mainDiv: 'd-none'
        }
    }
    componentDidMount() {
        axios.get(AppUrl.getFavouriteList(this.props.user.id)).then(response => {
            if (response.status === 200){
                this.setState({
                    favourites:response.data,
                    loaderDiv: 'd-none',
                    mainDiv: ''
                });
            }
        }).catch(error => {
            if (error.response){
                console.log(error)
            }
        });
    }

    removeFavourite = (e) => {
        e.preventDefault();
        let user_id =  e.target.getAttribute('data-user-id');
        let product_id =  e.target.getAttribute('data-product-id');
        axios.get(AppUrl.removeFavourite(user_id, product_id)).then(response => {

            if (response.status === 200){
                const favourite = this.state.favourites;
                const newFavourite = favourite.filter(fav => {
                    return fav.product_id != product_id;
                })
                Notify.success(response.data.success);
                this.setState({
                    favourites:newFavourite
                })
            }
        }).catch(error => {
            if (error.response){
                console.log(error);
            }
        })
    }

    render() {

        const favourites = this.state.favourites;
        let myView;
        if (favourites.length > 0){
            myView = favourites.map((favourite,idx)=>{
                return (
                    <Col key={idx.toString()} className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
                        <Card className="image-box card w-100">
                            <img alt="" className="center w-75" src="https://rukminim1.flixcart.com/image/800/960/kf1fo280hlty2aw-0/t-shirt/w/s/e/-original-imafdfvvr8hqdu65.jpeg?q=50" />
                            <Card.Body>
                                <p className="product-name-on-card">{favourite.product_name}</p>
                                {favourite.discount_price !== '' ? (
                                    <p className="product-price-on-card card-text"><span className="text-primary">
                                    <del><small>$ {favourite.regular_price}</small></del></span><br/>${favourite.discount_price}
                                    </p>
                                ) : (
                                    <p className="product-price-on-card card-text"> ${favourite.regular_price}
                                    </p>
                                )}

                                <Button data-user-id={this.props.user.id} data-product-id={favourite.product_id} onClick={this.removeFavourite} className="btn btn-sm"> <i className="fa fa-trash-alt"></i> Remove </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                )
            })
        }else{
            myView = (
                <div>
                    <p>There are no favourite list</p>
                </div>
            )
        }

        return (
            <Fragment>
                <Container className={this.state.loaderDiv}>
                    <div className="section-title text-center mb-55"><h2> MY FAVOURITE ITEMS</h2>
                        <p>Some Of Our Exclusive Collection, You May Like</p>
                    </div>
                    <NewArrivalLoader />
                </Container>
                <Container className={"text-center mt-5 p-2 "+this.state.mainDiv}>
                    <div className="section-title text-center mb-55"><h2> MY FAVOURITE ITEMS</h2>
                        <p>Some Of Our Exclusive Collection, You May Like</p>
                    </div>

                    <Row>
                        {myView}
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Favourite;