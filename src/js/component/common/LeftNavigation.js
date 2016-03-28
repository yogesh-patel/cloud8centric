'use strict';

import React, {Component} from 'react';
import {Grid, Row, Col, Button, Navbar, NavItem, Nav, NavDropdown, MenuItems} from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as subscriptionActionCreators from '../../actions/subscription';
import * as dashboardActionsCreators from '../../actions/dashboard';
import * as headerActionCreators from '../../actions/header';
import * as appActionCreators from '../../actions/app';

class LeftNavigation extends Component {

    constructor(props) {

        super(props);
        this.state = {
            selectedOption: 'subscription'
        }

    }

    getSubscriptionList() {

        this.props.dashboardActions.showSubscription();
        this.props.headerActions.hideProducts("Products");
        this.setState({selectedOption: 'subscription'});

    }

    getOrganizationsList() {

        this.props.dashboardActions.showOrganization();
        this.props.headerActions.hideProducts("Products");
        this.setState({selectedOption: 'organization'});

    }

    showHome() {

        this.props.dashboardActions.showHome();
        this.props.headerActions.hideProducts("Products");
        this.setState({selectedOption: 'home'});
    }

    render() {
        let leftBar = null;
        let {toggleClass} = this.props;

        let {selectedOption} = this.state;

        let userRoles = localStorage.getItem("roles");

        let roleName = _.map(JSON.parse(userRoles), (role) => {
           return role.name;
        });

        if (roleName[0] === "Admin") {
            leftBar = <span></span>
        }
        else {
            this.state.selectedOption = 'subscription';
            leftBar =
                <div className="left-navigation">
                    <Navbar inverse className={'navbar-twitch '+toggleClass} role="navigation">
                        <Nav>
                            {/*<li onClick={this.showHome.bind(this)} className={selectedOption == 'home' ? "active":""}>
                                <a className="pointer">
                                    <span className="small-nav" data-toggle="tooltip" data-placement="right" title="Home">
                                        <span className="glyphicon glyphicon-home"></span>
                                    </span>
                                    <span className="full-nav"> Home </span>
                                </a>
                            </li>*/}
                            <li onClick={this.getSubscriptionList.bind(this)}
                              className={selectedOption == 'subscription' ? "active":""}>
                                <a className="pointer">
                                                <span className="small-nav" data-toggle="tooltip" data-placement="right"
                                                      title="Subscriptions">
                                                    <span className="fa-fw fa fa-rss"></span>
                                                </span>
                                    <span className="full-nav"> Subscriptions </span>
                                </a>
                            </li>
                        </Nav>
                    </Navbar>
                </div>
        }
        return (
            <span>
                {leftBar}
            </span>
        );

    }

}

const mapStateToProps = (state) => ({
    toggleClass: state.header.toggleClass,
    userRole: state.auth.userRole
});

const mapDispatchToProps = (dispatch) => ({
    subscriptionActions: bindActionCreators(subscriptionActionCreators, dispatch),
    dashboardActions: bindActionCreators(dashboardActionsCreators, dispatch),
    headerActions: bindActionCreators(headerActionCreators, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(LeftNavigation);
