/**
 * Created by Daniel on 06/12/2017.
 */
import React, { Component } from "react";
import SurveyForm from "./SurveyForm";
import SurveyFormReview from "./SurveyFormReview";
import { reduxForm } from "redux-form";


class SurveyNew extends Component {

    state ={showReview: false};

    renderContent(){
        return this.state.showReview ?
            <SurveyFormReview onCancel={()=> this.setState({showReview: false})}/> :
            <SurveyForm onSurveySubmit={()=> this.setState({showReview: true})}/>
    }

    render() {
        return (
            <div>
                {this.renderContent()}
            </div>
        );
    }
}
export default reduxForm({
    form:'surveyForm'
})(SurveyNew);
