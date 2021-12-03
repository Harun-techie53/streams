import React from "react";
import { connect } from "react-redux";

import StreamForm from "./StreamForm";
import { createStream } from "../actions";

const StreamCreate = ({ createStream }) => {
    const onSubmitHandler = (fieldValues) => {
        createStream(fieldValues);
        alert("Created stream successfully!");
    }
    return (
        <div>
            <StreamForm 
                headerText="Create Stream"
                onSubmitHandler={onSubmitHandler}
                buttonText="Create" />
        </div>
    )
}

export default connect(
    null,
    { createStream })
    (StreamCreate);