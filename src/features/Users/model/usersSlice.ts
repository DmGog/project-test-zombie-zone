import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {usersAPI} from "../api/users-api";

type Photo = {
    small: string | null;
    large: string | null;
};

export type Item = {
    name: string;
    id: number;
    photos: Photo;
    status: string | null;
    followed: boolean;
};


export const fetchUsers = createAsyncThunk("users/fetchUsers", async (arg, thunkAPI)=>{
    const res = await usersAPI.getUsers()
    return {users :res.data.items}
})

const slice = createSlice({
    name: "users",
    initialState: {
        users: [] as Item[],
    },
    reducers: {
        // setUsers(state, action: PayloadAction<{  users: Item[] }>) {
        //     state.users = [...state.users, ...action.payload.users]
        //
        // },
        followUsers(state, action: PayloadAction<{ userId: number }>) {
            const user = state.users.find(user => user.id === action.payload.userId);
            if (user) {
                user.followed = true;
            }
        },
        unFollowUsers(state, action: PayloadAction<{ userId: number }>) {
            const user = state.users.find(user => user.id === action.payload.userId);
            if (user) {
                user.followed = false;
            }
        },
    },
    extraReducers: builder => {
        builder
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.users = [...state.users, ...action.payload.users]
            })
    }
})

export const usersPageSlice = slice.reducer
export const {followUsers, unFollowUsers} = slice.actions