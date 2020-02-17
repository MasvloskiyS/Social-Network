import React from "react";
import classes from './friendsList.module.css'
import FriendListItem from "./FriendListItem/FriendListItem";

const FriendsList = (props) => {
    let friend = props.friends.friendsList.map(friend => {
        return <FriendListItem avatarUrl={friend.avatarUrl}
                               userName={friend.userName}
                               lastActivity={friend.lastActivity}
                               id={friend.id} />
    });
    return (
        <div className={classes.sidebarfriendsList}>
            { friend }
        </div>
    )
};

export default FriendsList;
