import React, {Fragment} from 'react';
import classes from './User/Users.module.css';
import User from "./User/User";
import axios from 'axios';

class Users extends React.Component {

    componentDidMount() {
        axios.get('https://my-json-server.typicode.com/MasvloskiyS/Social-Network/users')
            .then(users => {
                let displayedUsers = [];
                if (users.data.length > this.props.userStartCount)  {
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

    }
    showMoreUsers = () => {
        axios.get('https://my-json-server.typicode.com/MasvloskiyS/Social-Network/users')
            .then(users => {

                this.props.showMoreUsers(1);

                let displayedUsers = [];
                if (users.data.length > this.props.userStartCount)  {
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
    }

    render() {
        let user = this.props.users.map(user => <User key={user.id}
                                                      userName={user.name}
                                                      avatarUrl={user.avatarUrl}
                                                      city={user.location.city}
                                                      country={user.location.country}
                                                      id={user.id}
                                                      activity={user.activity}
                                                      followed={user.followed}
                                                      changeFollowStatus={this.props.changeFollowStatus}
        />);
        return (
            <Fragment>
                <section className={classes.mainContent}>
                    {user}
                    <div onClick={this.showMoreUsers}> Show More</div>
                </section>

            </Fragment>
        )
    }
}


export default Users;