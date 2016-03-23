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
            selectedOption: 'home'
        }

    }

    getSubscriptionList() {

        this.props.dashboardActions.showSubscription();
        this.props.headerActions.showProducts(false);
        this.setState({selectedOption: 'subscription'});

    }

    getOrganizationsList() {

        this.props.dashboardActions.showOrganization();
        this.props.headerActions.showProducts(false);
        this.setState({selectedOption: 'organization'});

    }

    showHome() {

        this.props.dashboardActions.showHome();
        this.props.headerActions.showProducts(false);
        this.setState({selectedOption: 'home'});
    }

    render() {
        let leftBar = null;
        let {showNavigation, userRole} = this.props;
        let showNavigationClass = showNavigation?'open':'';

        let {selectedOption} = this.state;
        let roleName = _.map(userRole, (roles) => {
            return roles.name;
        });
        if (roleName == "Admin") {
            this.state.selectedOption = 'organization';
            leftBar = <li onClick={this.getOrganizationsList.bind(this)}
                          className={selectedOption == 'organization' ? "active":""}>
                <a className="pointer">
                                <span className="small-nav" data-toggle="tooltip" data-placement="right"
                                      title="Organizations">
                                    <span className="fa fa-users"></span>
                                </span>
                    <span className="full-nav"> Organizations </span>
                </a>
            </li>
        }
        else if(roleName == "AccountOwner") {
            this.state.selectedOption = 'subscription';
            leftBar = <li onClick={this.getSubscriptionList.bind(this)}
                          className={selectedOption == 'subscription' ? "active":""}>
                <a className="pointer">
                                <span className="small-nav" data-toggle="tooltip" data-placement="right"
                                      title="Subscriptions">
                                    <span className="fa-fw fa fa-rss"></span>
                                </span>
                    <span className="full-nav"> Subscriptions </span>
                </a>
            </li>
        }
        return (

            <div className="left-navigation">
                <Navbar inverse className={'navbar-twitch ' + showNavigationClass} role="navigation">
                    <Nav>
                        <li onClick={this.showHome.bind(this)} className={selectedOption == 'home' ? "active":""}>
                            <a className="pointer">
                                <span className="small-nav" data-toggle="tooltip" data-placement="right" title="Home">
                                    <span className="glyphicon glyphicon-home"></span>
                                </span>
                                <span className="full-nav"> Home </span>
                            </a>
                        </li>
                        {leftBar}
                    </Nav>
                </Navbar>
            </div>
        );

    }

}

const mapStateToProps = (state) => ({
    showNavigation: state.header.showNavigation,
    userRole: state.auth.userRole
});

const mapDispatchToProps = (dispatch) => ({
    subscriptionActions: bindActionCreators(subscriptionActionCreators, dispatch),
    dashboardActions: bindActionCreators(dashboardActionsCreators, dispatch),
    headerActions: bindActionCreators(headerActionCreators, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(LeftNavigation);
