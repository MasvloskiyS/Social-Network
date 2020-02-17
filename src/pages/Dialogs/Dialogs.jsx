import React from "react";
import classes from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import MessagesContainer from "./Messages/MessagesContainer";
import Messages from "./Messages/Messages";

const Dialogs = (props) => {

    let dialog = props.friends.map( (d,i) => <Dialog id={ d.id } key={i} user={ d.userName } avatarUrl={d.avatarUrl} /> );

    return(
        <div className={classes.dialogs}>
            <div className={classes.dialogsList}>
                { dialog }
            </div>
            <Messages messages={props.messages}
                      newMessageText={props.newMessageText}
                      addMessage={props.addMessage}
                      updateNewMessageText={props.updateNewMessageText}
            />
        </div>
    )
}
export  default Dialogs;