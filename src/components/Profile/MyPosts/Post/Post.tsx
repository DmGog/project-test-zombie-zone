import React from "react";
import avatar_post from "../../../../assets/images/avatar-post.jpg"
import s from "./Post.module.css"

type PropsType = {
    message: string
    like?: number
}

export const Post = (props: PropsType) => {
    const {message, like} = props
    return (
        <div className={s.post}>
            <img src={avatar_post} alt="avatar post"/>
            {message}
            <div className={s.post_button}>
                {like}
                <button>💟</button>
            </div>
        </div>
    );
};

