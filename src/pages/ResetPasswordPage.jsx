import React, {Component, Fragment} from 'react';
import HeaderDesktop from "../components/common/HeaderDesktop";
import HeaderMobile from "../components/common/HeaderMobile";
import FooterDesktop from "../components/common/FooterDesktop";
import ResetPassword from "../components/common/ResetPassword";

class ResetPasswordPage extends Component {
    render() {
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
                <ResetPassword user={user} setUser={setUser} />
                <FooterDesktop/>
            </Fragment>
        );
    }
}

export default ResetPasswordPage;