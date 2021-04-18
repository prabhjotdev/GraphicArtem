import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import MainRegister from "./Screens/Registration/MainRegistration";
import GeneralReg from "./Screens/Registration/GeneralRegistration";
import ProfReg from "./Screens/Registration/ProfessionalRegisteration";
import Home from "./Screens/Home/Home";
import Login from "./Screens/Login/Login";
import Chat from "./Screens/Chat/Chat";
import Assets from "./Screens/OwnAssets/Assets";
import Cart from "./Screens/ShoppingCart/Cart";
import UploadFiles from "./Screens/UploadAssets/upload-files";

import history from './history';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Login} />
                    <Route path="/Home" exact component={Home} />
                    <Route path="/MainRegister" component={MainRegister} />
                    <Route path="/GeneralReg" component={GeneralReg} />
                    <Route path="/ProfReg" component={ProfReg} />
                    <Route path="/Chat" component={Chat} />
                    <Route path="/Assets" component={UploadFiles} />
                    <Route path="/Cart" component={Cart} />
                </Switch>
            </Router>
        )
    }
}