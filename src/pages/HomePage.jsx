import React, {Component, Fragment} from 'react';
import FeaturedProject from "../components/home/FeaturedProject";
import Categories from "../components/home/Categories";
import Collection from "../components/home/Collection";
import NewArrival from "../components/home/NewArrival";
import HomeTop from "../components/home/HomeTop";
import HeaderMobile from "../components/common/HeaderMobile";
import HeaderDesktop from "../components/common/HeaderDesktop";
import HomeTopMobile from "../components/home/HomeTopMobile";
import FooterDesktop from "../components/common/FooterDesktop";

class HomePage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }

    render() {
        return (
            <Fragment>
                <div className="desktop">
                    <HeaderDesktop />
                    <HomeTop/>
                </div>
                <div className="mobile" style={{display:'none'}}>
                    <HeaderMobile />
                    <HomeTopMobile/>
                </div>
                <FeaturedProject/>
                <NewArrival />
                <Collection />
                <Categories />
                <FooterDesktop/>
            </Fragment>
        );
    }
}

export default HomePage;