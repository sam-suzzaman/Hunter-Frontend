import React from "react";
import Wrapper from "../assets/css/wrappers/Dashboard";
import { Outlet } from "react-router-dom";

import { SmallSidebar, LargeSidebar, DashboardNavbar } from "../components";

const DashboardLayout = () => {
    return (
        <Wrapper>
            <main className="dashboard">
                <SmallSidebar />
                <LargeSidebar />
                <div className="">
                    <DashboardNavbar />
                    <div className="dashboard-page">
                        <Outlet />
                    </div>
                </div>
            </main>
        </Wrapper>
    );
};

export default DashboardLayout;
