import React from "react";
import Navbar from "./Navbar/Navbar";
import FriendsList from "./FriendList/FriendsList";
import classes from './Sidebar.module.css';
import MyInfo from "./MyInfo/MyInfo";


const Sidebar = (props) => {
    return(
        <aside className={classes.sidebar}>
            <MyInfo myInfo = {props.myInfo} />
            <Navbar links={props.sidebar.navbar.links}/>
            <h2 className={classes.sidebarCategory}>Friends</h2>
            <FriendsList friends={props.friends}/>
        </aside>

    );
};

export default Sidebar;