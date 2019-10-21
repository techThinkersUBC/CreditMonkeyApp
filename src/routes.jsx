import React from 'react';
import {
    Switch,
    Route,
} from "react-router-dom";
import Home from './Home/Home.jsx';

const Routes = () => (
    <Switch>
        Here
        <Route path="/">
            <Home />
        </Route>
    </Switch>
);

export default Routes;
