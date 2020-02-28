import {connect} from "react-redux";
import Users from "./Users.jsx";
import React, {Fragment} from "react";
import axios from "axios";
import {setPreloader} from "../../redux/preloaderReducer";
import {followStatus, setUsers, showMoreUsers} from "../../redux/usersReducer";

class UsersContainer extends React.Component {

    componentDidMount() {


        axios.get('https://my-json-server.typicode.com/MasvloskiyS/Social-Network/users')
            .then(users => {
                this.props.setPreloader();
                const displayedUsers = [];

                if (users.data.length > this.props.userStartCount) {
                    for (let i = 0; i < this.props.userStartCount; i++) {
                        displayedUsers[i] = users.data[i];
                    }
                } else {
                    for (let i = 0; i < users.data.length; i++) {
                        displayedUsers[i] = users.data[i];
                    }
                }
                this.props.setUsers(displayedUsers);

            });
        this.props.setPreloader();


    }

    showMoreUsers = () => {

        axios.get('https://my-json-server.typicode.com/MasvloskiyS/Social-Network/users')
            .then(users => {
                this.props.setPreloader();
                this.props.showMoreUsers(4);
                const displayedUsers = [];
                if (users.data.length > this.props.userStartCount) {
                    for (let i = 0; i < this.props.userStartCount; i++) {
                        displayedUsers[i] = users.data[i];
                    }
                } else {
                    for (let i = 0; i < users.data.length; i++) {
                        displayedUsers[i] = users.data[i];
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
                   userStartCount={this.props.userStartCount}
                   changeFollowStatus={this.props.followStatus}
            />

    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        userStartCount: state.usersPage.userStartCount,
        preloader: state.preloader.preloader
    }
};
export default connect(mapStateToProps, {followStatus, setUsers, showMoreUsers, setPreloader} )(UsersContainer);