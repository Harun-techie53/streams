import streams from "../apis/streams";
import history from "../history";

export const signIn = (userId) => {
    return ({
        type: "SIGN_IN",
        payload: userId
    })
}

export const signOut = () => {
    return ({
        type: "SIGN_OUT"
    })
}

export const createStream = (formValues) => async (dispatch, getState) => {
        const userId = getState().auth.userId;
        await streams.post("/streams", {...formValues, userId});
        history.push("/streams");
}

export const fetchStreams = () => async (dispatch) => {
    const response = await streams.get("/streams");

    dispatch({
        type: "FETCH_STREAMS",
        payload: response.data
    })
}

export const fetchStream = (id) => async (dispatch) => {
    const response = await streams.get(`/streams/${id}`);

    dispatch({
        type: "FETCH_STREAM",
        payload: response.data
    })
}

export const editStream = (id, fieldValues) => async (dispatch) => {
    const response = await streams.patch(`/streams/${id}`, fieldValues);

    dispatch({
        type: "EDIT_STREAM",
        payload: response.data
    });
    history.push("/streams");
}

export const deleteStream = (id) => async (dispatch) => {
    const response = await streams.delete(`/streams/${id}`);

    dispatch({
        type: "DELETE_STREAM",
        payload: id
    });
}

export const triggerId = (id) => {
    return ({
        type: "TRIGGER_ID",
        payload: id
    })
}


