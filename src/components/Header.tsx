import React from "react";
import logo from "./../access/logo.svg"

export const Header = () => {
    return (
        <header className={"header"}>
            <img
                src={logo}
                alt={"logo"}/>
            <span>ZombieGram</span>
        </header>
    );
};

