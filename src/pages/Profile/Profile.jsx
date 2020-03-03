import React from "react";
import classes from './Profile.module.css';
import PostsContainer from "./Posts/PostsContainer";
import Preloader from "../../components/Preloader/Preloader";

const Profile = (props) => {
    if(!props.profile) {
        return <Preloader />
    }
    return(
        <section className={classes.mainContent}>
            <img src="https://misto.travel/Image/source/news/2017/10/Bbali-Indonesia-2.jpg" alt=""/>
            <div>{props.profile.fullName}</div>
            <div>{props.profile.aboutMe}</div>
            <PostsContainer />
        </section>
    )
}
export default Profile;