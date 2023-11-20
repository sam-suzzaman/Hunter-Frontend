import React, { useContext, useEffect, useState } from "react";
import axios from "axios";

const jobContext = React.createContext();

const JobContext = ({ children }) => {
    const [jobLoading, setJobLoading] = useState(true);
    const [jobError, setJobError] = useState({ status: false, message: "" });
    const [jobs, setJobs] = useState({});

    const handleJobFetch = async (url) => {
        setJobLoading(true);
        try {
            const response = await axios.get(url, { withCredentials: true });
            setJobError({ status: false, message: "" });
            setJobs(response?.data?.result);
        } catch (error) {
            setUserError({ status: true, message: error?.message });
            setJobs({ status: false });
        }
        setJobLoading(false);
    };

    useEffect(() => {
        handleJobFetch(`https://hunter-backend-dun.vercel.app/api/v1/jobs`);
    }, []);

    const passing = { jobLoading, jobError, jobs, handleJobFetch };

    return (
        <jobContext.Provider value={passing}>{children}</jobContext.Provider>
    );
};

const useJobContext = () => useContext(jobContext);

export { useJobContext, JobContext };
