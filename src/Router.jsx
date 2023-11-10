    import {createBrowserRouter } from "react-router-dom";
    import React from "react";
    import Lenen from "./components/lenen";
    import Register from "./components/Register.jsx";
    import Login from "./components/Login.jsx";
    import Beheerder from "./components/beheerder";
    import DashboardBlokken from "./components/dashboardblokken";
    import DashboardStudent from "./components/dashboardstudent";
    import Geschiedenis from "./components/geschiedenis";
    import Nieuwitem from "./components/nieuwitem";
    import Itembewerken from "./components/itembewerken";

    export const Router = createBrowserRouter([
        {
            path: "/",
            element: <DashboardStudent />,
        },
        {
            path: "/nieuwitem",
            element: <Nieuwitem />,
        },
        {
            path: "/itembewerken",
            element: <Itembewerken />,
        },
        {
            path: "/login",
            element: <Login />,
        },
        {
            path: "/register",
            element: <Register />,
        },
        {
            path: "/lenen",
            element: <Lenen />, 
        },
        {
            path: "/beheren",
            element: <Beheerder />,
        },
        {
            path: "/geschiedenis",
            element: <Geschiedenis/>,
        },    
        {
            path: "/dashboardblokken",
            element: <DashboardBlokken kleur="#ffa500" text="geleend afgelopen maand" type=""/>,
        },
    ]);