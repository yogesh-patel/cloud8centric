'use strict';

import React, {Component} from 'react';
import {Grid, Row, Col, Button, Navbar, NavItem, Nav, NavDropdown, MenuItems} from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as subscriptionActionCreators from '../../actions/subscription';
import * as dashboardActionsCreators from '../../actions/dashboard';
import * as headerActionCreators from '../../actions/header';

class LeftNavigation extends Component{

    constructor(props){
        super(props);
        this.state = {
            selectedOption:'home'
        }
    }

    getSubscriptionList(){

        this.props.dashboardActions.showSubscription();
        this.props.headerActions.hideProducts();
        this.setState({selectedOption:'subscription'});

    }

    showHome(){
        this.props.dashboardActions.showHome();
        this.props.headerActions.hideProducts();
        this.setState({selectedOption:'home'});
    }

    render(){
        let {toggleClass} = this.props;

        let {selectedOption} = this.state;

        return(
            <div className="left-navigation">
                <Navbar inverse className={'navbar-twitch '+toggleClass} role="navigation">
                    <Nav>
                        <li onClick={this.showHome.bind(this)} className={selectedOption == 'home' ? "active":""}>
                            <a className="pointer">
                                <span className="small-nav" data-toggle="tooltip" data-placement="right" title="Home">
                                    <span className="glyphicon glyphicon-home"></span>
                                </span>
                                <span className="full-nav"> Home </span>
                            </a>
                        </li>
                        <li onClick={this.getSubscriptionList.bind(this)} className={selectedOption == 'subscription' ? "active":""}>
                            <a className="pointer">
                                <span className="small-nav" data-toggle="tooltip" data-placement="right" title="Subscriptions">
                                    <span className="fa-fw fa fa-rss"></span>
                                </span>
                                <span className="full-nav"> Subscriptions </span>
                            </a>
                        </li>
                        <li>
                            <a className="pointer">
                                <span className="small-nav" data-toggle="tooltip" data-placement="right" title="Profile">
                                    <span className="fa fa-user"></span>
                                </span>
                                <span className="full-nav"> Profile </span>
                            </a>
                        </li>
                    </Nav>
                </Navbar>
            </div>
        );

    }

}

const mapStateToProps = (state) => ({
    toggleClass:state.header.toggleClass
});

const mapDispatchToProps = (dispatch) => ({
    subscriptionActions: bindActionCreators(subscriptionActionCreators, dispatch),
    dashboardActions:bindActionCreators(dashboardActionsCreators,dispatch),
    headerActions: bindActionCreators(headerActionCreators, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(LeftNavigation);

