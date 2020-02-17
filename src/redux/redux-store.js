import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import {sidebarReducer} from "./sidebarReducer";
import {friendsReducer} from "./friendsReducer";
import {myInfoReducer} from "./myInfoReducer";


let reducers = combineReducers(
    {
        profilePage: profileReducer,
        dialogsPage: dialogsReducer,
        sidebar: sidebarReducer,
        friends: friendsReducer,
        myInfo: myInfoReducer,
    }
);

let store = createStore(reducers);

export default store;