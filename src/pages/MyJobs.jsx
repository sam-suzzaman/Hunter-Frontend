import React, { useState } from "react";
import { CiSquarePlus } from "react-icons/ci";
import styled from "styled-components";
import { getAllHandler } from "../utils/FetchHandlers";
import { useQuery } from "@tanstack/react-query";
import LoadingComTwo from "../components/shared/LoadingComTwo";
import axios from "axios";

import { useUserContext } from "../context/UserContext";
import Applicant from "../components/MyJobsPage/Applicant";
import Recruiter from "../components/MyJobsPage/Recruiter";

const MyJobs = () => {
    const { user } = useUserContext();

    return (
        <Wrapper>
            <div className="title-row">
                Manage Job Applications
                <CiSquarePlus className="ml-1 text-xl md:text-2xl" />
            </div>
            {user?.role === "user" && <Applicant />}
            {user?.role === "admin" && <Recruiter />}
        </Wrapper>
    );
};
const Wrapper = styled.section`
    .title-row {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        font-size: calc(0.9rem + 0.4vw);
        text-transform: capitalize;
        letter-spacing: 1px;
        font-weight: 600;
        opacity: 0.85;
        color: var(--color-black);
        position: relative;
    }
    .title-row:before {
        content: "";
        position: absolute;
        bottom: -4px;
        left: 0;
        width: calc(30px + 0.7vw);
        height: calc(2px + 0.1vw);
        background-color: var(--color-primary);
    }
`;

export default MyJobs;
