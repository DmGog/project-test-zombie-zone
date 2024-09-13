import {createBrowserRouter, Navigate, RouteObject} from "react-router-dom";
import App from "../app/App";
import {Profile} from "../features/Profile/Profile";
import {Dialogs} from "../features/Dialogs/Dialogs";
import React from "react";
import {News} from "../features/News/News";
import {Music} from "../features/Music/Music";
import {Settings} from "../features/Settings/Settings";


export const PATH = {
    PROFILE: "/profile",
    MESSAGES: "/dialogs",
    NEWS: "/news",
    MUSIC: "/music",
    SETTINGS: "/settings",
} as const

const publicRoutes: RouteObject[] = [
    {
        path: PATH.PROFILE,
        element: <Profile/>,
    },
    {
        path: PATH.MESSAGES,
        element: <Dialogs/>,
    },
    {
        path: PATH.NEWS,
        element: <News/>,
    },
    {
        path: PATH.MUSIC,
        element: <Music/>,
    },
    {
        path: PATH.SETTINGS,
        element: <Settings/>,
    }
]
export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                index: true,
                element: <Navigate to={PATH.PROFILE}/>
            }, ...publicRoutes
        ],
    },
]);