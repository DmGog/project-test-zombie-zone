import React from "react";
import s from "./NavBar.module.css"
import {PATH} from "../../routes/router";
import {NavLink} from "react-router-dom";

export const NavBar = () => {
    return (
        <nav className={s.nav}>
            <ul>
                <li><NavLink to={PATH.PROFILE}>Profile</NavLink></li>
                <li><NavLink to={PATH.MESSAGES}>Messages</NavLink></li>
                <li><NavLink to={PATH.NEWS}>News</NavLink></li>
                <li><NavLink to={PATH.MUSIC}>Music</NavLink></li>
                <li><NavLink to={PATH.SETTINGS}>Settings</NavLink></li>
            </ul>
        </nav>
    );
};

