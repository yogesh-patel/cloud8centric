'use strict';

import React, {Component} from 'react';
import {RouteHandler} from 'react-router';
import {Grid, Row, Col,Button} from 'react-bootstrap';
import Menu from './home/Menu';
import SplashScreen from './home/SplashScreen';
import Products from './home/Products';
import HomeFooter from './home/HomeFooter';
import ContactUs from './home/ContactUs';
import Login from './Login';
import ForgotPassword from './ForgotPassword';
import ForgotMessage from './ForgotMessage';
import SignUp from './signup/SignUp';
import { connect } from 'react-redux';

class Home extends Component {

    constructor() {
        super();
        this.state = {
            inverseMenu: false
        };
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll() {
        if(!this.state.inverseMenu &&
            document.body.scrollTop > 50) {
            this.setState({inverseMenu: true});
        } else if(this.state.inverseMenu &&
            document.body.scrollTop <= 50) {
            this.setState({inverseMenu: false});
        }
    }

    render() {
        var topScreen = null;
        var {homeScreen,loginScreen,forgotPasswordScreen,forgotMessageScreen,signUpScreen} = this.props;
        if(loginScreen){
            topScreen = <Login />;
        }else if(homeScreen){
            topScreen = <SplashScreen />;
        }else if(signUpScreen){
            topScreen = <SignUp />;
        }
        else if(forgotPasswordScreen){
            topScreen = <ForgotPassword />;
        }
        else if(forgotMessageScreen){
            topScreen = <ForgotMessage />;
        }
        return (
            <Grid fluid>
                <Row>
                    <Menu logo='img/logo.png' inverseMenu={this.state.inverseMenu}/>

                    {this.props.children}

                    {topScreen}

                    <Products />

                    <ContactUs />

                    <HomeFooter />
                </Row>
            </Grid>
        );
    }
}

const mapStateToProps = (state) => ({
    loginScreen:state.app.loginScreen,
    forgotPasswordScreen:state.app.forgotPasswordScreen,
    forgotMessageScreen:state.app.forgotMessageScreen,
    signUpScreen:state.app.signUpScreen,
    homeScreen:state.app.homeScreen
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
