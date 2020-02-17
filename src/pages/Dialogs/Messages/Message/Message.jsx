import React from "react";
import classes from "../Messages.module.css";

const Message = (props) => {
    return(
        <div className={`${classes.message} ` + ( props.incoming ? ` ${classes.incomingMessage}` : `${classes.outgoingMessage}`) }>
            {props.messages}
        </div>
    )
}
export  default Message;
