import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as organizationActionCreators from '../../actions/organization';

class OrganizationForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = this.getInitialStateForOrganization(props);

    }

    getInitialStateForOrganization(props) {
        //alert(selectedOrganization);
        var {selectedOrganization} = props;
       // alert(routeParams.organizationId);
        if(selectedOrganization.id){
           // alert(selectedOrganization.id);
            return {
                organizationId: selectedOrganization.id,
                organizationName: selectedOrganization.organizationName,
                organizationURL: selectedOrganization.organizationURL
            }
        }else{
            return {
                organizationId: null,
                organizationName: null,
                organizationURL: null
            }
        }
    }

    componentWillReceiveProps(nextProps, nextState) {
       // alert("test");
        if (nextProps.selectedOrganization != this.props.selectedOrganization) {
            /*this.setState({
             employeeId: nextProps.selectedEmployee.employeeId,
             employeeName: nextProps.selectedEmployee.name,
             project: nextProps.selectedEmployee.project
             });*/
            this.setState(this.getInitialStateForOrganization(nextProps));
        }
    }

    onOrganizationNameChange(e) {
        this.setState({organizationName: e.target.value});
    }

    onOrganizationUrlChange(e) {
        this.setState({organizationURL: e.target.value});
    }

      onSubmit() {
        //var {routeParams} = this.props;
        //if(routeParams.organizationId){
        //
        //}else{
        //    this.props.organizationActions.addOrganization({
        //        organizationName: this.state.organizationName,
        //        organizationURL: this.state.organizationURL
        //    },this.props.organizationList);
        //}
    }

    render() {
        var {organizationName,organizationURL} = this.state;
        return (
            <div className="content">
                <div className="field-label">
                    Organization Name:
                </div>
                <div className="input-box">
                    <input type="text" placeholder="Organization Name" className="form-input"
                           value={organizationName} onChange={this.onOrganizationNameChange.bind(this)}/>
                </div>

                <div className="field-label" style={{marginTop:20}}>
                    Organization URL:
                </div>
                <div className="input-box">
                    <input type="text" placeholder="Organization Url" className="form-input"
                           value={organizationURL} onChange={this.onOrganizationUrlChange.bind(this)}/>
                </div>

                <div style={{marginTop:30}}>
                    <button className="cancel-button">Cancel</button>
                    <button className="submit-button" onClick={this.onSubmit.bind(this)}>Submit</button>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    organizationList:state.organization.organizationList,
    selectedOrganization:state.organization.selectedOrganization
});

const mapDispatchToProps = (dispatch) => ({
    organizationActions: bindActionCreators(organizationActionCreators, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(OrganizationForm);
