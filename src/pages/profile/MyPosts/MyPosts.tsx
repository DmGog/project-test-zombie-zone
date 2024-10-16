import React from "react";
import s from "./MyPosts.module.css"
import {useSelector} from "react-redux";
import {AppRootState, useAppDispatch} from "../../../app/store";
import {AddNewItem} from "../../../shared/ui/add-new-item/AddNewItem";
import {addPost, PostMessage} from "../profileSlice";
import {Post} from "./Post/Post";


export const MyPosts = () => {
    const postsData = useSelector<AppRootState, PostMessage[]>(state => state.profilePage.postsData)
    const dispatch = useAppDispatch();
    const addPostMessage = (message: string) => {
        dispatch(addPost({postMessage: message}))
    }
    return (
        <div className={s.posts}>
            <h2> My Posts </h2>
            <AddNewItem titleButton={"add post"} addMessage={addPostMessage}/>
            {
                postsData.map((post) => {
                    return <Post key={post.id} message={post.message} like={post.likesCount}/>
                })
            }
        </div>
    );
};

