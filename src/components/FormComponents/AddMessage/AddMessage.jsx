import React from "react";
import classes from './AddMessage.module.css';
import {  addMessageActionCreator, updateNewMessageTextActionCreator } from "../../../redux/dialogsReducer";

export const AddMessage = (props) => {

    let newMessageField = React.createRef();

    function onAddMessage() {
        props.addMessage();
    }

    function onMessageChange(e) {
        let newText = e.target.value;
        props.updateNewMessageText(newText);
    }

    return (

        <div className={`${classes.formGroup} + ${classes.textarea}`}>
            <textarea ref={newMessageField} onChange={onMessageChange} value={props.newMessageText}> </textarea>
            <button onClick={ onAddMessage }>Send</button>
        </div>
    )
};
export default AddMessage;
