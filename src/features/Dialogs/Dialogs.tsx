import React from "react";
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {useSelector} from "react-redux";
import {AppRootState} from "../../app/store";
import {DialogsStateType} from "./dialogs-reducer";
import {AddNewItem} from "../../components/AddNewItem/AddNewItem";

export const Dialogs = () => {
    const {dialogsData, messagesData} = useSelector<AppRootState, DialogsStateType>(state => state.dialogs)

    return (
        <div className={s.dialogs_wrapper}>
            <div className={s.dialogs_items}>
                {dialogsData.map(e => {
                    return <DialogItem key={e.id} name={e.name} id={e.id}/>
                })}
            </div>
            <div className={s.messages}>
                {messagesData.map(e => {
                    return <Message key={e.id} message={e.message}/>
                })}
            </div>
            <AddNewItem titleButton={"add message"}/>

        </div>
    );
};

