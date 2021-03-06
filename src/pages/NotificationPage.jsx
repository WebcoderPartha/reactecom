import React, {Component, Fragment} from 'react';
import HeaderDesktop from "../components/common/HeaderDesktop";
import HeaderMobile from "../components/common/HeaderMobile";
import FooterDesktop from "../components/common/FooterDesktop";
import Notification from "../components/Notification/Notification";
import axios from "axios";
import AppUrl from "../api/AppUrl";
import {Redirect} from "react-router";

class NotificationPage extends Component {
    constructor() {
        super();
        this.state = {
            notification: []
        }
    }
    componentDidMount() {
        window.scroll(0, 0);
        axios.get(AppUrl.NoticeAll).then(res => {
            if (res.status === 200){
                this.setState({
                    notification:res.data
                });
            }
        }).catch(error => {
            console.log(error)
        })
    }

    render() {
        if (!localStorage.getItem('token')){
            return <Redirect to={"/"} />
        }
        return (
            <Fragment>
                <div className="desktop">
                    <HeaderDesktop user={this.props.user} />
                </div>
                <div className="mobile" style={{display:'none'}}>
                    <HeaderMobile />
                </div>
                <Notification notification={this.state.notification} />
                <FooterDesktop/>
            </Fragment>
        );
    }
}

export default NotificationPage;