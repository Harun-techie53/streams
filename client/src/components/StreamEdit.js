import { set } from "lodash";
import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import _ from "lodash";

import {fetchStream, editStream} from "../actions";
import streams from "../apis/streams";
import StreamForm from "./StreamForm";

const StreamEdit = ({ stream, 
                      match, 
                      fetchStream,
                      editStream }) => {
    const id = match.params.id;
    useEffect(() => {
        fetchStream(id);
    }, []);

    const onSubmitHandler = (fieldValues) => {
        editStream(id, fieldValues);
        alert("Stream updated successfully!");
    }

    return (
        <div>
            <StreamForm 
                headerText="Edit Stream"
                onSubmitHandler={onSubmitHandler}
                buttonText="Update"
                initialValues={_.pick(stream, ["title", "description"])} />
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        stream: state.streams[ownProps.match.params.id]
    };
}

export default connect(
    mapStateToProps, 
    { fetchStream, 
      editStream })
    (StreamEdit);