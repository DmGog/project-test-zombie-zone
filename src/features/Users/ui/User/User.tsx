import React, {useEffect, useState} from "react";
import {Item} from "../../model/usersSlice";
import s from "./User.module.css"
import {getRandomAvatar} from "../../model/random-avatar-user";


type User = {
    user: Item
    follow: (userId: number) => void
    unFollow: (userId: number) => void
}
export const User = (props: User) => {
    const [avatarSrc, setAvatarSrc] = useState<string>(props.user.photos.small || getRandomAvatar());

    useEffect(() => {

        if (props.user.photos.small === null) {
            setAvatarSrc(getRandomAvatar());
        } else {
            setAvatarSrc(props.user.photos.small);
        }
    }, [props.user.photos.small]);

    return (
        <div className={s.wrapperUser}>
            <div className={s.wrapperUserImgButton}>
                <img src={avatarSrc} alt={props.user.name}/>
                {props.user.followed
                    ? <button className={s.unFollow} onClick={() => props.unFollow(props.user.id)}>unsubscribe</button>
                    : <button className={s.follow} onClick={() => props.follow(props.user.id)}>subscribe</button>}
            </div>
            <div className={s.wrapperInfoUser}>
                <h2>{props.user.name}</h2>
                <span>{props.user.status!==null?props.user.status:"IT-INCUBATOR"}</span>
            </div>
        </div>
    );
};

