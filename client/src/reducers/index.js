import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form';

import authReducer from './AuthReducer';
import streamsReducer from './StreamsReducer';

const streamIdReducer = (state = null, action) => {
    switch(action.type) {
        case "TRIGGER_ID":
            return action.payload;
        default:
            return state;
    }
}

const reducers = combineReducers({
    auth: authReducer,
    form: formReducer,
    streams: streamsReducer,
    streamId: streamIdReducer
});

export default reducers;

