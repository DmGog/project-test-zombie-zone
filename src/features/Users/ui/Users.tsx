import React, {useEffect} from "react";
import {useSelector} from "react-redux";
import {fetchUsers, followUsers, Item, unFollowUsers} from "../model/usersSlice";
import {AppRootState, useAppDispatch} from "../../../app/store";
import {User} from "./User/User";


export const Users = () => {
    const users = useSelector<AppRootState, Item[]>(state => state.usersPage.users);
    const dispatch = useAppDispatch();


    useEffect(() => {
        dispatch(fetchUsers())
    }, []);

    const follow = (userId: number) => {
        dispatch(followUsers({userId}))
    }
    const unFollow = (userId: number) => {
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

