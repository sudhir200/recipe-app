import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from "./components/header/header";
import Login from "./components/login/login";

class Routes extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                      {/*<Route path="/" component={Header}/>*/}
                      <Route path="/login" component={Login}/>
                      {/*<Route path="/registration" component={Registration}/>*/}
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default Routes;
