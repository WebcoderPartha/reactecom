import React, {Component, Fragment} from 'react';
import HeaderDesktop from "../components/common/HeaderDesktop";
import HeaderMobile from "../components/common/HeaderMobile";
import FooterDesktop from "../components/common/FooterDesktop";
import ChangePassword from "../components/Profile/ChangePassword";

class ChangePasswordPage extends Component {
    render() {
        return (
            <Fragment>
                <div className="desktop">
                    <HeaderDesktop user={this.props.user} />
                </div>
                <div className="mobile" style={{display:'none'}}>
                    <HeaderMobile />
                </div>
                <ChangePassword  user={this.props.user}/>
                <FooterDesktop/>
            </Fragment>
        );
    }
}

export default ChangePasswordPage;