import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { getSingleHandler } from "../utils/FetchHandlers";
import axios from "axios";
import LoadingComTwo from "../components/shared/LoadingComTwo";

const EditJob = () => {
    const { id } = useParams();
    const [jobLoading, setJobLoading] = useState(true);
    const [job, setJob] = useState({});
    const [jobError, setJobError] = useState({ status: false, message: "" });

    const fetchdata = async () => {
        setJobLoading(true);
        try {
            const res = await getSingleHandler(
                `https://hunter-backend-dun.vercel.app/api/v1/jobs/${id}`
            );
            setJob(res?.result);
        } catch (error) {
            setJobError({ status: true, message: error?.message });
        }
        setJobLoading(false);
    };
    useEffect(() => {
        fetchdata();
    }, [id]);

    if (jobLoading) {
        return <LoadingComTwo />;
    }
    if (jobError?.status) {
        return <h2 className="">{jobError?.message}</h2>;
    }
    return <Wrapper>{job._id}</Wrapper>;
};

const Wrapper = styled.section``;

export default EditJob;
