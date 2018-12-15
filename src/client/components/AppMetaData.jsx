import React, {Component} from "react";
import {Helmet} from "react-helmet";
import PropTypes from "prop-types";

export class AppMetaData extends Component {

    static propTypes = {
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            description: props.description
        };
    }

    render() {
        return <Helmet>
            {/* Set site wide header info here and specific overrides in pages */}
            <title>{this.state.title}</title>
            <meta name="description" content={this.props.description}/>
            <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=2, user-scalable=yes"/>
            <meta name="apple-mobile-web-app-capable" content="yes"/>
            <meta name="mobile-web-app-capable" content="yes"/>
        </Helmet>;
    }
}