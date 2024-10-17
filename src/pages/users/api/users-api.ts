import axios from "axios";
import {Item} from "../model/usersSlice";

const instance = axios.create(
    {
        baseURL: "https://social-network.samuraijs.com/api/1.0/",
        withCredentials: true,
        headers: {
            "API-KEY": "efec5740-0aa3-4e1a-8682-caa77b0b5ed1"
        }
    }
)
export const usersAPI = {
    getUsers(page: number, pageSize: number) {
        return instance.get<ResponseUsers>(`users?page=${page}&count=${pageSize}`)
    }
}

export type ResponseUsers = {
    items: Item[];
    totalCount: number;
    error: string | null;
};
