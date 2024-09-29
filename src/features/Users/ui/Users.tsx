import React, {useEffect} from "react";
import {useSelector} from "react-redux";
import {fetchUsers, followUsers, Item, setCurrentPage, unFollowUsers} from "../model/usersSlice";
import {AppRootState, useAppDispatch} from "../../../app/store";
import {User} from "./User/User";
import {Pagination} from "@mui/material";
import s from "./Users.module.css";


export const Users = () => {
    const users = useSelector<AppRootState, Item[]>(state => state.usersPage.users);
    const pageSize = useSelector<AppRootState, number>(state => state.usersPage.pageSize);
    const totalUsersCount = useSelector<AppRootState, number>(state => state.usersPage.totalUsersCount);
    const currentPage = useSelector<AppRootState, number>(state => state.usersPage.currentPage);
    const dispatch = useAppDispatch();


    useEffect(() => {
        dispatch(fetchUsers({page: currentPage, pageSize}))
    }, [currentPage, pageSize, dispatch]);

    const follow = (userId: number) => {
        dispatch(followUsers({userId}))
    }
    const unFollow = (userId: number) => {
        dispatch(unFollowUsers({userId}))
    }

    const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
        dispatch(setCurrentPage(value));
        dispatch(fetchUsers({page: value, pageSize}));
    };

    return (
        <div className={s.wrapperUsers}>
            <Pagination count={Math.ceil(totalUsersCount / pageSize)} className={s.paginator} page={currentPage}
                        onChange={handlePageChange}/>
            {
                users.map((e) => {
                    return <User key={e.id} user={e} follow={follow} unFollow={unFollow}/>
                })
            }
        </div>
    );
};

