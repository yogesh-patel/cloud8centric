import React, {Component,View} from 'react';
import {Navbar, NavItem, Nav, NavDropdown, MenuItem} from 'react-bootstrap';
import {Link, Events} from 'react-scroll';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as organizationActionCreators from '../../actions/organization';
import * as appActionCreators from '../../actions/app'
import OrganizationForm from './OrganizationForm';
import SubscriptionList from '../subscription/SubscriptionList'

class OrganizationDetails extends React.Component {

    constructor(props) {
        super(props);

       // this.state = this.getInitialStateForOrganization(props);

    }

    //getInitialStateForOrganization(props) {
    //    //alert(selectedOrganization);
    //    var {selectedOrganization} = props;
    //    // alert(routeParams.organizationId);
    //    if(selectedOrganization.id){
    //        // alert(selectedOrganization.id);
    //        return {
    //            organizationId: selectedOrganization.id,
    //            organizationName: selectedOrganization.organizationName,
    //            organizationURL: selectedOrganization.organizationURL
    //        }
    //    }else{
    //        return {
    //            organizationId: null,
    //            organizationName: null,
    //            organizationURL: null
    //        }
    //    }
    //}

    //componentWillReceiveProps(nextProps, nextState) {
    //    // alert("test");
    //    if (nextProps.selectedOrganization != this.props.selectedOrganization) {
    //        /*this.setState({
    //         employeeId: nextProps.selectedEmployee.employeeId,
    //         employeeName: nextProps.selectedEmployee.name,
    //         project: nextProps.selectedEmployee.project
    //         });*/
    //        this.setState(this.getInitialStateForOrganization(nextProps));
    //    }
    //}

    //onOrganizationNameChange(e) {
    //    this.setState({organizationName: e.target.value});
    //}
    //
    //onOrganizationUrlChange(e) {
    //    this.setState({organizationURL: e.target.value});
    //}

    //onSubmit() {
    //    //var {routeParams} = this.props;
    //    //if(routeParams.organizationId){
    //    //
    //    //}else{
    //    //    this.props.organizationActions.addOrganization({
    //    //        organizationName: this.state.organizationName,
    //    //        organizationURL: this.state.organizationURL
    //    //    },this.props.organizationList);
    //    //}
    //}

    gotoSubscriptionPage(e) {
        e.preventDefault();
        alert(this.props.organizationFormScreen);
        this.props.appActions.showSubscriptionDetail();
        this.setState({selectedOption: 'subscription'});
    }

    gotoOrganizationDetailPage(e) {
        e.preventDefault();
        alert(this.props.subscriptionDetailScreen);
        this.props.appActions.showOrganizationForm();
        this.setState({selectedOption: 'organization'});
    }

    onOptionSelected(selectedKey) {
        this.setState({selectedOption: selectedKey});
    }

   // let itemColor = this.props.inverseMenu ? '' : '#FFFFFF';
    render() {
        var topScreen = null;
        var {organizationFormScreen,subscriptionDetailScreen} = this.props;
            if(organizationFormScreen)
            topScreen = <OrganizationForm />;
        if(subscriptionDetailScreen)
            topScreen = <SubscriptionList />;
        /*var {organizationName,organizationURL} = this.state;*/
        return (
            <div>
                <Nav  bsStyle="tabs" onSelect={this.onOptionSelected.bind(this)}>
                    <li role="presentation">
                        <Link to="products" href="#"
                              onClick={this.gotoOrganizationDetailPage.bind(this)}
                              smooth duration={500}>Organization</Link>
                    </li>
                    <li role="presentation">
                        <Link to="contact" href="#" onClick={this.gotoSubscriptionPage.bind(this)} smooth duration={500}>
                            Subscription</Link>
                    </li>
                </Nav>{topScreen}
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    organizationFormScreen:state.app.organizationFormScreen,
    subscriptionDetailScreen:state.app.subscriptionDetailScreen,
    organizationList:state.organization.organizationList,
    selectedOrganization:state.organization.selectedOrganization,
});

const mapDispatchToProps = (dispatch) => ({
    organizationActions: bindActionCreators(organizationActionCreators, dispatch),
    appActions: bindActionCreators(appActionCreators, dispatch)

});

export default connect(mapStateToProps, mapDispatchToProps)(OrganizationDetails);
/**
 * Created by sonalb on 3/20/2016.
 */
