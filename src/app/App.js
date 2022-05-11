import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Login from "./layouts/login";
import Users from "./layouts/users";
import Main from "./layouts/main";
import NavBar from "./components/navBar";

function App() {
    return (
        <div>
            <NavBar />
            <Switch>
                <Route path="/users/:userId?" component={Users} />
                <Route path="/" exact component={Main} />
                <Route path="/login" component={Login} />
                <Redirect to="/" />
            </Switch>
        </div>
    );
}

export default App;
