import React from "react";
import logo from "../../assets/logo.svg"
import s from "./Header.module.css"

export const Header = () => {
    return (
        <header className={s.header}>
            <img
                src={logo}
                alt={"logo"}/>
            <div className={s.text_wrapper}>
                <span>social network</span>
                <span>Zombie Zone</span>
            </div>
        </header>
    );
};

