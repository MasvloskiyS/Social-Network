import React from "react";
import classes from "./../Dialogs.module.css";
import {NavLink} from "react-router-dom";

const Dialog = (props) => {
    return (
        <NavLink to={'/dialogs/' + props.id} activeClassName={classes.active} className={classes.dialogsListItem}>
            <img className={classes.userAvatar} src={props.avatarUrl} alt={props.user}/>
            <div>{props.user}</div>
        </NavLink>
    )
}
export default Dialog;