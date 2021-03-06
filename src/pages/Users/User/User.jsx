import React from "react";
import classes from './Users.module.css'
import {NavLink} from "react-router-dom";
import avaPlaceholder from "../../../assets/img/ava-placeholder.png"
import {usersAPI} from "../../../api/api";

const User = (props) => {

    let onChangeFollowStatus = () => {
            props.toggleFollowStatus(props.id, props.followed);
    }
    return (
        <div className={classes.user}>
            <div className={classes.avatarBlock}>
                <NavLink to={`/profile/${props.id}`}>
                    <img src={props.photos.small ? props.photos.small : avaPlaceholder} alt={props.name}/>
                </NavLink>
                <button disabled={props.followingInProgress}  className={classes.btn + ' ' + (props.followed ? classes.follow : classes.unfollow)}
                        onClick={onChangeFollowStatus}>
                    {props.followed ? 'Follow' : 'Unfollow'}
                </button>
            </div>
            <div className={classes.userInfo}>
                <div className={classes.userInfoBlock}>
                    <div className={classes.name}>{props.userName}</div>
                    <small><em>{props.city}</em></small>
                </div>
            </div>

        </div>
    )
}
export default User;