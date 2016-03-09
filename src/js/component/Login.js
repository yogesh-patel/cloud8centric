'use strict';

import React, {Component, View} from 'react';
import {Grid, Row, Col,Jumbotron} from 'react-bootstrap';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import {Element} from 'react-scroll';

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
        if (this.state.username == "" || this.state.password == "") return;
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
        return (
            <Element className="splashScreen" name="splashScreen">
                <Grid fluid>
                    <Row>
                <Jumbotron className="text-center">
                    <div className="content">
                        <ReactCSSTransitionGroup transitionName="react-animation"
                                                 transitionAppear
                                                 transitionAppearTimeout={500}
                                                 transitionEnter={false}
                                                 transitionLeave={false}>
                            <Grid>
                                <form name="signup">
                                    <Row>
                                    <Col md={6} sm={8} xs={12} smPush={1} lgPush={3} className="login-box">
                                        <div className="row">
                                            <div
                                                className="col col-xs-12 col-sm-12 col-md-6 col-md-offset-3">

                                                <div className="row">
                                                    <div
                                                        className="col col-xs-12 col-sm-12 col-md-12">
                                                        <div className="form-horizontal">
                                                            <div
                                                                className="form-group required">
                                                                <label
                                                                    className="col-sm-3 control-label bold-text">
                                                                    Username</label>

                                                                <div className="col-sm-9">
                                                                    <input type="text"
                                                                           name="userName"
                                                                           value={this.state.username}
                                                                           className="form-control"
                                                                           placeholder="Enter text"
                                                                           onChange={this.onUsernameChange.bind(this)}
                                                                           required/>
                                                                </div>
                                                            </div>
                                                            <div
                                                                className="form-group required">
                                                                <label
                                                                    className="col-sm-3 control-label bold-text">Password</label>

                                                                <div className="col-sm-9">
                                                                    <input type="password"
                                                                           name="password"
                                                                           className="form-control"
                                                                           placeholder="Password"
                                                                           onChange={this.onPasswordChange.bind(this)}
                                                                           required/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="col col-xs-12 col-sm-12 col-md-12">
                                                        <button type="submit"
                                                                className="btn btn-primary pull-right left-buffer"
                                                                onClick={this.authenticate.bind(this)}>
                                                            Login
                                                        </button>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </Col>
                                    </Row>
                                </form>
                            </Grid>
                        </ReactCSSTransitionGroup>
                    </div>
                </Jumbotron>
                    </Row>
                </Grid>
            </Element>

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

