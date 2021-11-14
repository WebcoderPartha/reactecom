import React, {Component, Fragment} from 'react';
import HeaderDesktop from "../components/common/HeaderDesktop";
import HeaderMobile from "../components/common/HeaderMobile";
import FooterDesktop from "../components/common/FooterDesktop";
import Checkout from "../components/Cart/Checkout";
import {Redirect} from "react-router";

class CheckoutPage extends Component {
    componentDidMount() {
        window.scroll(0, 0)
    }


    render() {
        if (!localStorage.getItem('token')){
            return <Redirect to="/login" />
        }
        const user = this.props.user
        return (
            <Fragment>
                <div className="desktop">
                    <HeaderDesktop user={this.props.user} />
                </div>
                <div className="mobile" style={{display:'none'}}>
                    <HeaderMobile />
                </div>
                <Checkout user={user} />
                <FooterDesktop/>
            </Fragment>
        );
    }
}

export default CheckoutPage;