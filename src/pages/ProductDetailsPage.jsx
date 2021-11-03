import React, {Component, Fragment} from 'react';
import HeaderDesktop from "../components/common/HeaderDesktop";
import HeaderMobile from "../components/common/HeaderMobile";
import FooterDesktop from "../components/common/FooterDesktop";
import ProductDetails from "../components/ProductDetails/ProductDetails";
import ReletedProducts from "../components/ProductDetails/ReletedProducts";

class ProductDetailsPage extends Component {
    componentDidMount() {
        window.scroll(0,0)
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
                <ProductDetails />
                <ReletedProducts />
                <FooterDesktop/>
            </Fragment>
        );
    }
}

export default ProductDetailsPage;