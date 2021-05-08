import React, {useState} from 'react';
import { Link } from "react-router-dom";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from "react-redux";
import {deleteStream, triggerId} from "../actions";
import ModalItem from "./ModalItem";

import "./App.css";
import { SettingsPowerRounded } from '@material-ui/icons';

const useStyle = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: '200ch',
      backgroundColor: theme.palette.background.paper,
    },
    inline: {
      display: 'inline',
    },
  }));


const StreamList = ({
    streams, 
    deleteStream, 
    isSignedIn,
    triggerId }) => {
    const classItem = useStyle();
    const [open, setOpen] = useState(false);

    const onDeleteHandler = (id) => {
        deleteStream(id);
        alert("Deleted the stream successfully!");
    }

    const onModalHandler = (id) => {
        triggerId(id);
        setOpen(true);
    }

    const renderedList = streams.map(stream =>
            <List className={classItem.root}>
                <ListItem 
                    key={stream.title}
                    alignItems="flex-start">
                    <div className="stream_icon">
                        <i className="fas fa-play fa-lg"/>
                    </div>
                    <div className="stream_text">
                        <Link 
                            to={`/streams/show/${stream.id}`}
                            style={{textDecoration: "none"}}>
                            <Typography variant="h5">
                                {stream.title}
                            </Typography>
                        </Link>
                        <Typography variant="body2">
                            {stream.description}
                        </Typography>
                    </div>
                    {
                        isSignedIn ? (
                            <div>
                                <Link 
                                    to={`/streams/edit/${stream.id}`}
                                    className="btn btn-primary"
                                    style={{marginRight: "5px"}}
                                >
                                    Edit
                                </Link>
                                <button 
                                    className="btn btn-danger"
                                    onClick={onModalHandler.bind(this, stream.id) }
                                >
                                    Delete
                                </button>
                            </div>
                        ) : null
                    }
                </ListItem>
            </List> );
    return (
        <div className="stream_list">
            <h1 className="stream_header">Stream List</h1>
            <hr/>
            { streams?.length === 0 ? ( 
                <h3 className="stream_header">There are no streams</h3>
                 ) : ( renderedList )
            }

            <ModalItem 
                open={open}
                setOpen={setOpen}
            />

        </div>
    )
}

const mapStateToProps = (state) => {
    return({
        isSignedIn: state.auth.isSignedIn
    })
}

export default connect(
    mapStateToProps, 
    { deleteStream, triggerId })
    (StreamList);