const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';
const ADD_MESSAGE = 'ADD_MESSAGE';

let initialState = {
    messages: [
        {id: 1, text: 'Hi Serhii how your doing?', incoming: true},
        {id: 2, text: 'Hi! I\'m doing well! Thanks!', incoming: false},
    ],
    newMessageText: '',
};
export const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT: {
            let stateCopy = {...state};
            stateCopy.newMessageText = action.text;
            return stateCopy;
        }
        case ADD_MESSAGE: {
            let stateCopy = {...state};
            stateCopy.messages = [...state.messages];
            stateCopy.messages.push(
                {
                    id: 4,
                    text: state.newMessageText,
                    incoming: false
                }
            );
            return stateCopy;
        }
        default:
            return state;
    }
};

export const addMessageActionCreator = () => ({type: ADD_MESSAGE});
export const updateNewMessageTextActionCreator = (newText) => ({type: UPDATE_NEW_MESSAGE_TEXT, text: newText});
