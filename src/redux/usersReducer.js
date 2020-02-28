const FOLLOW_STATUS = 'FOLLOW_STATUS';
const SET_USERS = 'SET_USERS';
const SHOW_MORE_USERS = 'SHOW_MORE_USERS';

let initialState = {
    userStartCount: 4,
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
            let userStartCount = state.userStartCount;
            return {
                ...state,
                userStartCount: userStartCount + increaseNumber,
            }
        }
        default:
            return state;
    }

};
export const showMoreUsers = (increaseNumber) => ({type: SHOW_MORE_USERS, increaseNumber});
export const followStatus = (userId) => ({type: FOLLOW_STATUS, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
