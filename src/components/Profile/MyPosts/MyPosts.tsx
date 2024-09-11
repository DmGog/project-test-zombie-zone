import React from "react";
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (
        <div>
            My Posts
            <div>
                <textarea></textarea>
                <button>add post</button>
            </div>
            <Post message={"Привет"} like={5}/>
            <Post message={"Мой первый пост"} like={8}/>
        </div>
    );
};

