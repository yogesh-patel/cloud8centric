'use strict';

import React, {Component, View} from 'react';
import {Navbar, NavItem, Nav, NavDropdown, MenuItem} from 'react-bootstrap';
//import { connect } from 'react-redux';
//import { bindActionCreators } from 'redux';
//import * as authActionCreators from '../actions/auth';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }

    authenticate(e) {
        //alert(this.state.username);
        if(this.state.username == "" || this.state.password == "") return;
        e.preventDefault();
        this.props.authenticateUser(this.state.username, this.state.password);
    }

    onUsernameChange(e) {
        this.setState({username: e.target.value});
    }

    onPasswordChange(e) {
        this.setState({password: e.target.value});
    }

    render() {


        //
        //console.log("statusText>>", statusText);
        //
        //if(isAuthenticated) {
        //    <LandingPage />
        //} else {
        //    <Login authenticateUser={this.props.authActions.authenticateUser}/>
        //}

        return (
            <div>
                <div className="container-fluid">
                    <div className="row top-buffer">
                        <form name="signup">
                            <div className="col col-xs-12 col-md-12 col-sm-12">
                                <div className="row">
                                    <div className="col col-xs-12 col-sm-12 col-md-6 col-md-offset-3">
                                        <div className="panel panel-info">

                                            <div className="panel-heading">
                                                <div className="row">
                                                    <div className="col col-xs-12 col-sm-12 col-md-6 ">
                                                        <label>Login</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="panel-body">
                                                <div className="row">
                                                    <div className="col col-xs-12 col-sm-12 col-md-12">
                                                        <div className="form-horizontal">
                                                            <div className="form-group required">
                                                                <label className="col-sm-3 control-label bold-text">
                                                                    Username</label>
                                                                <div className="col-sm-9">
                                                                    <input type="text" name="userName"
                                                                           value={this.state.username}
                                                                           className="form-control"
                                                                           placeholder="Enter text"
                                                                           onChange={this.onUsernameChange.bind(this)}
                                                                           required/>
                                                                </div>
                                                            </div>
                                                            <div className="form-group required">
                                                                <label className="col-sm-3 control-label bold-text">Password</label>
                                                                <div className="col-sm-9">
                                                                    <input type="password" name="password"
                                                                           className="form-control"
                                                                           placeholder="Password"
                                                                           onChange={this.onPasswordChange.bind(this)}
                                                                           required/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col col-xs-12 col-sm-12 col-md-12">
                                                        <button type="submit"
                                                                className="btn btn-primary pull-right left-buffer"
                                                                onClick={this.authenticate.bind(this)}>Login
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-12">&nbsp;</div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-12">&nbsp;</div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12">&nbsp;</div>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        )
    }

}
;

//const mapStateToProps = (state) => ({
//    statusText: state.auth.statusText
//});
//
//const mapDispatchToProps = (dispatch) => ({
//    authActions: bindActionCreators(authActionCreators, dispatch)
//});

export default Login;

