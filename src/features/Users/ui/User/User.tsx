import React, {useEffect, useState} from "react";
import {Item} from "../../model/usersSlice";
import s from "./User.module.css"
import {getRandomAvatar} from "../../model/random-avatar-user";


type UserProps = {
    user: Item
    follow: (userId: number) => void
    unFollow: (userId: number) => void
}
export const User = ({user, follow, unFollow}: UserProps) => {
    const [avatarSrc, setAvatarSrc] = useState<string>(user.photos.small || getRandomAvatar());

    useEffect(() => {

        if (user.photos.small === null) {
            setAvatarSrc(getRandomAvatar());
        } else {
            setAvatarSrc(user.photos.small);
        }
    }, [user.photos.small]);

    return (
        <div className={s.wrapperUser}>
            <div className={s.wrapperUserImgButton}>
                <img src={avatarSrc} alt={user.name}/>
                {user.followed
                    ? <button className={s.unFollow} onClick={() => unFollow(user.id)}>unsubscribe</button>
                    : <button className={s.follow} onClick={() => follow(user.id)}>subscribe</button>}
            </div>
            <div className={s.wrapperInfoUser}>
                <h2 className={s.userName}>{user.name}</h2>
                <span className={s.userStatus}>{user.status !== null ? user.status : "IT-INCUBATOR"}</span>
            </div>
        </div>
    );
};

