
import React, {Component,View} from 'react';
import {Navbar, NavItem, Nav, NavDropdown, MenuItem} from 'react-bootstrap';
import {Link, Events} from 'react-scroll';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as organizationActionCreators from '../../actions/organization';
import * as appActionCreators from '../../actions/app'
import OrganizationDetailItem from './OrganizationDetailItem';
import OrganizationSubscriptionList from './OrganizationSubscriptionList'

class OrganizationDetails extends React.Component {

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
        var topScreen = null;
        var {organizationDetailItemScreen,subscriptionDetailScreen,selectedOrganization} = this.props;
            if(organizationDetailItemScreen)
            topScreen = <OrganizationDetailItem selectedOrganization={selectedOrganization}/>;
        if(subscriptionDetailScreen)
            topScreen = <OrganizationSubscriptionList />;
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
    organizationDetailItemScreen:state.app.organizationDetailItemScreen,
    subscriptionDetailScreen:state.app.subscriptionDetailScreen,
    organizationList:state.organization.organizationList,
    selectedOrganization:state.organization.selectedOrganization
});

const mapDispatchToProps = (dispatch) => ({
    organizationActions: bindActionCreators(organizationActionCreators, dispatch),
    appActions: bindActionCreators(appActionCreators, dispatch)

});

export default connect(mapStateToProps, mapDispatchToProps)(OrganizationDetails);
/**
 * Created by sonalb on 3/20/2016.
 */
