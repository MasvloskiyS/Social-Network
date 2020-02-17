import React from "react";
import classes from'./Header.module.css';

const Header = () => {
    return(
        <header className={classes.header}>
            <img
                src="https://pngimg.com/uploads/twitter/twitter_PNG3.png"
                alt="logo"/>
        </header>
        )
}

export  default  Header;