import React from "react";
import {Post} from "./Post/Post";
import s from "./MyPosts.module.css"
import {useSelector} from "react-redux";
import {AppRootState} from "../../../app/store";
import {PostType} from "../profile-reducer";


export const MyPosts = () => {
    const postData = useSelector<AppRootState, PostType[]>(state => state.posts)

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

