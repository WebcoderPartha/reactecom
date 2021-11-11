import React, {Component, Fragment} from 'react';
import HeaderDesktop from "../components/common/HeaderDesktop";
import HeaderMobile from "../components/common/HeaderMobile";
import FooterDesktop from "../components/common/FooterDesktop";
import Favourite from "../components/Favourite/Favourite";
import {Redirect} from "react-router";

class FavouritePage extends Component {
    componentDidMount() {
        window.scroll(0, 0)
    }

    render() {
        if (!localStorage.getItem('token')){
            return <Redirect to={"/"} />
        }
        return (
            <Fragment>
                <div className="desktop">
                    <HeaderDesktop user={this.props.user} />
                </div>
                <div className="mobile" style={{display:'none'}}>
                    <HeaderMobile />
                </div>
                <Favourite user={this.props.user} />
                <FooterDesktop/>
            </Fragment>
        );
    }
}

export default FavouritePage;