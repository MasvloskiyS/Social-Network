import React from "react";
import classes from "../friendsList.module.css";
import {NavLink} from "react-router-dom";

const FriendListItem = (props) => {
    return (
        <NavLink to={`/profile/id=${props.id}`} className={classes.friendListItem}>
            <img src={props.avatarUrl}/>
            <div className={classes.info}>
                <div className={classes.name}>
                    {props.userName}
                </div>
                <small>{props.lastActivity}</small>
            </div>
        </NavLink>
    )
}

export default FriendListItem;