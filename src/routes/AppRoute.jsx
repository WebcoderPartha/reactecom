import React, {Component, Fragment} from 'react';
import {Route, Switch} from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import ContactPage from "../pages/ContactPage";
import ProductDetailsPage from "../pages/ProductDetailsPage";

class AppRoute extends Component {
    render() {
        return (
            <Fragment>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exac path="/login" component={LoginPage} />
                    <Route exac path="/contact" component={ContactPage} />
                    <Route exac path="/product-details" component={ProductDetailsPage} />
                </Switch>
            </Fragment>
        );
    }
}

export default AppRoute;