import React from "react";
import {Post} from "./Post/Post";
import s from "./MyPosts.module.css"

export const MyPosts = () => {

    const postData = [
        {id: 1, message: "Привет", likesCount: 5},
        {id: 2, message: "Мой первый пост", likesCount: 8},
    ]

    return (
        <div className={s.posts}>
            <h2> My Posts </h2>
            <div className={s.post_wrapper}>
                <textarea></textarea>
                <div className={s.button_wrapper}>
                    <button>add post</button>
                </div>

            </div>
            {
                postData.map((post) => {
                    return <Post key={post.id} message={post.message} like={post.likesCount}/>
                })
            }
        </div>
    );
};

