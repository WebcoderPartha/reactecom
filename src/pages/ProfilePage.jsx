import React, {Component, Fragment} from 'react';
import HeaderDesktop from "../components/common/HeaderDesktop";
import HeaderMobile from "../components/common/HeaderMobile";
import FooterDesktop from "../components/common/FooterDesktop";
import Profile from "../components/common/Profile";
import {Redirect} from "react-router";

class ProfilePage extends Component {
    constructor(props) {
        super();
        this.state = {
            user:props.user,
        }
    }
    render() {
        if (!localStorage.getItem('token')){
            return <Redirect to="/login" />
        }


        return (

            <Fragment>
                <div className="desktop">
                    <HeaderDesktop />
                </div>
                <div className="mobile" style={{display:'none'}}>
                    <HeaderMobile />
                </div>
                <Profile user={this.state.user} />
                <FooterDesktop/>
            </Fragment>
        );
    }
}

export default ProfilePage;