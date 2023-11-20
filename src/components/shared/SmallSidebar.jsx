import React from "react";
import styled from "styled-components";
import Logo from "../Logo";
import { FaTimes } from "react-icons/fa";
import DashboardNavLinks from "./DashboardNavLinks";
import { useDashboardContext } from "../../Layout/DashboardLayout";

const SmallSidebar = () => {
    const { showSidebar, setShowSidebar } = useDashboardContext();

    return (
        <Wrapper>
            <div
                className={
                    showSidebar
                        ? "sidebar-container show-sidebar"
                        : "sidebar-container"
                }
                onClick={() => setShowSidebar(!showSidebar)}
            >
                <div className={showSidebar ? "content show" : "content"}>
                    <button type="button" className="close-btn">
                        <FaTimes />
                    </button>
                    <header>
                        <Logo />
                    </header>
                    <DashboardNavLinks />
                </div>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.aside`
    @media (min-width: 992px) {
        display: none;
    }
    .sidebar-container {
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: -1;
        opacity: 0;
        transition: all 0.3s linear;
        visibility: hidden;
    }
    .show-sidebar {
        z-index: 99;
        opacity: 1;
        visibility: visible;
    }
    .content {
        background: var(--color-white);
        width: 90%;
        border-radius: 6px;
        padding: 2rem 1rem;
        position: relative;
        display: flex;
        align-items: center;
        flex-direction: column;
        transform: scale(0);
        transition: all 0.3s linear;
    }
    .show {
        transform: scale(1);
    }
    .close-btn {
        position: absolute;
        top: -10px;
        left: -10px;
        background: var(--color-white);
        border-color: transparent;
        font-size: 1.2rem;
        color: var(--color-danger);
        border-radius: 50%;
        padding: 3px;
        cursor: pointer;
    }
    .nav-links {
        width: 80%;
        padding-top: 1.2rem;
        display: flex;
        flex-direction: column;
    }
    .nav-link {
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--color-black);
        padding: 0.6rem 0;
        margin: 0.1rem 0;
        text-transform: capitalize;
        transition: all 0.3s linear;
    }
    .nav-link:hover {
        color: var(--color-primary);
        background-color: rgba(0, 0, 0, 0.05);
        opacity: 0.9;
    }
    .icon {
        font-size: 1.5rem;
        margin-right: 1rem;
        display: grid;
        place-items: center;
    }
    .active {
        color: var(--color-primary);
        background-color: rgba(0, 0, 0, 0.05);
        opacity: 0.9;
    }
`;

export default SmallSidebar;
