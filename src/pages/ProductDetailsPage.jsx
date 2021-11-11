import React, {Component, Fragment} from 'react';
import HeaderDesktop from "../components/common/HeaderDesktop";
import HeaderMobile from "../components/common/HeaderMobile";
import FooterDesktop from "../components/common/FooterDesktop";
import ProductDetails from "../components/ProductDetails/ProductDetails";


class ProductDetailsPage extends Component {
    constructor(props) {
        super();
        this.state = {
            productSlug:props.match.params.product,
            user:props.user
        }
    }
    componentDidMount() {
        window.scroll(0,0)
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
                <ProductDetails user={this.state.user} productSlug={this.state.productSlug} />
                <FooterDesktop/>
            </Fragment>
        );
    }
}

export default ProductDetailsPage;