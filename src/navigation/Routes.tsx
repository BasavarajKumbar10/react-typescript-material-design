import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import Home from '../pages/Home';
import { RouteNames } from './RoutesNames';
import Courses from '../pages/Courses';

export default function Routes() {
    return (
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route exact path={RouteNames.home}>
                <Home/>
            </Route>
            <Route path={RouteNames.courses}>
                <Courses />
            </Route>
            {/*<Route path="/dashboard">*/}
            {/*    <Dashboard />*/}
            {/*</Route>*/}
        </Switch>
    );
}
