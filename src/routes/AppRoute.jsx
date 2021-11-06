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

                    <Route exact path="/" render={(props)=> <HomePage {...props} key={Date.now()} /> } />
                    <Route exact path="/login" render={(props) => <LoginPage {...props} key={Date.now()} />} />
                    <Route exact path="/contact" render={(props) => <ContactPage {...props} key={Date.now()} /> } />
                    <Route exact path="/products/:product" render={(props) => <ProductDetailsPage {...props} key={Date.now()} /> } />
                    <Route exact path="/notifications" render={(props) => <NotificationPage {...props} key={Date.now()} /> } />
                    <Route exact path="/favourite" render={(props) => <FavouritePage {...props} key={Date.now()} /> } />
                    <Route exact path="/cart" render={(props) => <CartPage {...props} key={Date.now()} /> } />
                    <Route exact path="/about" render={(props) => <AboutUsPage {...props} key={Date.now()} /> } />
                    <Route exact path="/purchase" render={(props) => <PurchasePage {...props} key={Date.now()} /> } />
                    <Route exact path="/privacy" render={(props) => <PrivacyPage {...props} key={Date.now()} />} />
                    <Route exact path="/refund" render={(props) => <RefundPage {...props} key={Date.now()} /> } />
                    <Route exact path="/company" render={(props) => <CompnayProfilePage {...props} key={Date.now()} /> } />
                    <Route exact path="/category/:slug" render={(props) => <CategoryPage {...props} key={Date.now()} /> } />
                    <Route exact path="/category/:category/:subcategory" render={(props) => <SubcategoryPage {...props} key={Date.now()} /> } />
                </Switch>
            </Fragment>
        );
    }
}

export default AppRoute;