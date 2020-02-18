import React from 'react';
import classes from './User/Users.module.css';
import User from "./User/User";

const Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
                {
                    id: 1,
                    avatarUrl: 'https://icocnews.ru/wp-content/uploads/2017/10/satana.jpg',
                    name: 'Stanislav',
                    activity: 'Wordpress Developer',
                    location: {country: 'Ukraine', city: 'Kamianets-Podilskiy'},
                    followed: true
                },
                {
                    id: 2,
                    avatarUrl: 'https://icocnews.ru/wp-content/uploads/2017/10/satana.jpg',
                    name: 'Denis',
                    activity: 'Junior Frontend Developer',
                    location: {country: 'Ukraine', city: 'Kamianets-Podilskiy'},
                    followed: false
                },
                {
                    id: 3,
                    avatarUrl: 'https://icocnews.ru/wp-content/uploads/2017/10/satana.jpg',
                    name: 'Stanislav',
                    activity: 'Wordpress Developer',
                    location: {country: 'Ukraine', city: 'Kamianets-Podilskiy'},
                    followed: true
                }
            ]
        )
    }
    let user = props.users.map(user => <User key={user.id}
                                             userName={user.name}
                                             avatarUrl={user.avatarUrl}
                                             city={user.location.city}
                                             country={user.location.country}
                                             id={user.id}
                                             activity={user.activity}
                                             followed={user.followed}
                                             changeFollowStatus={props.changeFollowStatus}
    />);
    return (
        <section className={classes.mainContent}>
            {user}
        </section>
    )

};


export default Users;