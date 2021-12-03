import React, {useState} from "react";
import Modal from '@material-ui/core/Modal';
import {useStyles, getModalStyle} from "../utility/ModalStyle";
import {deleteStream, triggerId} from "../actions";
import {connect} from "react-redux";

const ModalItem = ({ 
    open, 
    setOpen, 
    deleteStream,
    streamId
}) => {
    const classes = useStyles();
    const [modalStyle] = useState(getModalStyle);
    const onDeleteHandler = () => {
        deleteStream(streamId);
        setOpen(false);
    }
    
    const body = (
        <div style={modalStyle} className={classes.paper}>
            <h2 id="simple-modal-title">Delete Stream</h2>
            <p id="simple-modal-description">
                Are you sure you want to delete the stream?
            </p>
            <div>
                <button 
                    type="button" 
                    className="btn btn-danger m-2"
                    onClick={ onDeleteHandler }
                >
                    Delete
                </button>
                <button 
                    type="button" 
                    className="btn btn-secondary"
                    onClick={() => setOpen(false)}>
                    Cancel
                </button>
            </div>
        </div> );
    return (
        <div>
            <Modal
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
        </div>
    )
}

const mapStateToProps = (state) => {
    return (
        {
            streamId: state.streamId
        }
    )
}

export default connect(
    mapStateToProps, 
    { deleteStream })
    (ModalItem);