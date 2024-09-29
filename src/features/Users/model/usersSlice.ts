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


export const fetchUsers = createAsyncThunk(
    "users/fetchUsers",
    async ({page, pageSize}: { page: number; pageSize: number }, thunkAPI) => {
        const res = await usersAPI.getUsers(page, pageSize)
        return {users: res.data.items, totalCount: res.data.totalCount};
    }
);

const slice = createSlice({
    name: "users",
    initialState: {
        users: [] as Item[],
        pageSize: 6,
        totalUsersCount: 0,
        currentPage: 1
    },
    reducers: {
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
        setCurrentPage(state, action: PayloadAction<number>) {
            state.currentPage = action.payload;
        },
    },
    extraReducers: builder => {
        builder
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.users = [...action.payload.users]
                state.totalUsersCount = action.payload.totalCount
            })
    }
})

export const usersPageSlice = slice.reducer
export const {followUsers, unFollowUsers, setCurrentPage} = slice.actions