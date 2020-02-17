import React from "react";
import classes from './AddPost.module.css';

export const AddPost = (props) => {

    let newPostField = React.createRef();

    function onAddPost(){
        props.addPost();
    }
    function onPostChange(){
        debugger;
        let newText = newPostField.current.value;
       props.updateNewPostText(newText);
    }
    return (
        <div className={`${classes.formGroup} + ${classes.textarea}`}>
            <textarea ref={newPostField} onChange={onPostChange}  value={props.newPostText} > </textarea>
            <button onClick={ onAddPost }>Send</button>
        </div>
    )
};
export default AddPost;
