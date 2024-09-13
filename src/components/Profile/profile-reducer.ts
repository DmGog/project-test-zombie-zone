import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const postsInitialState: PostType[] = [
    {id: 1, message: "Привет", likesCount: 5},
    {id: 2, message: "Мой первый пост", likesCount: 8},
]

export type PostType = {
    id: number
    message: string
    likesCount: number
}

const slice = createSlice({
    name: "posts",
    initialState: postsInitialState,
    reducers: {
        setPosts(state, action: PayloadAction<{ posts: PostType[] }>) {
            return state
        }
    }
})

export const profileReducer = slice.reducer
