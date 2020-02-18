const FOLLOW_STATUS = 'FOLLOW_STATUS';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [ ]
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
                users: [ ...state.users, ...action.users ]
            }
        }
        default:
            return state;
    }

};
export const followStatusAC = (userId) => ({type: FOLLOW_STATUS, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});
