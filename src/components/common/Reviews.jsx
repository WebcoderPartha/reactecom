import React, {Component, Fragment} from 'react';
import {Col} from "react-bootstrap";
import ReactStars from "react-rating-stars-component";

class Reviews extends Component {

    render() {
        const reviews = this.props.reviews;
        let myView;
        if (reviews.length > 0){
            myView = reviews.map((review, idx)=> {
                return (
                    <div key={idx.toString()}>
                        <ReactStars edit={false} value={review.star} count={5} size={40} activeColor="orange" isHalf={true}
                                    emptyIcon={<i className="far fa-star"></i>}
                                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                                    fullIcon={<i className="fa fa-star"></i>} />
                        <p className=" p-0 m-0">
                            <span className="Review-Title">by {review.user.name}</span>
                        </p>
                        <p>{review.comment}</p>
                        <hr/>
                    </div>
                )
            })

            return (
                <Fragment>
                    <Col className="" md={6} lg={6} sm={12} xs={12}>
                        <h6 className="mt-2">REVIEWS</h6>
                        {myView}
                    </Col>
                </Fragment>
            );
        }else{
            return (
                <Fragment>
                    <Col className="" md={6} lg={6} sm={12} xs={12}>
                        <h6 className="mt-2">REVIEWS</h6>
                        <div>
                            <h2>No Review Yet</h2>
                        </div>
                    </Col>
                </Fragment>
            );
        }
    }
}

export default Reviews;