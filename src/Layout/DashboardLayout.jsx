import React, { createContext, useContext, useState } from "react";
import Wrapper from "../assets/css/wrappers/Dashboard";
import { Outlet } from "react-router-dom";

import { SmallSidebar, LargeSidebar, DashboardNavbar } from "../components";

const DashboardContext = createContext();

const DashboardLayout = () => {
    const user = { name: "samsuzzaman sajib" };
    const [showSidebar, setShowSidebar] = useState(false);

    const handleLogout = async () => {
        console.log("log out");
    };

    // passing values
    const values = { user, showSidebar, setShowSidebar };
    return (
        <DashboardContext.Provider value={values}>
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
        </DashboardContext.Provider>
    );
};

export const useDashboardContext = () => useContext(DashboardContext);
export default DashboardLayout;
