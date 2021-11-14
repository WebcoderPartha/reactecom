import React, {Component,Fragment} from 'react';
import HeaderDesktop from "../components/common/HeaderDesktop";
import HeaderMobile from "../components/common/HeaderMobile";
import FooterDesktop from "../components/common/FooterDesktop";
import EditProfile from "../components/Profile/EditProfile";
import {Redirect} from "react-router-dom";
class EditProfilePage extends Component {
    render() {
        if (!localStorage.getItem('token')){
            return <Redirect to={"/"} />
        }
        const setUser = this.props.setUser
        return (
            <Fragment>
                <div className="desktop">
                    <HeaderDesktop user={this.props.user} />
                </div>
                <div className="mobile" style={{display:'none'}}>
                    <HeaderMobile />
                </div>
                <EditProfile user={this.props.user} setUser={setUser} />
                <FooterDesktop/>
            </Fragment>
        );
    }
}

export default EditProfilePage;