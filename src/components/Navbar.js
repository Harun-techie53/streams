//This is a navbar
import React from 'react';
import {Link} from 'react-router-dom';

import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import GoogleAuth from './GoogleAuth';

import "./App.css";

const Navbar = () => {
    return (
        <div>
            <Toolbar>
                <i className="far fa-play-circle fa-lg"/>
                <Typography variant="h5">
                    <b>Vidly</b>
                </Typography>
                <Link to="/streams" className="navbar__link">
                    All Streams
                </Link>
                <div className="googleAuth__button">
                    <GoogleAuth />
                </div>
            </Toolbar>
        </div>
    )
}

export default Navbar;