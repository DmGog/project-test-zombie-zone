import React from "react";
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

export const Dialogs = () => {

    const dialogsData = [
        {id: 1, name: "Петр"},
        {id: 2, name: "Владимир"},
        {id: 3, name: "Иосиф"},
        {id: 4, name: "Борис"},
        {id: 5, name: "Владимир"},
    ]

    const messagesData = [
        {id: 1, message: "Привет"},
        {id: 2, message: "Как дела"},
        {id: 3, message: "Нормально?"},
        {id: 4, message: "Нормально, не реально"},
        {id: 5, message: "так точно"},
    ]


    return (
        <div className={s.dialogs_wrapper}>
            <div className={s.dialogs_items}>
                {dialogsData.map(e => {
                    return <DialogItem key={e.id} name={e.name} id={e.id}/>
                })}
            </div>
            <div className={s.messages}>
                {
                    messagesData.map(e => {
                        return <Message key={e.id} message={e.message}/>
                    })
                }
            </div>
        </div>
    );
};

type DialogItemProps = {
    name: string
    id: number
}

const DialogItem = (props: DialogItemProps) => {
    const {name, id} = props
    return (
        <div className={s.dialog}>
            <NavLink to={`/dialogs/${id}`}>{name}</NavLink>
        </div>
    )
}

type MessageProps = {
    message: string
}

const Message = (props: MessageProps) => {
    const {message} = props
    return (
        <div className={s.message}>
            {message}
        </div>
    )
}