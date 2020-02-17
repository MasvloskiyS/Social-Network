import React from "react";
import classes from './post.module.css';

const Post = (props) => {
    return(
        <div className={classes.post}>
            <img  className={classes.avatar} src="https://cdn1.iconfinder.com/data/icons/online-banking/80/Online_banking_finance-02-512.png" alt=""/>
            <div className={classes.postInfo}>
                {props.name} <small className={classes.date}>{props.date}</small>
                <div>{props.postText}</div>
            </div>

        </div>
    )
}
export default Post;