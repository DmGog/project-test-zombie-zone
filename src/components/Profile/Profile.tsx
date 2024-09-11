import React from "react";
import s from "./Profile.module.css"
import main_img from "../../assets/images/main-profile.png"

export const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img
                    src={main_img}/>
            </div>
            <div>
                <img style={{width: "300px"}}
                     src={"https://w7.pngwing.com/pngs/349/627/png-transparent-soft-drink-coca-cola-pepsi-pepsi-s-cola-pepsico-diet-pepsi.png"}/>
            </div>
            <div>my post
                <div>new post</div>
            </div>
        </div>
    );
};

