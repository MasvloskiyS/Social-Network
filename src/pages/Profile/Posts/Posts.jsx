import React from "react";
import classes from './posts.module.css';
import Post from "./Post/post";
import AddPost from "../../../components/FormComponents/AddPost/AddPost";

const Posts = (props) => {
    debugger;
    let post = props.postsData.map( post => <Post id={post.id} postText={post.postText} key={post.id} name={post.name} date={post.date}/>);

    return (
        <div className={classes.posts}>
            <h2> Recent Posts </h2>
            <AddPost addPost={props.addPost} updateNewPostText={props.updateNewPostText}  newPostText={props.newPostText} />
            { post }
        </div>
    );
}
export default Posts;