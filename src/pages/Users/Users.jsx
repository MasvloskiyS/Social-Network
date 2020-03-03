import React, {Fragment} from 'react';
import classes from './User/Users.module.css';
import User from "./User/User";
import Preloader from "../../components/Preloader/Preloader";

const Users = (props) => {
    let user = props.users.map(user => {
           return <User key={user.id}
                  userName={user.name}
                  photos={user.photos}
                  id={user.id}
                  followed={user.followed}
                  changeFollowStatus={props.changeFollowStatus}
            />
        }
    );
    return (
        <section className={classes.mainContent}>
            {props.preloader ? <Preloader/> : null}
            <div className={classes.users}>
                {user}
            </div>
            <button className={classes.showMoreBtn} onClick={props.showMoreUsers}>Show More</button>
        </section>
    )
};

export default Users;