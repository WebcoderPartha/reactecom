import React, {Component, Fragment} from 'react';
import HeaderDesktop from "../components/common/HeaderDesktop";
import HeaderMobile from "../components/common/HeaderMobile";
import FooterDesktop from "../components/common/FooterDesktop";
import Subcategory from "../components/Category/Subcategory";

class SubcategoryPage extends Component {
    constructor(props) {
        super();
        this.state = {
            categorySlug: props.match.params.category,
            subcategorySlug: props.match.params.subcategory
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
                <Subcategory categorySlug={this.state.categorySlug} subcategorySlug={this.state.subcategorySlug} />
                <FooterDesktop/>
            </Fragment>
        );
    }
}

export default SubcategoryPage;