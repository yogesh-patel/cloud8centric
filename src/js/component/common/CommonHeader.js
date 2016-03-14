'use strict';

import React, {Component,View} from 'react';
import {Navbar, NavItem, Nav, NavDropdown, MenuItem, Glyphicon, Button} from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as headerActionCreators from '../../actions/header';
import * as authActionCreator from '../../actions/auth';
import {Link, Events,scroller} from 'react-scroll';

class CommonHeader extends Component{

	toggleLeftNavigation(){
		if(this.props.toggleClass == ''){
			this.props.headerActions.showNavigationMenu();
		}
		else if(this.props.toggleClass == 'open'){
			this.props.headerActions.hideNavigationMenu();
		}
	}

	onLogout(){
		this.props.authActions.logout();
	}
	onProductSelected(e){
		e.preventDefault();
		this.props.headerActions.showProducts();
		var interval = setInterval(()=>{
			clearInterval(interval);
			scroller.scrollTo("products",true, 500, -50);
		},0);

	}

	render(){
		var productLink = <span onClick={this.onProductSelected.bind(this)}>Products</span>;
		return(
			<div className="common-header">
				<Navbar inverse fixedTop fluid className={'home-menu inverse-menu'}>
					<Navbar.Header>
						<Navbar.Brand>
							<Glyphicon glyph="align-justify pointer" onClick={this.toggleLeftNavigation.bind(this)}/>
							<img className='logo common-header-logo' src='img/logo.png' alt="" />
						</Navbar.Brand>
						<Navbar.Toggle />
					</Navbar.Header>
					<Navbar.Collapse>
						<Nav pullRight>
							<NavItem eventKey={1}>
								{/*<Link to="products" href="#"
									  onClick={this.onProductSelected.bind(this)} smooth duration={500}>*/}
								{productLink}
								{/*</Link>*/}
							</NavItem>
							<NavDropdown eventKey={2} title="Welcome Username" id="basic-nav-dropdown">
								<MenuItem eventKey={2.1}>Profile</MenuItem>
								<MenuItem divider />
								<MenuItem eventKey={2.2} onClick={this.onLogout.bind(this)}>Logout</MenuItem>
							</NavDropdown>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	toggleClass:state.header.toggleClass
});

const mapDispatchToProps = (dispatch) => ({
	headerActions: bindActionCreators(headerActionCreators, dispatch),
	authActions: bindActionCreators(authActionCreator, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(CommonHeader);
