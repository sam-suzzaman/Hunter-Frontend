import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";
import DashboardLayout from "../Layout/DashboardLayout";

// Pages
import {
    Register,
    Login,
    Landing,
    Error,
    AllJobs,
    Stats,
    Profile,
    Admin,
    EditJob,
    AddJob,
    ManageJobs,
} from "../pages";
import ProtectAdminRoute from "../components/shared/ProtectAdminRoute";
import { JobContext } from "../context/JobContext";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <Landing />,
            },
            {
                path: "register",
                element: <Register></Register>,
            },
            {
                path: "login",
                element: <Login></Login>,
            },
            {
                path: "dashboard",
                element: (
                    <ProtectAdminRoute>
                        <JobContext>
                            <DashboardLayout></DashboardLayout>
                        </JobContext>
                    </ProtectAdminRoute>
                ),
                children: [
                    {
                        index: true,
                        element: <AddJob />,
                    },
                    {
                        path: "stats",
                        element: <Stats />,
                    },
                    {
                        path: "all-jobs",
                        element: <AllJobs />,
                    },
                    {
                        path: "manage-jobs",
                        element: <ManageJobs />,
                    },
                    {
                        path: "profile",
                        element: <Profile />,
                    },
                    {
                        path: "admin",
                        element: <Admin />,
                    },
                    {
                        path: "edit-job/:id",
                        element: <EditJob />,
                    },
                    {
                        path: "delete-job/:id",
                    },
                ],
            },
        ],
    },
]);

export default router;
