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
import CategoryPage from "../pages/CategoryPage";
import SubcategoryPage from "../pages/SubcategoryPage";

class AppRoute extends Component {
    render() {
        return (
            <Fragment>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/login" component={LoginPage} />
                    <Route exact path="/contact" component={ContactPage} />
                    <Route exact path="/products/:product" component={ProductDetailsPage} />
                    <Route exact path="/notifications" component={NotificationPage} />
                    <Route exact path="/favourite" component={FavouritePage} />
                    <Route exact path="/cart" component={CartPage} />
                    <Route exact path="/about" component={AboutUsPage} />
                    <Route exact path="/purchase" component={PurchasePage} />
                    <Route exact path="/privacy" component={PrivacyPage} />
                    <Route exact path="/refund" component={RefundPage} />
                    <Route exact path="/company" component={CompnayProfilePage} />
                    <Route exact path="/category/:slug" component={CategoryPage} />
                    <Route exact path="/category/:category/:subcategory" component={SubcategoryPage} />
                </Switch>
            </Fragment>
        );
    }
}

export default AppRoute;