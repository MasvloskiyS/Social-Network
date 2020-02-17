import React from "react";
import classes from './MyInfo.module.css'


const MyInfo = (props) => {
    return(
        <div className={classes.myInfo}>
            <img src={props.myInfo.avatarUrl} alt=''/>
            <div className={classes.description}>
                <div className={classes.name}>
                    {`${props.myInfo.name }  ${props.myInfo.surname}`}
                </div>
                <div className={classes.activity}>
                    {props.myInfo.activity}
                </div>
            </div>
        </div>
    )
};
export default MyInfo;