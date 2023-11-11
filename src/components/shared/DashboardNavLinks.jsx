import React from "react";
import links from "../../utils/DashboardNavLinkData";
import { NavLink } from "react-router-dom";

const DashboardNavLinks = () => {
    return (
        <div className="nav-links">
            {links?.map((link) => {
                const { text, path, icon } = link;
                return (
                    <NavLink to={path} key={text} className="nav-link" end>
                        <span className="icon">{icon}</span>
                        {text}
                    </NavLink>
                );
            })}
        </div>
    );
};

export default DashboardNavLinks;
