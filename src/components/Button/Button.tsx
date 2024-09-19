import React from "react";

type Button = {
    title: string;
    onClickHandler: () => void;
}

export const Button = ({title, onClickHandler}: Button) => {
    return (
        <button onClick={onClickHandler}>{title}</button>
    );
};

