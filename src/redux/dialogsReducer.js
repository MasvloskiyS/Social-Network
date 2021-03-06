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
            return {...state, newMessageText: action.text}
        }
        case ADD_MESSAGE: {
            let newMessage = {id: 4, text: state.newMessageText, incoming: false};
            return {...state, messages: [...state.messages, newMessage]}
        }
        default:
            return state;
    }
};

export const addMessage = () => ({type: ADD_MESSAGE});
export const updateNewMessageText = (newText) => ({type: UPDATE_NEW_MESSAGE_TEXT, text: newText});
