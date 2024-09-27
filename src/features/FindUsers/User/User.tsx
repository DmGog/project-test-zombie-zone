import React from "react";
import {UserData} from "../usersSlice";
import s from "./User.module.css"

type User = {
    user: UserData
    follow: (userId: number) => void
    unFollow: (userId: number) => void
}
export const User = (props: User) => {
    return (
        <div className={s.wrapperUser}>
            <div className={s.wrapperUserImgButton}>
                <img src={props.user.photoUrl}/>
                {props.user.followed
                    ? <button className={s.unFollow} onClick={() => props.unFollow(props.user.id)}>unfollow</button>
                    : <button className={s.follow} onClick={() => props.follow(props.user.id)}>follow</button>}
            </div>
            <div className={s.wrapperInfoUser}>
                <h2>{props.user.fullName}</h2>
                <span>{props.user.status}</span>
                <div className={s.location}>
                    <span>{props.user.location.city}</span>
                    <span>{props.user.location.country}</span>
                </div>
            </div>
        </div>
    );
};

