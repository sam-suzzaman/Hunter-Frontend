import React, { useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

import { useQuery } from "@tanstack/react-query";
import { getSingleHandler } from "../utils/FetchHandlers";
import LoadingComTwo from "../components/shared/LoadingComTwo";

import advancedFormat from "dayjs/plugin/advancedFormat";
import dayjs from "dayjs";
dayjs.extend(advancedFormat);

import { MdAccessTime } from "react-icons/md";

const Job = () => {
    const { id } = useParams();
    const {
        isLoading,
        isError,
        data: job,
        error,
    } = useQuery({
        queryKey: ["job"],
        queryFn: () =>
            getSingleHandler(
                `https://hunter-backend-dun.vercel.app/api/v1/jobs/${id}`
            ),
    });

    if (isLoading) {
        return <LoadingComTwo />;
    }
    if (isError) {
        return <h2 className="">{error?.message}</h2>;
    }
    if (job) {
        console.log(job.result);
    }
    return (
        <Wrapper>
            <div className="top-row">
                <h2 className="title">
                    <span className="capitalize ">job title: </span>
                    {job.result?.position}
                </h2>
                <h4 className="company">
                    <span className="fancy">posted by: </span>
                    {job.result?.company}
                </h4>
                <h4 className="post-date">
                    <MdAccessTime className="text-lg mr-1" />
                    {dayjs(job?.result?.createdAt).format("MMM Do, YYYY")}
                </h4>
            </div>
            <div className="middle-row">
                <div className="description">
                    <h3 className="sec-title">description</h3>
                    <p className="">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Numquam, nam nobis! Explicabo nostrum tenetur nesciunt?
                        Eligendi veniam iste exercitationem iusto suscipit non
                        nobis quibusdam cum facere aliquid, esse veritatis
                        voluptate aut quo, architecto, sunt asperiores
                        temporibus possimus quasi eos laborum! Lorem ipsum dolor
                        sit amet consectetur adipisicing elit. Doloremque illum
                        natus tempore, blanditiis libero distinctio recusandae
                        earum, at, amet dicta fuga. Autem omnis veniam earum,
                        dolore quasi nulla tempore aperiam!
                    </p>
                </div>
                <h4 className="deadline">
                    Deadline: <span className="">20 Jan 2024</span>
                </h4>
                <h4 className="vacancy">
                    Job Vacancy: <span className="">04</span>
                </h4>
                <div className="requirement">
                    <h3 className="sec-title">Requirements</h3>
                    <p className="">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Iusto rerum, possimus reiciendis error temporibus
                        nam quod quaerat magnam architecto! Ipsum!
                    </p>
                    <ul>
                        <li>html</li>
                        <li>css</li>
                        <li>javaScript</li>
                        <li>Nodejs</li>
                        <li>expressjs</li>
                        <li>tailwindcss</li>
                        <li>nextjs</li>
                        <li>mongodb</li>
                    </ul>
                </div>
                <div className="facility">
                    <h3 className="sec-title">Facilities</h3>
                    <p className="">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Iusto rerum, possimus reiciendis error temporibus
                        nam quod quaerat magnam architecto! Ipsum!
                    </p>
                    <ul>
                        <li>html</li>
                        <li>css</li>
                        <li>javaScript</li>
                        <li>Nodejs</li>
                    </ul>
                </div>
                <h4 className="salary">
                    Salary: <span className="">10k (negotialbe)</span>
                </h4>
                <div className="apply">
                    <h3 className="sec-title">To apply</h3>

                    <p className="intro">send your cv/resume</p>
                    <p className="info">Email: demo@gmail.com</p>
                    <p className="info">Mobile: 01*********</p>
                </div>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.section`
    max-width: 1000px;
    margin: 0 auto;
    margin-bottom: calc(20px + 1vw);
    width: 100%;

    .top-row {
        margin-bottom: calc(30px + 1vw);
    }
    .top-row .title {
        font-size: calc(14px + 1vw);
        text-align: center;
    }
    .top-row .company {
        font-size: calc(11px + 0.35vw);
        text-align: center;
        text-transform: capitalize;
        font-weight: 600;
        margin-top: 4px;
        opacity: 0.75;
    }
    .top-row .post-date {
        font-size: 11px;
        font-weight: 600;
        text-transform: capitalize;
        text-align: center;
        opacity: 0.75;
        margin-top: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .middle-row .description h3 {
        font-size: calc(14px + 0.15vw);
        font-weight: 600;
        text-transform: capitalize;
        opacity: 0.8;
        text-decoration: underline;
    }
    .middle-row .description p {
        margin-top: 6px;
        font-size: calc(12px + 0.15vw);
        font-weight: 400;
        opacity: 0.95;
        text-align: justify;
        line-height: 23px;
    }
    .middle-row .deadline {
        font-size: calc(13px + 0.1vw);
        font-weight: 600;
        opacity: 0.8;
        margin-top: calc(10px + 0.3vw);
    }
    .middle-row .vacancy {
        font-size: calc(13px + 0.1vw);
        font-weight: 600;
        opacity: 0.8;
        margin-top: 4px;
        margin-bottom: calc(10px + 0.3vw);
    }
    .middle-row .requirement {
        margin-bottom: calc(10px + 0.3vw);
    }
    .middle-row .requirement .sec-title {
        font-size: calc(14px + 0.15vw);
        font-weight: 600;
        text-transform: capitalize;
        opacity: 0.8;
        text-decoration: underline;
    }
    .middle-row .requirement p {
        margin-top: 6px;
        font-size: calc(12px + 0.15vw);
        font-weight: 400;
        opacity: 0.95;
        text-align: justify;
        line-height: 23px;
    }
    .middle-row .requirement ul {
        margin-top: 6px;
        list-style: circle;
        margin-left: calc(30px + 0.5vw);
    }
    .middle-row .requirement ul li {
        font-size: calc(12px + 0.15vw);
        font-weight: 400;
        opacity: 0.95;
        text-transform: capitalize;
        padding: 2px 0;
    }

    .middle-row .facility .sec-title {
        font-size: calc(14px + 0.15vw);
        font-weight: 600;
        text-transform: capitalize;
        opacity: 0.8;
        text-decoration: underline;
    }
    .middle-row .facility {
        margin-bottom: calc(10px + 0.3vw);
    }
    .middle-row .facility p {
        margin-top: 6px;
        font-size: calc(12px + 0.15vw);
        font-weight: 400;
        opacity: 0.95;
        text-align: justify;
        line-height: 23px;
    }
    .middle-row .facility ul {
        margin-top: 6px;
        list-style: circle;
        margin-left: calc(30px + 0.5vw);
    }
    .middle-row .facility ul li {
        font-size: calc(12px + 0.15vw);
        font-weight: 400;
        opacity: 0.95;
        text-transform: capitalize;
        padding: 2px 0;
    }
    .middle-row .salary {
        font-size: calc(14px + 0.1vw);
        font-weight: 600;
        opacity: 0.85;
        margin-bottom: calc(10px + 0.3vw);
    }
    .middle-row .apply h3 {
        font-size: calc(14px + 0.15vw);
        font-weight: 600;
        text-transform: capitalize;
        opacity: 0.8;
        text-decoration: underline;
    }
    .middle-row .apply p {
        margin-top: 6px;
        font-size: calc(12px + 0.15vw);
        font-weight: 400;
        opacity: 0.95;
    }
    .middle-row .apply p.intro {
        text-transform: capitalize;
    }
    .middle-row .apply p.info {
        font-weight: 600;
        opacity: 0.8;
    }
`;

export default Job;
