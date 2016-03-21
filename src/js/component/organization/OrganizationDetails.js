
import React, {Component,View} from 'react';
import {Navbar, NavItem, Nav, NavDropdown, Glyphicon, Button, MenuItem} from 'react-bootstrap';
import {Link, Events} from 'react-scroll';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as organizationActionCreators from '../../actions/organization';
import { push } from 'redux-router';
import * as appActionCreators from '../../actions/app';
import OrganizationDetailItem from './OrganizationDetailItem';
import OrganizationSubscriptionList from './OrganizationSubscriptionList';

class OrganizationDetails extends React.Component {

    gotoAddSubscriptions() {
        this.props.routeDispatch(push("/dashboard/organization/create"));
    }

    gotoSubscriptionPage(e) {
        e.preventDefault();
        this.props.appActions.showSubscriptionDetail();
        this.setState({selectedOption: 'subscription'});
    }

    gotoOrganizationDetailPage(e) {
        e.preventDefault();
        this.props.appActions.showOrganizationDetailItem();
        this.setState({selectedOption: 'organization'});
    }

    onOptionSelected(selectedKey) {
        this.setState({selectedOption: selectedKey});
    }

    render() {
        var {organizationDetailItemScreen,subscriptionDetailScreen,selectedOrganization} = this.props;
        var DetailScreen = <OrganizationDetailItem selectedOrganization={selectedOrganization}/>;
        if(subscriptionDetailScreen)
            DetailScreen = <OrganizationSubscriptionList />;
        return (
            <div>
                <Button bsStyle="primary"
                        className="pull-right"
                        onClick={this.gotoAddSubscriptions.bind(this)}>
                        <Glyphicon glyph="plus"/> Add Subscription
                </Button>
                <Nav  bsStyle="tabs" onSelect={this.onOptionSelected.bind(this)}>
                    <li role="presentation">
                        <Link href="#"
                              onClick={this.gotoOrganizationDetailPage.bind(this)}
                              smooth duration={500}>Organization</Link>
                    </li>
                    <li role="presentation">
                        <Link href="#" onClick={this.gotoSubscriptionPage.bind(this)} smooth duration={500}>
                            Subscription</Link>
                    </li>
                </Nav>{DetailScreen}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    organizationDetailItemScreen:state.app.organizationDetailItemScreen,
    subscriptionDetailScreen:state.app.subscriptionDetailScreen,
    organizationList:state.organization.organizationList,
    selectedOrganization:state.organization.selectedOrganization
});

const mapDispatchToProps = (dispatch) => ({
    organizationActions: bindActionCreators(organizationActionCreators, dispatch),
    appActions: bindActionCreators(appActionCreators, dispatch),
     routeDispatch:dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(OrganizationDetails);
