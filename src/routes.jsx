import React from 'react';
import {
    Switch,
    Route,
} from "react-router-dom";
import Home from './Home/Home.jsx';
import Score from './Score/Score.jsx';
import { default as Auth } from './Auth/AuthContainer.jsx';

const Routes = () => (
    <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/score" component={Score} exact />
        <Route path="/auth/callback" component={Auth} exact />
    </Switch>
);

export default Routes;
