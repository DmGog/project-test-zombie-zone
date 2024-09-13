import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type DialogType = {
    id: number
    name: string
}

type MessageType = {
    id: number;
    message: string;
}

export type DialogsStateType = {
    dialogsData: DialogType[];
    messagesData: MessageType[];
}

const dialogsInitialState = {
    dialogsData: [
        {id: 1, name: "Петр"},
        {id: 2, name: "Владимир"},
        {id: 3, name: "Иосиф"},
        {id: 4, name: "Борис"},
        {id: 5, name: "Владимир"},
    ],
    messagesData: [
        {id: 1, message: "Привет"},
        {id: 2, message: "Как дела"},
        {id: 3, message: "Нормально?"},
        {id: 4, message: "Нормально, не реально"},
        {id: 5, message: "так точно"},
    ]
}

const slice = createSlice({
    name: "dialogs",
    initialState: dialogsInitialState,
    reducers: {
        setDialogs(state, action: PayloadAction<DialogsStateType>) {
            return state
        }
    }
})

export const dialogsReducer = slice.reducer