import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {v1} from "uuid";

const profileInitialState = {
    postsData: [
        {id: "1", message: "Привет", likesCount: 5},
        {id: "2", message: "Мой первый пост", likesCount: 8},
    ] as PostMessage[]
}

export type PostMessage = {
    id: string
    message: string
    likesCount: number
}

const slice = createSlice({
    name: "posts",
    initialState: profileInitialState,
    reducers: {
        addPost(state, action: PayloadAction<{ postMessage: string }>) {
            const newMessage = {id: v1(), message: action.payload.postMessage, likesCount: 0}
            state.postsData.unshift(newMessage)
        }
    }
})

export const profilePageSlice = slice.reducer
export const {addPost} = slice.actions
