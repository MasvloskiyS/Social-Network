import React from "react";
import classes from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = (props) => {
    let navLink = props.links.map( navLink => {
        return (
            <li>
                <NavLink activeClassName={classes.active} to={navLink.path}>{navLink.name}</NavLink>
             </li>
        )
    });
    return (
        <nav className={classes.navbar}>
            <ul className={classes.nav}>
                {navLink}
            </ul>
        </nav>
    )
}

export default Navbar;