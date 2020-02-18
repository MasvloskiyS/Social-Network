import {dialogsReducer} from "./dialogsReducer";
import {profileReducer} from "./profileReducer";
import {sidebarReducer} from "./sidebarReducer";

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';
const ADD_MESSAGE = 'ADD_MESSAGE';

let oldStore = {
    _state: {
        myInfo: {
            name: 'Serhii',
            surname: 'Maslovskiy',
            id: '10',
            avatarUrl: 'https://socportal.info/media/contentimages/4c35d5c10e2e7f50.jpg',
            activity: 'Frontend Developer',
        },
        pages: {
            profilePage: {
                postsData: [
                    {
                        id: 1,
                        postText: 'Hello Guys! I love your social network!',
                        name: 'Stanislav',
                        date: '30.11.2019',
                    }, {
                        id: 2,
                        postText: 'Really cool!',
                        name: 'Denis',
                        date: '30.11.2019',
                    }, {
                        id: 3,
                        postText: 'Serhii, thank you! You the best!',
                        name: 'Ivanna',
                        date: '30.11.2019',
                    },
                ],
                newPostText: '',
            },
            dialogsPage: {
                messages: [
                    {id: 1, text: 'Hi Serhii how your doing?', incoming: true},
                    {id: 2, text: 'Hi! I\'m doing well! Thanks!', incoming: false},
                ],
                newMessageText: '',
            },
        },
        sidebar: {
            navbar: {
                links: [
                    {name: 'Profile', path: '/profile'},
                    {name: 'Dialogs', path: '/dialogs'},
                    {name: 'News', path: '/news'},
                    {name: 'Settings', path: '/settings'},
                ]
            },
        },
        friends: {
            friendsList: [
                {
                    id: 1,
                    userName: 'Stanislaw',
                    avatarUrl: 'https://wallpaperaccess.com/full/167053.jpg',
                    lastActivity: 'Online',
                    online: true,
                },
                {
                    id: 2,
                    userName: 'Denis',
                    avatarUrl: 'https://wallpaperaccess.com/full/167053.jpg',
                    lastActivity: 'Online',
                    online: true,
                },
                {
                    id: 3,
                    userName: 'Ivanna',
                    avatarUrl: 'https://wallpaperaccess.com/full/167053.jpg',
                    lastActivity: '8 minutes ago',
                    online: false,
                },
                {
                    id: 4,
                    userName: 'Dima',
                    avatarUrl: 'https://wallpaperaccess.com/full/167053.jpg',
                    lastActivity: '20.20.2018',
                    online: false,
                },
                {
                    id: 5,
                    userName: 'Petya',
                    avatarUrl: 'https://wallpaperaccess.com/full/167053.jpg',
                    lastActivity: '11.12.2019',
                    online: false,
                },
                {
                    id: 6,
                    userName: 'Valera',
                    avatarUrl: 'https://wallpaperaccess.com/full/167053.jpg',
                    lastActivity: '3 hours ago',
                    online: false,
                },
            ]
        },
    },
    _callSubscriber(){
        console.log('State Changed');
    },
    getState() {
        return this._state;
    },
    subscribe(observer){
        this._callSubscriber = observer;
    },

    dispatch(action){
        this._state.pages.profilePage = profileReducer(this._state.pages.profilePage, action);
        this._state.pages.dialogsPage = dialogsReducer(this._state.pages.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);
    }
};

;



export default oldStore;