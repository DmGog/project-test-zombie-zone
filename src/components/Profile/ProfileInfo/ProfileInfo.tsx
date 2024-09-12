import React from "react";
import main_img from "../../../assets/images/main-profile.png";
import s from "./ProfileInfo.module.css"


export const ProfileInfo = () => {
    return (
        <div>
            <div className={s.profile_info_img}>
                <img src={main_img} alt={"main profile"}/>
            </div>
            <div className={s.description}>
                ava + description
            </div>
        </div>
    );
};

