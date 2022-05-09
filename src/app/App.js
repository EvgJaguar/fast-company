import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./components/login";
import UsersList from "./components/usersList";
import Users from "./components/users";
import NavBar from "./components/navBar";
import UserPage from "./components/userPage";

function App() {
    return (
        <div>
            <NavBar />
            <Switch>
                <Route path="/" exact component={Users} />
                <Route path="/main" exact component={Users} />
                <Route path="/users" component={UsersList} />
                <Route path="/login" component={Login} />
                <Route path="/userPage" component={UserPage} />
            </Switch>
        </div>
    );
}

export default App;
