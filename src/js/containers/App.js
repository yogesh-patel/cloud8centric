import React from 'react';
var ReactToastr = require("react-toastr");
import { connect } from 'react-redux';
var {ToastContainer} = ReactToastr; // This is a React Element.
var ToastMessageFactory = React.createFactory(ReactToastr.ToastMessage.animation);

class App extends React.Component {
    componentWillReceiveProps(nextProps,nextState){

    }
    render() {
        return (
            <div>
                {this.props.children}
            </div>

        );
    }
}


const mapStateToProps = (state) => ({
    toast: state.toast
});


export default connect(mapStateToProps)(App);