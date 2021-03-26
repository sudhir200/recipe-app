import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from "./components/header/header";
import Login from "./components/login/login";
import Home from "./components/home/home";

class Routes extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                      <Route path='/' exact component={Home}/>
                      <Route path='login' exact component={Login}/>
                      <Route path="/countries" component={Header}/>
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default Routes;
