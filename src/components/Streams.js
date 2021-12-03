import React, {useEffect} from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";

import StreamList from "./StreamList";

import { fetchStreams } from "../actions";

const Streams = ({  fetchStreams,
                    streams,
                    isSignedIn   }) => {
    useEffect(() => {
        fetchStreams();
    });
    return (
        <div className="container">
            <StreamList streams={streams} />
            { isSignedIn ? 
                    ( <Link to="/streams/new" style={{textDecoration: "none"}}>
                        <Button 
                            variant="contained" 
                            color="secondary"
                            style={{margin: "1% 0% 0% 65%"}} >
                            Create Stream
                        </Button>
                    </Link> ) : null 
                }
        </div>
    )
}

const mapStateToProps = (state) => {
    return ({
        isSignedIn: state.auth.isSignedIn,
        streams: Object.values(state.streams)
    });
}

export default connect(
    mapStateToProps, 
    { fetchStreams })(Streams);