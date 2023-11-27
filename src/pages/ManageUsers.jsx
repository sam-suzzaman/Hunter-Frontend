import React from "react";
import { useJobContext } from "../context/JobContext";
import LoadingComTwo from "../components/shared/LoadingComTwo";
import { CiSquarePlus } from "react-icons/ci";
import styled from "styled-components";

import Swal from "sweetalert2";

const ManageUsers = () => {
    const { jobs, setJobs, jobLoading, handleJobFetch } = useJobContext();

    const updateUserModal = (id, role) => {
        console.log(id, role);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#19b74b",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes",
        }).then((result) => {
            if (result.isConfirmed) {
                UpdateUserRole(id, role);
            }
        });
    };

    const UpdateUserRole = async (id, role) => {
        try {
            // const response = await axios.patch(
            //     `https://hunter-backend-dun.vercel.app/api/v1/jobs/${id}`,
            //     {
            //         role,
            //     },
            //     { withCredentials: true }
            // );

            Swal.fire({
                title: "Done!",
                text: "Role Updated Successfully",
                icon: "success",
            });
        } catch (error) {
            Swal.fire({
                title: "Sorry!",
                text: error?.message,
                icon: "error",
            });
        }
    };

    if (jobLoading) {
        return <LoadingComTwo />;
    }

    if (!jobs?.result?.length) {
        return (
            <h2 className="text-lg md:text-3xl font-bold text-red-600 text-center mt-12">
                -- User List is Empty --
            </h2>
        );
    }
    return (
        <Wrapper>
            <div className="title-row">
                Manage Users
                <CiSquarePlus className="ml-1 text-xl md:text-2xl" />
            </div>
            <div className="content-row">
                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Username</th>
                            <th>Role</th>
                            <th>actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {jobs?.result?.map((job, index) => {
                            let i =
                                index + 1 < 10 ? `0${index + 1}` : index + 1;
                            return (
                                <tr key={job._id}>
                                    <td>{i}</td>
                                    <td>{job?.position}</td>
                                    <td>{job?.company}</td>
                                    <td className="action-row">
                                        <button
                                            className="action admin"
                                            onClick={() =>
                                                updateUserModal(
                                                    job._id,
                                                    "admin"
                                                )
                                            }
                                        >
                                            admin
                                        </button>
                                        <button
                                            className="action recruiter"
                                            onClick={() =>
                                                updateUserModal(
                                                    job._id,
                                                    "recruiter"
                                                )
                                            }
                                        >
                                            recuiter
                                        </button>
                                        <button
                                            className="action user"
                                            onClick={() =>
                                                updateUserModal(job._id, "user")
                                            }
                                        >
                                            user
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
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
    .content-row {
        overflow-x: auto;
        margin-top: calc(2rem + 0.5vw);
    }
    .table {
        border-collapse: collapse;
        border-spacing: 0;
        width: 100%;
        border: 1px solid #ddd;
        border-radius: 8px;
    }
    .table thead {
        background-color: var(--color-accent);
        color: var(--color-white);
        font-size: 14px;
        letter-spacing: 1px;
        font-weight: 400;
        text-transform: capitalize;
    }

    .table th,
    .table td {
        text-align: left;
        padding: 12px;
    }

    .table tbody tr {
        font-size: 15px;
        font-weight: 400;
        text-transform: capitalize;
        letter-spacing: 1px;
        transition: all 0.2s linear;
    }

    .table tbody tr:nth-child(even) {
        background-color: #00000011;
    }

    .table .action-row {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        column-gap: 12px;
    }
    .table .action-row .action {
        font-size: 16px;
        padding: 1px 8px;
        border-radius: 4px;
        color: #fff;
        text-transform: capitalize;
    }
    .action.recruiter {
        background-color: #ac04ac;
    }
    .action.admin {
        background-color: #5f14c7;
    }
    .action.user {
        background-color: #c714c7;
    }
`;

export default ManageUsers;
