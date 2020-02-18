import React from 'react';
import './App.css';
import './index.css';
import Header from "./components/Header/Header";
import Profile from "./pages/Profile/Profile";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import SidebarContainer from "./components/Sidebar/SidebarContainer";
import DialogsContainer from "./pages/Dialogs/DialogsContainer";
import {UsersContainer} from "./pages/Users/UsersContainer";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <SidebarContainer />
                <Switch>
                    <Route path={'/profile'} render={ () => <Profile />} />
                    <Route path={'/dialogs'} render={ () => <DialogsContainer /> }/>
                    <Route path={'/users'} render={ () => <UsersContainer /> }/>
                </Switch>
            </div>
        </BrowserRouter>
    );
};

export default App;
