import React from 'react';
import {
    Switch,
    Route,
} from "react-router-dom";
import Home from './Home/Home.jsx';
import Score from './Score/Score.jsx';

const Routes = () => (
    <Switch>
        Here
        <Route path="/" exact>
            <Home />
        </Route>
        <Route path="/score" exact>
            <Score />
        </Route>
    </Switch>
);

export default Routes;
