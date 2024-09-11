import React from "react";
import s from "./Profile.module.css"
import main_img from "../../assets/images/main-profile.png"
import {MyPosts} from "./MyPosts/MyPosts";

export const Profile = () => {
    return (
        <div>
            <div>
                <img src={main_img} alt={"main profile"}/>
            </div>
            <MyPosts/>
        </div>
    );
};

