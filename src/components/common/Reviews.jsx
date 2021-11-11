import React, {Component, Fragment} from 'react';
import {Col} from "react-bootstrap";


class Reviews extends Component {

    render() {
        const review = this.props.reviews;
        let myView;
        if (review.length > 0){
             myView =  review.map((rev,i) => {
                if (rev.star === '1'){
                    return (
                        <div key={i.toString()}>
                            <p className=" p-0 m-0"><span className="Review-Title">{rev.user.name}</span> <span className="text-success"><i className="fa fa-star"></i>  </span></p>
                            <p>{rev.comment}</p>
                        </div>
                    )
                }else if(rev.star === '2'){
                    return (
                        <div key={i.toString()}>
                            <p className=" p-0 m-0"><span className="Review-Title">{rev.user.name}</span> <span className="text-success"><i className="fa fa-star"></i> <i className="fa fa-star"></i>  </span></p>
                            <p>{rev.comment}</p>
                        </div>
                    )
                }else if(rev.star === '3'){
                    return (
                        <div key={i.toString()}>
                            <p className=" p-0 m-0"><span className="Review-Title">{rev.user.name}</span> <span className="text-success"><i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i>  </span></p>
                            <p>{rev.comment}</p>
                        </div>
                    )
                }else if(rev.star === '4'){
                    return (
                        <div key={i.toString()}>
                            <p className=" p-0 m-0"><span className="Review-Title">{rev.user.name}</span> <span className="text-success"><i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i>  </span></p>
                            <p>{rev.comment}</p>
                        </div>
                    )
                }else if(rev.star === '5'){
                    return (
                        <div key={i.toString()}>
                            <p className=" p-0 m-0"><span className="Review-Title">{rev.user.name}</span> <span className="text-success"><i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i>  </span></p>
                            <p>{rev.comment}</p>
                        </div>
                    )
                }
            })

        }else{
            myView = (
                <p>No Reviews Available</p>
            );
        }

        return (
            <Fragment>
                <Col className="" md={6} lg={6} sm={12} xs={12}>
                    <h6 className="mt-2">REVIEWS</h6>
                    {myView}
                </Col>
            </Fragment>
        );
    }
}

export default Reviews;