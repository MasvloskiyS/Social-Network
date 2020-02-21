const FOLLOW_STATUS = 'FOLLOW_STATUS';
const SET_USERS = 'SET_USERS';
const SHOW_MORE_USERS = 'SHOW_MORE_USERS';

let initialState = {
    userStartCount: 1,
    users: [ ],
};
export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW_STATUS: {
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: !user.followed}
                    }
                    return user;
                })
            }
        } case SET_USERS: {
            return {
                ...state,
                users: [ ...action.users ]
            }
        } case SHOW_MORE_USERS: {
            let increaseNumber = action.increaseNumber;
            return {
                ...state,
                userStartCount: this + increaseNumber,
            }
        }
        default:
            return state;
    }

};
export const showMoreUsersAC = (increaseNumber) => ({type: SHOW_MORE_USERS, increaseNumber});
export const followStatusAC = (userId) => ({type: FOLLOW_STATUS, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});
