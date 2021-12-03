import React, { useEffect} from 'react';
import {connect} from 'react-redux';

import Button from '@material-ui/core/Button';

import {signIn, signOut} from '../actions';

const GoogleAuth = ({ isSignedIn, userId, signIn, signOut }) => {
    useEffect(() => {
        window.gapi.load("client: auth2", () => {
            window.gapi.client.init({
                clientId: "520906356573-lmce7rj2lu90t8oopstadcfa8vo438v7.apps.googleusercontent.com",
                scope: "email"
            }).then(() => {
                const auth = window.gapi.auth2.getAuthInstance();
                onAuthChange(auth.isSignedIn.get());
                auth.isSignedIn.listen(onAuthChange);
            });
        });
    }, []);

    const onAuthChange = (isSignedIn) => {
        if(isSignedIn) {
            return signIn(window.gapi.auth2.getAuthInstance().currentUser.get().getId());
        } else {
            return signOut();
        }
    }

    const onSignIn = () => {
        window.gapi.auth2.getAuthInstance().signIn();
        alert("You're now signed in.");
    }

    const onSignOut = () => {
        window.gapi.auth2.getAuthInstance().signOut();
        alert("Are you sure?");
    }

    const renderAuthButton = isSignedIn === false ? (
        <Button 
            variant="contained" 
            color="primary"
            onClick={onSignIn}>
            <i className="fab fa-google" 
                style={{marginRight: "5px", color: "white"}} />
            Sign In
        </Button>
    ) : (
        <Button 
            variant="contained" 
            color="secondary"
            onClick={onSignOut}>
            <i className="fab fa-google" 
                style={{marginRight: "5px", color: "white"}}/>
            Sign Out
        </Button>
    );

    return (
        <div>
            {renderAuthButton}
        </div>
    )
}

const mapStateToProps = (state) => {
    return({
        isSignedIn: state.auth.isSignedIn,
        userId: state.auth.userId
    })
}

export default connect(
    mapStateToProps, 
    { signIn, signOut }
    )(GoogleAuth);