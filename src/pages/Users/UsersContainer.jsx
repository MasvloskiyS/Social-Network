import {connect} from "react-redux";
import Users from "./Users.jsx";
import React, {Fragment} from "react";
import axios from "axios";
import {setPreloader} from "../../redux/preloaderReducer";
import {
    changeFollowStatus,
    followStatus,
    getUsers,
    showMoreUsersThunk,
    toggleFollowStatus
} from "../../redux/usersReducer";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.usersCount );
    };

    showMoreUsers = () => {
        this.props.showMoreUsersThunk(this.props.usersCount + this.props.showMoreUsersIncreaseNumber);
    };

    render() {
        return <Users users={this.props.users}
                      showMoreUsers={this.showMoreUsers}
                      preloader={this.props.preloader}
                      toggleFollowStatus={this.props.changeFollowStatus}
            />

    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        usersCount: state.usersPage.usersCount,
        showMoreUsersIncreaseNumber: state.usersPage.showMoreUsersIncreaseNumber,
        preloader: state.preloader.preloader,
        followStatus: state.usersPage.followStatus,
        followingInProgress: state.usersPage.followingInProgress
    }
};
export default connect(mapStateToProps, { changeFollowStatus, showMoreUsersThunk, getUsers} )(UsersContainer);