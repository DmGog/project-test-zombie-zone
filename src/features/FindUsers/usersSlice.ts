import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export type UserData = {
    id: number,
    photoUrl: string
    followed: boolean,
    fullName: string,
    status: string,
    location: { city: string, country: string }
}

const usersInitialState = {
    users: [
        {
            id: 1,
            photoUrl: "https://avatars.mds.yandex.net/i?id=56003004ed5dec0ca09e0f0fd1aff820912c0908-3712383-images-thumbs&n=13",
            followed: true,
            fullName: "Viktor",
            status: "I am intern",
            location: {city: "London", country: "United States"}
        },
        {
            id: 2,
            photoUrl: "https://diamondelectric.ru/images/4328/4327376/pechatrezka_nakleika_na_avto_motocikl_snegohod_shlem_snoybord_sk_1.jpg",
            followed: false,
            fullName: "Ivan",
            status: "I am intern",
            location: {city: "New York", country: "United States"}
        },
        {
            id: 3,
            photoUrl: "https://avatars.mds.yandex.net/i?id=973cd51a643211b7e1c511eb937515292e710710-3724606-images-thumbs&ref=rim&n=33&w=250&h=250",
            followed: false,
            fullName: "Kataryna",
            status: "I am senior",
            location: {city: "Minsk", country: "Belarus"}
        },
    ] as UserData[]
}

const slice = createSlice({
    name: "posts",
    initialState: usersInitialState,
    reducers: {
        setUsers(state, action: PayloadAction<{ users: UserData[] }>) {
            state.users = [...state.users, ...action.payload.users]

        },
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
    }
})

export const usersPageSlice = slice.reducer
export const {followUsers, unFollowUsers} = slice.actions