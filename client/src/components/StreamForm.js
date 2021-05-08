import React from 'react';
import { Field, reduxForm } from 'redux-form';

import "./App.css";

const validate = (values) => {
    const errors = {};

    if(!values.title) {
        errors.title = "Required";
    } else if(values.title.length > 15) {
        errors.title = "Must be 15 characters or less"
    }

    if(!values.description) {
        errors.description = "Required"
    } else if(values.description.length < 8) {
        errors.description = "Must be greater than 8 characters"
    }

    return errors;
}

const StreamForm = ({
    handleSubmit, 
    headerText, 
    onSubmitHandler,
    buttonText 
}) => {
    const fieldComponent = ({
        input, 
        label,
        type,
        meta : {
            touched,
            error, 
            warning
        }}) => {
        return (
            <div className="form_component">
                <label className="form_label">{label}</label>
                <input 
                    {...input}
                    className="form-control" />
                {touched &&
                    (error && 
                        <div className="form_errors">
                            <i className="fas fa-exclamation-circle"/>
                            <span>{error}</span>
                        </div>) }
            </div>
        )
    }
    return(
        <div>
            <form
                onSubmit={handleSubmit(onSubmitHandler)}
                className="form_container">
                <h2>{headerText}</h2>
                <Field 
                    name="title" 
                    component={fieldComponent}
                    label="Enter Your Title"
                    type="text" />
                <Field 
                    name="description" 
                    component={fieldComponent}
                    label="Enter Your Description"
                    type="text" />
                <button type="submit" className="btn btn-primary mt-3">
                    {buttonText}
                </button>
            </form>
        </div>
    )
}

export default reduxForm({
    form: "streamForm",
    validate
})(StreamForm);