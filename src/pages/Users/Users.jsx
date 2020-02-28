import React, {Fragment} from 'react';
import classes from './User/Users.module.css';
import User from "./User/User";
import Preloader from "../../components/Preloader/Preloader";

const Users = (props) => {
    let user = props.users.map(user => <User key={user.id}
                                             userName={user.name}
                                             avatarUrl={user.avatarUrl}
                                             city={user.location.city}
                                             country={user.location.country}
                                             id={user.id}
                                             activity={user.activity}
                                             followed={user.followed}
                                             changeFollowStatus={props.followStatus}
    />);
    return (
        <section className={classes.mainContent}>
            {props.preloader ?  <Preloader/> :  null}
            <div className={classes.users}>
                {user}
            </div>
            <button className={classes.showMoreBtn} onClick={props.showMoreUsers}>Show More</button>
        </section>
    )
};

export default Users;