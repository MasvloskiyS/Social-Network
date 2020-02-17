import React from "react";
import classes from './Profile.module.css';
import PostsContainer from "./Posts/PostsContainer";

const Profile = (props) => {
    return(
        <section className={classes.mainContent}>
            <img src="https://misto.travel/Image/source/news/2017/10/Bbali-Indonesia-2.jpg" alt=""/>
            <PostsContainer />
        </section>
    )
}
export default Profile;