import React from "react";
import {useSelector} from "react-redux";
import {followUsers, unFollowUsers, UserData} from "./usersSlice";
import {AppRootState, useAppDispatch} from "../../app/store";
import {User} from "./User/User";


export const Users = () => {
    const users = useSelector<AppRootState, UserData[]>(state => state.usersPage.users);
    const dispatch = useAppDispatch();

    const follow = (userId: number) => {
        console.log(userId)
        dispatch(followUsers({userId}))

    }
    const unFollow = (userId: number) => {
        console.log(userId)
        dispatch(unFollowUsers({userId}))

    }

    return (
        <div>
            {
                users.map((e) => {
                    return <User key={e.id} user={e} follow={follow} unFollow={unFollow}/>
                })
            }
        </div>
    );
};

