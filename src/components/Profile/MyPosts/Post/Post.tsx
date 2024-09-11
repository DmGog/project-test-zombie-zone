import React from "react";
import avatar_post from "../../../../assets/images/avatar-post.jpg"
import s from "./Post.module.css"
export const Post = () => {
    return (
        <div className={s.post}>
            <img src={avatar_post} alt="avatar post"/>
            new post
            <div>
                💟
            </div>
        </div>
    );
};

