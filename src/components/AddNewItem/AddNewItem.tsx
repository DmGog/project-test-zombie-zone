import React, {useRef} from "react";
import s from "./AddNewItem.module.css";

type AddNewItemProps = {
    titleButton:string
}

export const AddNewItem = (props:AddNewItemProps) => {
    const {titleButton} = props;
    const newPostElement = useRef<HTMLTextAreaElement>(null)
    const addPost = () => {
        if (newPostElement.current) {
            const text = newPostElement.current.value
            alert(text)
        }
    }

    return (
        <div className={s.post_wrapper}>
            <textarea ref={newPostElement}></textarea>
            <div className={s.button_wrapper}>
                <button onClick={addPost}>{titleButton}</button>
            </div>

        </div>
    );
};

