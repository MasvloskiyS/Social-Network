import React from "react";
import classes from './Users.module.css'

const User = (props) => {
    let onChangeFollowStatus = () => {
        props.changeFollowStatus(props.id);
    };
    return (
        <div className={classes.user}>
            <div className={classes.avatarBlock}>
                <img src={props.avatarUrl} alt={props.name}/>
                <button className={classes.btn + ' ' + (props.followed ? classes.follow : classes.unfollow) }
                        onClick={onChangeFollowStatus} >
                    {props.followed ? 'Follow' : 'Unfollow'}
                </button>
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