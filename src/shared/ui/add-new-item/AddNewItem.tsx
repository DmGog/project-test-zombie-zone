import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import s from "./AddNewItem.module.css";
import {Button} from "../button/Button";

type AddNewItemProps = {
    titleButton: string
    addMessage: (message: string) => void
}

export const AddNewItem = (props: AddNewItemProps) => {
    const {titleButton, addMessage} = props;
    const [message, setMessage] = useState("");
    const [error, setError] = useState<string | null>(null)

    const addPost = () => {
        if (message.trim() !== "") {
            addMessage(message.trim())
            setMessage("")

        } else {
            setError("Message is required")
        }
    }
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(e.currentTarget.value)
        if (error) {
            setError(null)
        }
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (error !== null) {
            setError(null)
        }
        if (e.charCode === 13) {
            addPost()
        }
    }
    return (
        <div className={s.post_wrapper}>
            <textarea value={message} onChange={onChangeHandler} onKeyPress={onKeyPressHandler}></textarea>
            {error && <div style={{color: "red", fontSize: "20px"}}>Message is required</div>}
            <div className={s.button_wrapper}>
                <Button title={titleButton} onClickHandler={addPost}/>
            </div>

        </div>
    );
};

