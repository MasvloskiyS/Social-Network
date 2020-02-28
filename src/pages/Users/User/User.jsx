import React from "react";
import classes from './Users.module.css'
import {NavLink} from "react-router-dom";

const User = (props) => {
    let onChangeFollowStatus = () => {
        props.followStatus(props.id);
    };
    return (
        <div className={classes.user}>
            <div className={classes.avatarBlock}>
                <NavLink to={`/profile/${props.id}`}>
                    <img src={props.avatarUrl} alt={props.name}/>
                    <button className={classes.btn + ' ' + (props.followed ? classes.follow : classes.unfollow)}
                            onClick={onChangeFollowStatus}>
                        {props.followed ? 'Follow' : 'Unfollow'}
                    </button>
                </NavLink>
            </div>
            <div className={classes.userInfo}>
                <div className={classes.userInfoBlock}>
                    <div className={classes.name}>{props.userName} / {props.country}</div>
                    <small><em>{props.city}</em></small>
                </div>
                <div className={classes.userInfoBlock}>
                    <div className={classes.activity}>{props.activity}</div>
                </div>
            </div>

        </div>
    )
}
export default User;