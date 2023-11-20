import React from "react";
import styled from "styled-components";

import JobsListCom from "../components/AllJobsPage/JobsListCom";
import { JobContext, useJobContext } from "../context/JobContext";
import SearchAndFilter from "../components/AllJobsPage/SearchAndFilter";

const AllJobs = () => {
    return (
        <JobContext>
            <Wrapper>
                <SearchAndFilter />
                <JobsListCom />
            </Wrapper>
        </JobContext>
    );
};

const Wrapper = styled.section``;
export default AllJobs;
