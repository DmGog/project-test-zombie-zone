import React from "react";
import s from "./MyPosts.module.css"
import {useDispatch, useSelector} from "react-redux";
import {AppRootState} from "../../../app/store";
import {AddNewItem} from "../../../components/AddNewItem/AddNewItem";
import {addPost, PostMessage} from "../profile-slice";
import {Post} from "./Post/Post";


export const MyPosts = () => {
    const postsData = useSelector<AppRootState, PostMessage[]>(state => state.posts)
    const dispatch = useDispatch();
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

