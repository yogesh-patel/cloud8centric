/**
 * Copyright (c) 2016-present, SYNERZIP SOFTECH PVT, LTD.
 * All rights reserved.
 *
 * Created by nikhila on 26/02/16.
 */

'use strict';

import React, {Component,View} from 'react';
import {Navbar, NavItem, Nav, NavDropdown, MenuItem} from 'react-bootstrap';
import {Link, Events} from 'react-scroll';
import { push } from 'redux-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as appActionCreators from '../../actions/app';

class Menu extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    gotoSignUpPage(e) {
        e.preventDefault();
        this.props.routeDispatch(push("signup"));
    }

    gotoLoginPage(e) {
        //this.props.routeDispatch(push("login"));
        e.preventDefault();
        this.props.appActions.showLogin();
        this.setState({selectedOption: 'login'});
    }

    onProductSelected(){
        this.props.appActions.showHome();
    }

    onOptionSelected(selectedKey) {
        this.setState({selectedOption: selectedKey});
    }

    render() {
        let brandImg = (<img style={{marginTop:-10}} src={this.props.logo} alt=""/>);
        let inverseClass = this.props.inverseMenu ? 'inverse-menu' : 'menu';
        let itemColor = this.props.inverseMenu ? '' : '#FFFFFF';

        return (
            <Navbar inverse fixedTop fluid className={'home-menu '+inverseClass}>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="splashScreen" href="#" smooth duration={500}>{brandImg}</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav onSelect={this.onOptionSelected.bind(this)}
                         activeKey={this.state.selectedOption}
                         pullRight>
                        <li role="presentation">
                            <Link to="products" href="#" onClick={this.onProductSelected.bind(this)} style={{color:itemColor}} smooth duration={500}>PRODUCTS</Link>
                        </li>
                        <li role="presentation">
                            <Link to="contact" href="#" style={{color:itemColor}} smooth duration={500}>CONTACT</Link>
                        </li>
                        <NavItem onClick={this.gotoSignUpPage.bind(this)}>
                            <span style={{color:itemColor}}>SIGNUP</span>
                        </NavItem>

                        <NavItem onClick={this.gotoLoginPage.bind(this)}>
                              <span style={{color:itemColor}}>
                                LOGIN
                              </span>
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}


const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
    appActions: bindActionCreators(appActionCreators, dispatch),
    routeDispatch:dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
