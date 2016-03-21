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
        this.props.appActions.showSignUp();
        this.setState({selectedOption: 'signup'});

    }

    gotoLoginPage(e) {

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
                        <Link to="splashScreen" href="#" smooth duration={500}
                            onClick={this.onProductSelected.bind(this)}>{brandImg}</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav onSelect={this.onOptionSelected.bind(this)}
                         activeKey={this.state.selectedOption}
                         pullRight>
                        <li role="presentation">
                            <Link to="products" href="#"
                                  onClick={this.onProductSelected.bind(this)}
                                  style={{color:itemColor}} smooth duration={500}>PRODUCTS</Link>
                        </li>
                        <li role="presentation">
                            <Link to="contact" href="#" onClick={this.onProductSelected.bind(this)} style={{color:itemColor}} smooth duration={500}>CONTACT</Link>
                        </li>
                        <li role="presentation">
                            <Link to="splashScreen" href="#" onClick={this.gotoSignUpPage.bind(this)} style={{color:itemColor}} smooth duration={500}>
                                SIGNUP
                            </Link>
                        </li>
                        <li role="presentation">
                            <Link to="splashScreen" href="#" onClick={this.gotoLoginPage.bind(this)} style={{color:itemColor}} smooth duration={500}>
                                LOGIN
                            </Link>
                        </li>

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
