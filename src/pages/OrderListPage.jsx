import React, {Component, Fragment} from 'react';
import {Redirect} from "react-router";
import HeaderDesktop from "../components/common/HeaderDesktop";
import HeaderMobile from "../components/common/HeaderMobile";
import FooterDesktop from "../components/common/FooterDesktop";
import OrderList from "../components/Order/OrderList";

class OrderListPage extends Component {
    componentDidMount() {
        window.scroll(0, 0)
    }

    render() {
        if (!localStorage.getItem('token')){
            return <Redirect to="/login" />
        }
        const user = this.props.user;
        return (
            <Fragment>
                <div className="desktop">
                    <HeaderDesktop user={this.props.user} />
                </div>
                <div className="mobile" style={{display:'none'}}>
                    <HeaderMobile />
                </div>
                <OrderList user={user} />
                <FooterDesktop/>
            </Fragment>
        );
    }
}

export default OrderListPage;