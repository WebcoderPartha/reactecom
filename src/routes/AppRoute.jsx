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
import RegisterPage from "../pages/RegisterPage";
import ForgetPasswordPage from "../pages/ForgetPasswordPage";
import ResetPasswordPage from "../pages/ResetPasswordPage";
import ProfilePage from "../pages/ProfilePage";
import axios from "axios";
import AppUrl from "../api/AppUrl";
import Logout from "../components/common/Logout";


class AppRoute extends Component {
    constructor() {
        super();
        this.state = {
            user: {}
        }
    }
    componentDidMount() {
        axios.get(AppUrl.GetAuthUser).then(res => {
            if (res.status === 200){
                this.setUser(res.data)
            }
        }).catch(error => {
            console.log(error)
        })
    }
    setUser = (user) => {
        this.setState({
            user:user
        })
    }
    render() {
        return (
            <Fragment>
                <Switch>

                    <Route exact path="/" render={(props)=> <HomePage user={this.state.user} {...props} key={Date.now()} /> } />
                    <Route exact path="/login" render={(props) => <LoginPage {...props} user={this.state.user} setUser={this.setUser} key={Date.now()} />} />
                    <Route exact path="/logout" render={(props) => <Logout {...props} key={Date.now()} />} />
                    <Route exact path="/register" render={(props) => <RegisterPage user={this.state.user} setUser={this.setUser} {...props} key={Date.now()} />} />
                    <Route exact path="/forget" render={(props) => <ForgetPasswordPage user={this.state.user} {...props} key={Date.now()} />} />
                    <Route exact path="/reset" render={(props) => <ResetPasswordPage user={this.state.user} setUser={this.setUser} {...props} key={Date.now()} />} />
                    <Route exact path="/profile" render={(props) => <ProfilePage user={this.state.user} {...props} key={Date.now()} />} />
                    <Route exact path="/contact" render={(props) => <ContactPage user={this.state.user} {...props} key={Date.now()} /> } />
                    <Route exact path="/products/:product" render={(props) => <ProductDetailsPage {...props} user={this.state.user} key={Date.now()} /> } />
                    <Route exact path="/notifications" render={(props) => <NotificationPage user={this.state.user} {...props} key={Date.now()} /> } />
                    <Route exact path="/favourite" render={(props) => <FavouritePage user={this.state.user} {...props} key={Date.now()} /> } />
                    <Route exact path="/cart" render={(props) => <CartPage user={this.state.user} {...props} key={Date.now()} /> } />
                    <Route exact path="/about" render={(props) => <AboutUsPage user={this.state.user} {...props} key={Date.now()} /> } />
                    <Route exact path="/purchase" render={(props) => <PurchasePage user={this.state.user} {...props} key={Date.now()} /> } />
                    <Route exact path="/privacy" render={(props) => <PrivacyPage user={this.state.user} {...props} key={Date.now()} />} />
                    <Route exact path="/refund" render={(props) => <RefundPage user={this.state.user} {...props} key={Date.now()} /> } />
                    <Route exact path="/company" render={(props) => <CompnayProfilePage user={this.state.user} {...props} key={Date.now()} /> } />
                    <Route exact path="/category/:slug" render={(props) => <CategoryPage user={this.state.user} {...props} key={Date.now()} /> } />
                    <Route exact path="/category/:category/:subcategory" render={(props) => <SubcategoryPage user={this.state.user} {...props} key={Date.now()} /> } />
                </Switch>
            </Fragment>
        );
    }
}

export default AppRoute;