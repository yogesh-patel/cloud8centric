import React from 'react';
var ReactToastr = require("react-toastr");
import { connect } from 'react-redux';
import AppMaskComponent from '../component/common/AppMaskComponent';

class App extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                {this.props.children}
                <AppMaskComponent show={this.props.loading}/>
            </div>

        );
    }
}


const mapStateToProps = (state) => ({
    loading:state.app.loading
});


export default connect(mapStateToProps)(App);
