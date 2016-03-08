import React from 'react';
var ReactToastr = require("react-toastr");
import { connect } from 'react-redux';

class App extends React.Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>

        );
    }
}


const mapStateToProps = (state) => ({

});


export default connect(mapStateToProps)(App);
