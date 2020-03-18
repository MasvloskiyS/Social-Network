import React from "react";
import classes from'./Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return(
        <header className={classes.header}>
            <img
                src="https://pngimg.com/uploads/twitter/twitter_PNG3.png"
                alt="logo"/>
            {props.isAuth ?
                props.login :
                <NavLink to="/login" > Login </NavLink>}
        </header>
        )
}

export  default  Header;