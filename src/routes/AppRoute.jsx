import React, {Component, Fragment} from 'react';
import {Route, Switch} from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import ContactPage from "../pages/ContactPage";
import ProductDetailsPage from "../pages/ProductDetailsPage";
import NotificationPage from "../pages/NotificationPage";
import FavouritePage from "../pages/FavouritePage";
import CartPage from "../pages/CartPage";
import AboutUsPage from "../pages/AboutUsPage";
import PurchasePage from "../pages/PurchasePage";
import PrivacyPage from "../pages/PrivacyPage";
import RefundPage from "../pages/RefundPage";
import CompnayProfilePage from "../pages/CompnayProfilePage";

class AppRoute extends Component {
    render() {
        return (
            <Fragment>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exac path="/login" component={LoginPage} />
                    <Route exac path="/contact" component={ContactPage} />
                    <Route exac path="/product-details" component={ProductDetailsPage} />
                    <Route exac path="/notifications" component={NotificationPage} />
                    <Route exac path="/favourite" component={FavouritePage} />
                    <Route exac path="/cart" component={CartPage} />
                    <Route exac path="/about" component={AboutUsPage} />
                    <Route exac path="/purchase" component={PurchasePage} />
                    <Route exac path="/privacy" component={PrivacyPage} />
                    <Route exac path="/refund" component={RefundPage} />
                    <Route exac path="/company" component={CompnayProfilePage} />
                </Switch>
            </Fragment>
        );
    }
}

export default AppRoute;