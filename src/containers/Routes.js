// This is route
import { Route, Switch } from "react-router";
import React, { Component } from "react";
import App from "../App";
import SecondPage from "../components/SecondPage";

export default class Routes extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact={true} path='/' component={App} />
                    <Route exact={true} path='/second' component={SecondPage} />
                </Switch>
            </div>
        );
    }
}
