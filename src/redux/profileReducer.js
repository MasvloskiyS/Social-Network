const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    profile: null,
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
};
export const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = { id: 4, postText: state.newPostText, name: 'Serhii', date: '30.11.2019',};
            return {...state, postsData: [...state.postsData, newPost]}
        }
        case UPDATE_NEW_POST_TEXT: {
           return {...state, newPostText: action.text}
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile }
        }
        default:
            return state;
    }
};

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile: profile});
export const addPost = () => ({type: ADD_POST});
export const updateNewPostText = (newText) => ({type: UPDATE_NEW_POST_TEXT, text: newText});
