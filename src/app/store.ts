import {Action, combineReducers} from "redux";
import {configureStore, ThunkDispatch} from "@reduxjs/toolkit";
import {profilePageSlice} from "../pages/profile/profileSlice";
import {useDispatch} from "react-redux";
import {dialogsPageSlice} from "../pages/dialogs/dialogsSlice";
import {usersPageSlice} from "../pages/users/model/usersSlice";


const rootReducer = combineReducers({
    profilePage: profilePageSlice,
    dialogsPage: dialogsPageSlice,
    usersPage: usersPageSlice,
})

export const store = configureStore({
    reducer: rootReducer
})

export type AppRootState = ReturnType<typeof store.getState>
export type AppThunkDispatch = ThunkDispatch<AppRootState, unknown, Action>
export const useAppDispatch = () => useDispatch<AppThunkDispatch>()
// @ts-ignore
window.store = store