import React, {Component, Fragment} from 'react';
import HeaderDesktop from "../components/common/HeaderDesktop";
import HeaderMobile from "../components/common/HeaderMobile";
import FooterDesktop from "../components/common/FooterDesktop";
import Category from "../components/Category/Category";


class CategoryPage extends Component {
    constructor(props) {
        super();
        this.state = {
            slug: props.match.params.slug
        }
    }
    componentDidMount() {
        window.scroll(0,0);
    }

    render() {
        return (
            <Fragment>
                <div className="desktop">
                    <HeaderDesktop user={this.props.user} />
                </div>
                <div className="mobile" style={{display:'none'}}>
                    <HeaderMobile />
                </div>
                <Category slug={this.state.slug} />
                <FooterDesktop/>
            </Fragment>
        );
    }
}

export default CategoryPage;