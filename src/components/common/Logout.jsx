import React, {Component} from 'react';
import {Redirect} from "react-router-dom";
import Notify from "../../Noty/Notify";

class Logout extends Component {

    render() {
        if (localStorage.getItem('token')){
            localStorage.clear();
            Notify.success("Logged Out Successfully")
        }
        if (!localStorage.getItem('token')){
            return <Redirect to={"/login"} />
        }
        return (
            <div>
                
            </div>
        );
    }
}

export default Logout;