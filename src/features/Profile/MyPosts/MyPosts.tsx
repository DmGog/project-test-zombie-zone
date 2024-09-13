import React from "react";
import {Post} from "./Post/Post";
import s from "./MyPosts.module.css"
import {useSelector} from "react-redux";
import {AppRootState} from "../../../app/store";
import {PostType} from "../profile-reducer";
import {AddNewItem} from "../../../components/AddNewItem/AddNewItem";


export const MyPosts = () => {
    const postsData = useSelector<AppRootState, PostType[]>(state => state.posts)

    return (
        <div className={s.posts}>
            <h2> My Posts </h2>
            <AddNewItem titleButton={"add post"}/>
            {
                postsData.map((post) => {
                    return <Post key={post.id} message={post.message} like={post.likesCount}/>
                })
            }
        </div>
    );
};

