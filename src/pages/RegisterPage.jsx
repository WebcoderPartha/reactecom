import React, {Component, Fragment} from 'react';
import HeaderDesktop from "../components/common/HeaderDesktop";
import FooterDesktop from "../components/common/FooterDesktop";
import Register from "../components/common/Register";
import HeaderMobile from "../components/common/HeaderMobile";
import {Redirect} from "react-router-dom";


class RegisterPage extends Component {
    render() {

        if (localStorage.getItem('token')){
            return <Redirect to="/profile" />
        }
        const user = this.props.user;
        const setUser = this.props.setUser;
        return (
            <Fragment>
                <div className="desktop">
                    <HeaderDesktop />
                </div>
                <div className="mobile" style={{display:'none'}}>
                    <HeaderMobile />
                </div>
                <Register user={user} setUser={setUser} />
                <FooterDesktop/>
            </Fragment>
        );
    }
}

export default RegisterPage;