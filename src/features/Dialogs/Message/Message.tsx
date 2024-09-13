import s from "../Dialogs.module.css";
import React from "react";


type MessageProps = {
    message: string
}
export const Message = (props: MessageProps) => {
    const {message} = props
    return (
        <div className={s.message}>
            {message}
        </div>
    )
}