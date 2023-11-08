import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";

// Pages
import { HomeLayout, DashboardLayout, Register, Login } from "../pages";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <HomeLayout></HomeLayout>,
            },
            {
                path: "/register",
                element: <Register></Register>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/dashboard",
                element: <DashboardLayout></DashboardLayout>,
            },
        ],
    },
]);

export default router;
