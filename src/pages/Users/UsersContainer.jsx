import {connect} from "react-redux";
import Users from "./Users.jsx";
import React, {Fragment} from "react";
import axios from "axios";
import {setPreloader} from "../../redux/preloaderReducer";
import {followStatus, setUsers, showMoreUsers} from "../../redux/usersReducer";
import {getMoreUsers, getUsers} from '../../api/api'

class UsersContainer extends React.Component {

    componentDidMount() {


        getUsers().then(users => {
                this.props.setPreloader();
                const displayedUsers = [];

                if (users.length > this.props.usersCount) {
                    for (let i = 0; i < this.props.usersCount; i++) {
                        displayedUsers[i] = users[i];
                    }
                } else {
                    for (let i = 0; i < users.length; i++) {
                        displayedUsers[i] = users[i];
                    }
                }
                this.props.setUsers(displayedUsers);

            });
        this.props.setPreloader();

    }

    showMoreUsers = () => {

        const increaseNumber = 8;

        this.props.showMoreUsers(increaseNumber);

        getMoreUsers(increaseNumber + this.props.usersCount).then(users => {
                this.props.setPreloader();
                const displayedUsers = [];
                if (users.length > this.props.usersCount) {
                    for (let i = 0; i < this.props.usersCount; i++) {
                        displayedUsers[i] = users[i];
                    }
                } else {
                    for (let i = 0; i < users.length; i++) {
                        displayedUsers[i] = users[i];
                    }
                }
                this.props.setUsers(displayedUsers);
            });
        this.props.setPreloader();
    }

    render() {
        return <Users users={this.props.users}
                      showMoreUsers={this.showMoreUsers}
                      preloader={this.props.preloader}
                      changeFollowStatus={this.props.followStatus}
            />

    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        usersCount: state.usersPage.usersCount,
        preloader: state.preloader.preloader,
        followStatus: state.usersPage.followStatus,
    }
};
export default connect(mapStateToProps, {followStatus, setUsers, showMoreUsers, setPreloader} )(UsersContainer);