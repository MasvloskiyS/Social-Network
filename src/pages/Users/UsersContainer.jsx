import {followStatusAC, setUsersAC, showMoreUsersAC} from "../../redux/usersReducer";
import {connect} from "react-redux";
import Users from "./Users";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        userStartCount: state.usersPage.userStartCount,
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
       changeFollowStatus: (userId) => dispatch( followStatusAC(userId)),
       setUsers: (users) => dispatch( setUsersAC(users) ),
       showMoreUsers: (increaseNumber) => dispatch( showMoreUsersAC(increaseNumber)),
    }
};

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);