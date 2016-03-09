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

class Menu extends Component {

  constructor(props){
    super(props);
    this.state={};
  }
  gotoSignUpPage(){
    this.props.routeDispatch(push("signup"));
  }
  gotoLoginPage(){
    this.props.routeDispatch(push("login"));
  }

  onOptionSelected(selectedKey){
    this.setState({selectedOption:selectedKey});
  }

  render() {
    let brandImg = (<img className='logo' src={this.props.logo} alt="" />);
    let inverseClass = this.props.inverseMenu ? 'inverse-menu' : 'menu';

    return (
      <Navbar inverse fixedTop fluid className={inverseClass}>
        <Navbar.Header>
          <Navbar.Brand>
              {brandImg}
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav onSelect={this.onOptionSelected.bind(this)}
               activeKey={this.state.selectedOption}
               pullRight>
            <li role="presentation">
              <Link to="products" href="#" smooth duration={500}>Product</Link>
            </li>
            <NavItem eventKey={2}>Contact</NavItem>
            <NavItem eventKey={3} onClick={this.gotoSignUpPage.bind(this)}>SignUp</NavItem>
            <NavItem eventKey={4} onClick={this.gotoLoginPage.bind(this)}>Login</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}


const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
  routeDispatch:dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
