import {followStatusAC, setUsersAC} from "../../redux/usersReducer";
import {connect} from "react-redux";
import Users from "./Users";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
       changeFollowStatus: (userId) => dispatch( followStatusAC(userId)),
       setUsers: (users) => dispatch( setUsersAC(users) ),
    }
};

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);