import {followUserAPI, usersAPI} from "../api/api";
import {setPreloader} from "./preloaderReducer";

const FOLLOW_STATUS = 'FOLLOW_STATUS';
const FOLLOWING_IN_PROGRESS = 'FOLLOWING_IN_PROGRESS';
const SET_USERS = 'SET_USERS';
const SHOW_MORE_USERS = 'SHOW_MORE_USERS';

let initialState = {
    usersCount: 8,
    showMoreUsersIncreaseNumber: 10,
    users: [],
    followingInProgress: false,
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
        }
        case SET_USERS: {
            return {
                ...state,
                users: [...action.users]
            }
        }
        case SHOW_MORE_USERS: {
            let newUsersCount = state.usersCount + state.showMoreUsersIncreaseNumber;
            debugger;
            return {
                ...state,
                usersCount: newUsersCount,
            }
        }
        case FOLLOWING_IN_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.inProgress,
            }
        }
        default:
            return state;
    }

};
export const showMoreUsers = () => ({type: SHOW_MORE_USERS });
export const followStatus = (userId) => ({type: FOLLOW_STATUS, userId});
export const toggleFollowStatus = (inProgress) => ({type: FOLLOWING_IN_PROGRESS, inProgress});
export const setUsers = (users) => ({type: SET_USERS, users});

export const getUsers = (usersCount = 8) => {
    return (dispatch) => {
        dispatch(setPreloader());
        usersAPI.getUsers().then(users => {
            let displayedUsers = [];

            if (users.length > usersCount) {
                for (let i = 0; i < usersCount; i++) {
                    displayedUsers[i] = users[i];
                }
            } else {
                for (let i = 0; i < users.length; i++) {
                    displayedUsers[i] = users[i];
                }
            }
            dispatch(setUsers(displayedUsers));
            dispatch(setPreloader());
        });
    }
};

export const showMoreUsersThunk = (usersCount) => {
    return (dispatch) => {
        dispatch(setPreloader());
        dispatch(showMoreUsers());
        usersAPI.getMoreUsers(usersCount).then(users => {
            const displayedUsers = [];
            if (users.length > usersCount) {
                for (let i = 0; i < users.length; i++) {
                    displayedUsers[i] = users[i];
                }
            } else {
                for (let i = 0; i < users.length; i++) {
                    displayedUsers[i] = users[i];
                }
            }
            dispatch(setUsers(displayedUsers));
            debugger;
            dispatch(setPreloader())
        });
    }
};

export const changeFollowStatus= (userId, currentStatus) => {
    return (dispatch) => {
        dispatch(toggleFollowStatus(true));
        if (!currentStatus) {
            followUserAPI.postFollowUser(userId).then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(followStatus(userId))
                }
                dispatch(toggleFollowStatus(false));

            });
        } else {
            followUserAPI.deleteFollowUser(userId).then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(followStatus(userId))
                }
                dispatch(toggleFollowStatus(false));
            })
        }
    }
}