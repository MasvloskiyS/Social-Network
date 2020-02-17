import React from "react";
import classes from './Messages.module.css';
import AddMessage from "../../../components/FormComponents/AddMessage/AddMessage";
import Message from "./Message/Message";

const Messages = (props) => {
    let messages = props.messages.map( message => (
        <Message  messages={message.text}
                  key={message.id}
                  incoming={message.incoming} />
    ));
    return (
        <div className={classes.messages}>
            {messages}
            <AddMessage newMessageText={props.newMessageText}
                        addMessage={props.addMessage}
                        updateNewMessageText={props.updateNewMessageText}
            />
        </div>
    )
}
export default Messages;