import {Action, combineReducers} from "redux";
import {configureStore, ThunkDispatch} from "@reduxjs/toolkit";
import {profileSlice} from "../features/Profile/profile-slice";
import {useDispatch} from "react-redux";
import {dialogsSlice} from "../features/Dialogs/dialogs-slice";


const rootReducer = combineReducers({
    posts: profileSlice,
    dialogs: dialogsSlice,
})


export const store = configureStore({
    reducer: rootReducer
})

export type AppRootState = ReturnType<typeof store.getState>
export type AppThunkDispatch = ThunkDispatch<AppRootState, unknown, Action>
export const useAppDispatch = () => useDispatch<AppThunkDispatch>()
// @ts-ignore
window.store = store