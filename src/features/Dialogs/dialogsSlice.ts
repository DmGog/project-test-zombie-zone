import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {v1} from "uuid";

type DialogItem = {
    id: string
    name: string
}

type DialogMessage = {
    id: string;
    message: string;
}

export type DialogsState = {
    dialogsData: DialogItem[];
    messagesData: DialogMessage[];
}

const dialogsInitialState: DialogsState = {
    dialogsData: [
        {id: "1", name: "Петр"},
        {id: "2", name: "Владимир"},
        {id: "3", name: "Иосиф"},
        {id: "4", name: "Борис"},
        {id: "5", name: "Владимир"},
    ],
    messagesData: [
        {id: "1", message: "Привет"},
        {id: "2", message: "Как дела"},
        {id: "3", message: "Нормально?"},
        {id: "4", message: "Нормально, не реально"},
        {id: "5", message: "так точно"},
    ]
}

const slice = createSlice({
    name: "dialogs",
    initialState: dialogsInitialState,
    reducers: {
        addDialogMessage(state, action: PayloadAction<{ dialogMessage: string }>) {
            const newMessage = {id: v1(), message: action.payload.dialogMessage};
            state.messagesData.push(newMessage)
        }
    }
})

export const dialogsPageSlice = slice.reducer
export const {addDialogMessage} = slice.actions