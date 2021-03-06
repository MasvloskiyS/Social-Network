import React from 'react';
import './App.css';
import './index.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import SidebarContainer from "./components/Sidebar/SidebarContainer";
import DialogsContainer from "./pages/Dialogs/DialogsContainer";
import UsersContainer from "./pages/Users/UsersContainer";
import ProfileContainer from "./pages/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <HeaderContainer />
                <SidebarContainer />
                <Switch>
                    <Route path={'/profile/:userId?'} render={ () => <ProfileContainer />} />
                    <Route path={'/dialogs'} render={ () => <DialogsContainer /> }/>
                    <Route path={'/users'} render={ () => <UsersContainer /> }/>
                </Switch>
            </div>
        </BrowserRouter>
    );
};

export default App;
