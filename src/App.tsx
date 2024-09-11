import React from "react";
import "./App.css"
import {Header} from "./components/Header/Header";
import {NavBar} from "./components/NavBar/NavBar";
import {Outlet} from "react-router-dom";

function App() {
    return (
        <div className={"app-wrapper"}>
            <Header/>
            <NavBar/>
            <div className={"app-wrapper-content"}>
                <Outlet/>
            </div>
        </div>
    );
}

export default App;
