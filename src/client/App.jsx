import React, {Component} from "react";
import {renderRoutes} from "react-router-config";
import PropTypes from "prop-types";
import {AppMetaData} from "./components/AppMetaData";

import Logo from "../static/logo.svg";


export default class App extends Component {

    static propTypes = {
        route: PropTypes.object.isRequired
    };

    render() {
        return (
            <div className="app-wrapper">

                <AppMetaData title={"My site title"} description={"site description here"}/>

                <Logo className={"App-logo"}/>

                {renderRoutes(this.props.route.routes)}

            </div>
        );
    }

}
