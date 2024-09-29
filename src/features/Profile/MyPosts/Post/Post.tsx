import React from "react";
import avatar_post from "../../../../assets/images/avatar-post.jpg"
import s from "./Post.module.css"

type PostProps = {
    message: string
    like?: number
}

export const Post = ({message, like}: PostProps) => {

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

