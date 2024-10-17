import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

type DialogItemProps = {
    name: string
    id: string
}
export const DialogItem = (props: DialogItemProps) => {
    const {name, id} = props
    return (
        <div className={s.dialog}>
            <NavLink to={`/dialogs/${id}`}>{name}</NavLink>
        </div>
    )
}