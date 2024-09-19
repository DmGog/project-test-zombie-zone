import {Action, combineReducers} from "redux";
import {configureStore, ThunkDispatch} from "@reduxjs/toolkit";
import {profilePageSlice} from "../features/Profile/profileSlice";
import {useDispatch} from "react-redux";
import {dialogsPageSlice} from "../features/Dialogs/dialogsSlice";


const rootReducer = combineReducers({
    posts: profilePageSlice,
    dialogs: dialogsPageSlice,
})

export const store = configureStore({
    reducer: rootReducer
})

export type AppRootState = ReturnType<typeof store.getState>
export type AppThunkDispatch = ThunkDispatch<AppRootState, unknown, Action>
export const useAppDispatch = () => useDispatch<AppThunkDispatch>()
// @ts-ignore
window.store = store