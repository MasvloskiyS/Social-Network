import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import {sidebarReducer} from "./sidebarReducer";
import {friendsReducer} from "./friendsReducer";
import {myInfoReducer} from "./myInfoReducer";
import {usersReducer} from "./usersReducer";


let reducers = combineReducers(
    {
        myInfo: myInfoReducer,
        profilePage: profileReducer,
        dialogsPage: dialogsReducer,
        sidebar: sidebarReducer,
        friends: friendsReducer,
        usersPage: usersReducer,
    }
);

let store = createStore(reducers);

export default store;