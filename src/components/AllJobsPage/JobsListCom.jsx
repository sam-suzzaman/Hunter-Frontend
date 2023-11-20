import React from "react";
import { useJobContext } from "../../context/JobContext";
import LoadingComTwo from "../shared/LoadingComTwo";
import styled from "styled-components";
import JobCard from "./JobCard";

const JobsListCom = () => {
    const { jobLoading, jobs } = useJobContext();
    // console.log(jobs);
    if (jobLoading) {
        return <LoadingComTwo />;
    }
    return (
        <Wrapper>
            <h5 className="job-count">
                Total
                <span className="fancy">
                    {jobs?.length < 10 ? `0${jobs?.length}` : jobs?.length}
                </span>
                jobs are found
            </h5>

            <div className="list-container">
                {jobs?.map((job) => (
                    <JobCard key={job._id} job={job} />
                ))}
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    background-color: var(--color-gray);
    padding: 1rem;

    .job-count {
        font-size: 11px;
        font-weight: 600;
        color: var(--color-black);
        opacity: 0.8;
    }
    .job-count .fancy {
        color: var(--color-primary);
        margin: 0 5px;
        font-size: 13px;
        opacity: 1;
    }

    .list-container {
        margin-top: 1.5rem;
        display: grid;
        grid-template-columns: repeat(2, minmax(auto, 500px));
        justify-content: center;
        grid-gap: 1.5rem;
    }
    @media screen and (max-width: 890px) {
        .list-container {
            grid-template-columns: 1fr;
            grid-gap: 1.5rem;
            justify-content: center;
        }
    }
`;

export default JobsListCom;
