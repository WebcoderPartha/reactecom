import React, {Component, Fragment} from 'react';
import HeaderDesktop from "../components/common/HeaderDesktop";
import HeaderMobile from "../components/common/HeaderMobile";
import FooterDesktop from "../components/common/FooterDesktop";
import UserLogin from "../components/common/UserLogin";

class LoginPage extends Component {

    componentDidMount() {
        window.scroll(0, 0)
    }

    render() {
        const user = this.props.user;
        const setUser= this.props.setUser;
        return (
            <Fragment>
                <div className="desktop">
                    <HeaderDesktop user={this.props.user} />
                </div>
                <div className="mobile" style={{display:'none'}}>
                    <HeaderMobile />
                </div>
                <UserLogin user={user} setUser={setUser}  />
                <FooterDesktop/>
            </Fragment>
        );
    }
}

export default LoginPage;