import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';

import Streamers from './Streamers';
import Streams from './Streams';
import StreamCreate from './StreamCreate';
import Login from './Login';
import Navbar from './Navbar';
import StreamEdit from "./StreamEdit";
import StreamDelete from "./StreamDelete";

import "./App.css";

const App = ({ auth }) => {
    return (
        <div>
            <AppBar>
                <Navbar />
            </AppBar>
            <div className="container">
                <Switch>
                    <Route path="/streams" exact component={Streams} />
                    <Route path="/streams/new" exact component={StreamCreate} />
                    <Route path="/streams/edit/:id" exact component={StreamEdit} />
                    <Route path="/streams/delete/:id" exact component={StreamDelete} />
                    <Route path="/streams/show/:id" exact component={Streamers} />
                    <Route path="/" exact component={Streams} />
                </Switch>
            </div>
        </div>
    )
}

export default App;