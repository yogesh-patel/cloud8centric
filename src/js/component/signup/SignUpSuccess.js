'use strict';

import React, {Component, View} from 'react';
import {Grid, Row, Col,Jumbotron,Glyphicon,Input,Alert,Button} from 'react-bootstrap';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import * as appActionCreators from '../../actions/app';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {Element} from 'react-scroll';

class SignUpSuccess extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    gotoLoginPage() {
        this.props.appActions.showLogin();
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
                                                <Col md={6} sm={8} xs={12} smPush={1} lgPush={3}>
                                                    <Alert bsStyle="success" onDismiss={this.handleAlertDismiss}>
                                                        <h3>Your Account has been created!!!</h3>
                                                        <Button bsStyle="primary" bsSize="large" onClick={this.gotoLoginPage.bind(this)}>Login</Button>
                                                    </Alert>
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

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
    appActions: bindActionCreators(appActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpSuccess);
