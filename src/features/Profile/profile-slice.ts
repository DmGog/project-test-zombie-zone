import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {v1} from "uuid";

const postsInitialState: PostMessage[] = [
    {id: "1", message: "Привет", likesCount: 5},
    {id: "2", message: "Мой первый пост", likesCount: 8},
]

export type PostMessage = {
    id: string
    message: string
    likesCount: number
}

const slice = createSlice({
    name: "posts",
    initialState: postsInitialState,
    reducers: {
        setPosts(state, action: PayloadAction<{ posts: PostMessage[] }>) {
            return state
        },
        addPost(state, action: PayloadAction<{ postMessage: string }>) {
            let newMessage = {id: v1(), message: action.payload.postMessage, likesCount: 0}
            state.unshift(newMessage)
        }
    }
})

export const profileSlice = slice.reducer
export const {setPosts, addPost} = slice.actions
