import {applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import {sidebarReducer} from "./sidebarReducer";
import {friendsReducer} from "./friendsReducer";
import {myInfoReducer} from "./myInfoReducer";
import {usersReducer} from "./usersReducer";
import {preloaderReducer} from "./preloaderReducer";
import {authReducer} from "./authReducer";
import thunkMiddleware from "redux-thunk"

let reducers = combineReducers(
    {
        myInfo: myInfoReducer,
        profilePage: profileReducer,
        dialogsPage: dialogsReducer,
        sidebar: sidebarReducer,
        friends: friendsReducer,
        usersPage: usersReducer,
        preloader: preloaderReducer,
        auth: authReducer,
    }
);

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;