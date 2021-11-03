import React, {Component, Fragment} from 'react';
import HeaderDesktop from "../components/common/HeaderDesktop";
import HeaderMobile from "../components/common/HeaderMobile";
import FooterDesktop from "../components/common/FooterDesktop";
import Refund from "../components/Others/Refund";

class RefundPage extends Component {
    componentDidMount() {
        window.scroll(0, 0)
    }

    render() {
        return (
            <Fragment>
                <div className="desktop">
                    <HeaderDesktop />
                </div>
                <div className="mobile" style={{display:'none'}}>
                    <HeaderMobile />
                </div>
                <Refund />
                <FooterDesktop/>
            </Fragment>
        );
    }
}

export default RefundPage;