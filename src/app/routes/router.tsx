import {HashRouter, Navigate, Route, RouteObject, Routes} from "react-router-dom";
import App from "../App";
import {Profile} from "../../pages/profile/Profile";
import {Dialogs} from "../../pages/dialogs/Dialogs";
import React from "react";
import {News} from "../../pages/news/News";
import {Music} from "../../pages/music/Music";
import {Settings} from "../../pages/settings/Settings";
import {Users} from "../../pages/users/ui/Users";


export const PATH = {
    PROFILE: "/profile",
    MESSAGES: "/dialogs",
    NEWS: "/news",
    MUSIC: "/music",
    USERS: "/users",
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
        path: PATH.USERS,
        element: <Users/>,
    },
    {
        path: PATH.SETTINGS,
        element: <Settings/>,
    }
]
// export const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <App/>,
//         children: [
//             {
//                 index: true,
//                 element: <Navigate to={PATH.PROFILE}/>
//             }, ...publicRoutes
//         ],
//     },
// ]);
//
export const AppRouter = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route index element={<Navigate to={PATH.PROFILE} />} />
                    {publicRoutes.map((route) => (
                        <Route key={route.path} path={route.path} element={route.element} />
                    ))}
                </Route>
            </Routes>
        </HashRouter>
    );
};