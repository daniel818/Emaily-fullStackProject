/**
 * Created by Daniel on 04/12/2017.
 */
/**
 * Created by Daniel on 03/12/2017.
 */

import React from "react";
import { connect } from "react-redux";
import { withRouter} from 'react-router-dom';
import _ from "lodash";


import * as actions from '../../actions'

import FIELDS from "./formFields";

const SurveyFormReview = ({ onCancel, formValues, submitSurvey ,history}) => {
  const reviewFields = _.map(FIELDS, ({ label, name }) => {
    return (
      <div key={name}>
        <label>{label} </label>
        <div>{formValues[name]}</div>
      </div>
    );
  });

  return (
    <div>
      <h5> confirm entries</h5>
        {reviewFields}
      <button className="yellow darken-3 white-text btn-flat" onClick={onCancel}>
        Back
      </button>
        <button
            onClick={() => submitSurvey(formValues,history)}
            className="green btn-flat right white-text">
            Send Survey
            <i className="material-icons right">email</i>
        </button>
    </div>
  );
};

const mapStateToProps = ({ form: { surveyForm } }) => ({
  formValues: surveyForm.values
});

export default connect(mapStateToProps,actions)(withRouter(SurveyFormReview));
