/**
 * Created by synerzip on 08/12/15.
 */
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as accountActionCreators from '../actions/profile';

class Home extends React.Component{
    componentWillMount(){
        this.props.actions.fetchAccountData();
    }
    render () {
        return (
            <div id="cspage">
                Home
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    isFetching: state.accounts.isFetching,
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(accountActionCreators, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);