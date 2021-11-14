import React, {Component, Fragment} from 'react';
import {Redirect} from "react-router-dom";
import HeaderDesktop from "../components/common/HeaderDesktop";
import HeaderMobile from "../components/common/HeaderMobile";
import FooterDesktop from "../components/common/FooterDesktop";
import OrderDetails from "../components/Order/OrderDetails";

class OrderDetailsPage extends Component {
    constructor(props) {
        super();
        this.state = {
            invoiceNo:props.match.params.invoiceNo,
            user: props.user
        }
    }

    componentDidMount() {
        window.scroll(0, 0);
    }

    render() {
        if (!localStorage.getItem('token')){
            return <Redirect to="/login" />
        }
        return (
            <Fragment>
                <div className="desktop">
                    <HeaderDesktop user={this.props.user} />
                </div>
                <div className="mobile" style={{display:'none'}}>
                    <HeaderMobile />
                </div>
                <OrderDetails invoiceNo={this.state.invoiceNo} user={this.state.user} />
                <FooterDesktop/>
            </Fragment>
        );
    }
}

export default OrderDetailsPage;