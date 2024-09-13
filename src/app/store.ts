import {Action, combineReducers} from "redux";
import {configureStore, ThunkDispatch} from "@reduxjs/toolkit";
import {profileReducer} from "../components/Profile/profile-reducer";
import {useDispatch} from "react-redux";
import {dialogsReducer} from "../components/Dialogs/dialogs-reducer";


const rootReducer = combineReducers({
    posts: profileReducer,
    dialogs: dialogsReducer,
})


export const store = configureStore({
    reducer: rootReducer
})

export type AppRootState = ReturnType<typeof store.getState>
export type AppThunkDispatch = ThunkDispatch<AppRootState, unknown, Action>
export const useAppDispatch = () => useDispatch<AppThunkDispatch>()
// @ts-ignore
window.store = store