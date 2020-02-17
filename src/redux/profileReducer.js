const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

let initialState = {
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
            let stateCopy = {...state};
            stateCopy.postsData = [...state.postsData];
            stateCopy.postsData.push(
                {
                    id: 4,
                    postText: state.newPostText,
                    name: 'Serhii',
                    date: '30.11.2019',
                }
            );
            return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = {...state};
            stateCopy.newPostText = action.text;
            return stateCopy;
        }
        default:
            return state;
    }
};

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (newText) => ({type: UPDATE_NEW_POST_TEXT, text: newText});
