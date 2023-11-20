import React from "react";
import styled from "styled-components";

import JobsListCom from "../components/AllJobsPage/JobsListCom";
import { JobContext, useJobContext } from "../context/JobContext";

const AllJobs = () => {
    return (
        <JobContext>
            <Wrapper>
                <JobsListCom />
            </Wrapper>
        </JobContext>
    );
};

const Wrapper = styled.section``;
export default AllJobs;
